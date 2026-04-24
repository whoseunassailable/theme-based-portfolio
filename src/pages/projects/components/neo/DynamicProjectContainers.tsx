"use client";

import { Box } from "@mui/material";
import { ProjectContainer } from "./ProjectContainer";
import { useMemo, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { projects } from "../../constants/projectCard";

function useInfiniteAutoScroll(
  ref: React.RefObject<HTMLDivElement | null>,
  speed: number = 40,
  resetKey?: string,
  repeatCount: number = 2,
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const wrapWidth = el.scrollWidth / repeatCount;
    let scrollPos = 0;
    let running = true;
    el.scrollLeft = 0;

    if (wrapWidth <= 0 || el.scrollWidth <= el.clientWidth) {
      return;
    }

    const tick = (_time: number, deltaTime: number, _frame: number) => {
      if (!running) return;

      scrollPos += deltaTime * (speed / 1000); // move based on time delta
      el.scrollLeft = scrollPos;

      if (el.scrollLeft >= wrapWidth) scrollPos -= wrapWidth;
      else if (el.scrollLeft < 0) scrollPos += wrapWidth;
    };

    gsap.ticker.add(tick);

    const pause = () => (running = false);
    const resume = () => (running = true);
    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    return () => {
      gsap.ticker.remove(tick);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [ref, speed, resetKey, repeatCount]);
}

export const DynamicProjectRowContainers = ({
  selectedCategory,
}: {
  selectedCategory: string;
}) => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "All") {
      return projects;
    }

    return projects.filter((project) =>
      project.categories.includes(selectedCategory),
    );
  }, [selectedCategory]);

  const repeatCount = filteredProjects.length > 0 ? 4 : 0;
  const repeatedProjects = useMemo(
    () =>
      Array.from({ length: repeatCount }, () => filteredProjects).flat(),
    [filteredProjects, repeatCount],
  );

  useInfiniteAutoScroll(scrollerRef, 30, selectedCategory, repeatCount);

  return (
    <Box
      sx={{
        marginY: 10,
        display: "grid",
        gridTemplateColumns: { md: "0.35fr 3fr 0.15fr 3fr 0.15fr 3fr" },
        gridTemplateAreas: `"space-left container-1 center-space container-2 center-space-2 container-3"`,
        position: "relative",
      }}
    >
      <Box display="flex" gridArea="space-left" />
      <Box
        id="container-1"
        ref={scrollerRef}
        gridArea="container-1 / container-1 / container-3 / container-3"
        sx={{
          display: "flex",
          gap: 2.5,
          overflowX: "hidden",
          overflowY: "hidden",
          py: 2,
          minHeight: 260,
          // scrollSnapType: "x mandatory", // keep off for auto-scroll
          px: { xs: 2, md: 0 },
          width: "100%",
        }}
      >
        {repeatedProjects.map((p, index) => (
          <Box key={`${p.id}-${index}`} sx={{ flex: "0 0 320px" }}>
            <ProjectContainer
              projectId={p.id}
              gridArea={`container-${p.id}`}
              projectStack={p.projectStack}
              nameOfProject={p.nameOfProject}
              shortSummary={p.shortSummary}
              icon={p.icon}
              detailEnabled={p.detailEnabled}
              externalUrl={p.externalUrl}
            />
          </Box>
        ))}
      </Box>
      <Box display="flex" gridArea="center-space" />
    </Box>
  );
};
