"use client";

import { Box } from "@mui/material";
import { ProjectContainer } from "./ProjectContainer";
import { projects } from "../constants/projectCard";
import { motion } from "motion/react";
import { useRef } from "react";

export const DynamicProjectRowContainers = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

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
        component={motion.div}
        ref={scrollerRef}
        gridArea="container-1 / container-1 / container-3 / container-3"
        sx={{
          display: "flex",
          gap: 2.5,
          overflowX: "auto",
          overflowY: "hidden",
          py: 2,
          minHeight: 260,
          scrollSnapType: "x mandatory",
          px: { xs: 2, md: 0 },
          width: "100%",
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
    </Box>
  );
};
