import React from "react";
import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

interface BlueprintFrameProps {
  children: React.ReactNode | React.ReactNode[];
}

export const BlueprintFrame: React.FC<BlueprintFrameProps> = ({ children }) => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: COLORS_NEO_EXTENDED.bg,
        border: `1.5px solid ${COLORS_NEO_EXTENDED.gridStrong}`,
        boxShadow: `0 0 25px ${COLORS_NEO_EXTENDED.shadow}`,
        p: { xs: 3, md: 6 },
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(${COLORS_NEO_EXTENDED.grid} 1px, transparent 1px),
            linear-gradient(90deg, ${COLORS_NEO_EXTENDED.grid} 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px", // grid density
          opacity: 0.2,
          zIndex: 0,
        },
        "&::after": {
          // corner accents
          content: '""',
          position: "absolute",
          inset: 0,
          border: `2px solid ${COLORS_NEO_EXTENDED.gridStrong}`,
          clipPath: `
            polygon(
              0 0, 20px 0, 20px 2px, 2px 2px, 2px 20px, 0 20px,
              0 calc(100% - 20px), 2px calc(100% - 20px), 2px calc(100% - 2px), 20px calc(100% - 2px),
              20px 100%, calc(100% - 20px) 100%, calc(100% - 20px) calc(100% - 2px),
              calc(100% - 2px) calc(100% - 2px), calc(100% - 2px) calc(100% - 20px),
              100% calc(100% - 20px), 100% 20px, calc(100% - 2px) 20px,
              calc(100% - 2px) 2px, calc(100% - 20px) 2px, calc(100% - 20px) 0, 20px 0
            )
          `,
          pointerEvents: "none",
          zIndex: 2,
        },
      }}
    >
      <Box sx={{ position: "relative", zIndex: 1 }}>{children}</Box>
    </Box>
  );
};
