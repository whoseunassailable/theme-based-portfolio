"use client";

import { Box } from "@mui/material";
import { ProjectContainer } from "./ProjectContainer";
import { projects } from "../constants/projectCard";
import {
  animate,
  motion,
  MotionValue,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useRef } from "react";

/**
 * ==============  Public component  ==============
 */
export const DynamicProjectRowContainers = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const { scrollXProgress } = useScroll({ container: scrollerRef });
  const maskImage = useScrollOverflowMask(scrollXProgress);

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
      {/* Progress ring pinned to the row */}
      <ProgressRing progress={scrollXProgress} />

      <Box display="flex" gridArea="space-left" />

      {/* Scrollable row that holds the 3 containers */}
      <Box
        // use motion.div to allow style={{ maskImage }} (and webkit)
        component={motion.div}
        ref={scrollerRef}
        gridArea="container-1 / container-1 / container-3 / container-3" // span across the three container areas to make one scroller
        sx={{
          display: "flex",
          gap: 2.5,
          overflowX: "auto",
          overflowY: "hidden",
          py: 2,
          // nice scrollbars
          "&::-webkit-scrollbar": { height: 6 },
          "&::-webkit-scrollbar-thumb": {
            background: "var(--accent, #6c5ce7)",
            borderRadius: 999,
          },
          "&::-webkit-scrollbar-track": { background: "rgba(255,255,255,0.2)" },
          // ensure the row is tall enough for cards
          minHeight: 260,
          // optional snapping
          scrollSnapType: "x mandatory",
          px: { xs: 2, md: 0 },
          // keep the row centered in your grid width
          width: "100%",
        }}
        // dynamic mask (both standard and -webkit-)
        style={{
          maskImage,
          WebkitMaskImage: maskImage as unknown as string,
        }}
      >
        {projects.slice(0, 3).map((p) => (
          <Box
            key={p.id}
            sx={{
              flex: "0 0 320px",
              scrollSnapAlign: "start",
            }}
          >
            <ProjectContainer
              gridArea={"container-1"}
              projectStack={p.projectStack}
              nameOfProject={p.nameOfProject}
              shortSummary={p.shortSummary}
              icon={p.icon}
            />
          </Box>
        ))}
      </Box>

      {/* keep your spacers if needed to preserve grid template */}
      <Box display="flex" gridArea="center-space" />
      <Box display="flex" gridArea="center-space-2" />
    </Box>
  );
};

/**
 * ==============  Progress Ring  ==============
 */
function ProgressRing({ progress }: { progress: MotionValue<number> }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: -52,
        left: { xs: 0, md: -8 },
        width: 80,
        height: 80,
        transform: "rotate(-90deg)",
        pointerEvents: "none",
      }}
    >
      <svg width="80" height="80" viewBox="0 0 100 100">
        <circle
          cx="50"
          cy="50"
          r="30"
          pathLength={1}
          stroke="#0b1011"
          strokeWidth="10"
          fill="none"
        />
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          pathLength={1}
          style={{ pathLength: progress }}
          stroke="var(--accent, #6c5ce7)"
          strokeWidth="10"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </Box>
  );
}

/**
 * ==============  Edge Fade Mask Hook  ==============
 * Matches your example’s behavior: solid edge at extremes,
 * feathered when you're in the middle of the scroll.
 */
const left = `0%`;
const right = `100%`;
const leftInset = `20%`;
const rightInset = `80%`;
const transparent = `#0000`;
const opaque = `#000`;

function useScrollOverflowMask(scrollXProgress: MotionValue<number>) {
  const maskImage = useMotionValue(
    `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
  );

  useMotionValueEvent(scrollXProgress, "change", (value) => {
    if (value === 0) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${opaque}, ${opaque} ${left}, ${opaque} ${rightInset}, ${transparent})`
      );
    } else if (value === 1) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${right}, ${opaque})`
      );
    } else if (
      scrollXProgress.getPrevious() === 0 ||
      scrollXProgress.getPrevious() === 1
    ) {
      animate(
        maskImage,
        `linear-gradient(90deg, ${transparent}, ${opaque} ${leftInset}, ${opaque} ${rightInset}, ${transparent})`
      );
    }
  });

  return maskImage;
}
