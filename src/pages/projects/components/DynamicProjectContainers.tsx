"use client";

import { Box } from "@mui/material";
import { ProjectContainer } from "./ProjectContainer";
import { projects } from "../constants/projectCard";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

function useInfiniteAutoScroll(
  ref: React.RefObject<HTMLDivElement | null>,
  speed: number = 40 // smaller = slower
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Avoid cloning twice
    if (!el.dataset.cloned) {
      const kids = Array.from(el.children);
      kids.forEach((c) => el.appendChild(c.cloneNode(true)));
      el.dataset.cloned = "true";
    }

    const wrapWidth = el.scrollWidth / 2;
    let scrollPos = 0;
    let running = true;

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
  }, [ref, speed]);
}

export const DynamicProjectRowContainers = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useInfiniteAutoScroll(scrollerRef, 30); // ↓ lower = slower, e.g. 20 or 10

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
        {projects.map((p) => (
          <Box key={p.id} sx={{ flex: "0 0 320px" }}>
            <ProjectContainer
              gridArea={`container-${p.id}`}
              projectStack={p.projectStack}
              nameOfProject={p.nameOfProject}
              shortSummary={p.shortSummary}
              icon={p.icon}
            />
          </Box>
        ))}
      </Box>
      <Box display="flex" gridArea="center-space" />
    </Box>
  );
};
