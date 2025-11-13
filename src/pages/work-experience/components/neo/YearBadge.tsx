import { Box } from "@mui/material";
import React from "react";

export const YearBadge: React.FC<{ year: string | number }> = ({ year }) => {
  return (
    <Box
      component="span"
      sx={{
        // neo-blueprint badge
        display: "inline-block",
        px: 2,
        py: 0.5,
        borderRadius: 2,
        fontWeight: 700,
        letterSpacing: 1,
        fontVariantNumeric: "tabular-nums",
        color: "#b9f6ff",
        textShadow:
          "0 0 8px rgba(0, 225, 255, .8), 0 0 16px rgba(0, 225, 255, .5)",
        background:
          "linear-gradient(180deg, rgba(0, 30, 45, .85), rgba(0, 20, 35, .85))",
        border: "1px solid rgba(0, 200, 255, .35)",
        boxShadow:
          "inset 0 0 12px rgba(0, 160, 255, .15), 0 0 18px rgba(0, 200, 255, .15)",
        position: "relative",
        overflow: "hidden",

        // subtle animated scanline
        "&:after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 1,
          background:
            "linear-gradient(90deg, transparent, rgba(0,255,255,.35), transparent)",
          animation: "scan 3.4s linear infinite",
        },
        "@keyframes scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      }}
    >
      {year}
    </Box>
  );
};
