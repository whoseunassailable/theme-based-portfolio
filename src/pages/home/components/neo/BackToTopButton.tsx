import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Box, IconButton, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const workSection = document.getElementById("work-experience-section");
    if (!workSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      {
        threshold: 0.05,
      }
    );

    observer.observe(workSection);

    return () => observer.disconnect();
  }, []);

  const handleBackToTop = () => {
    document.getElementById("home-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  if (!isVisible) return null;

  return (
    <Box
      sx={{
        position: "fixed",
        right: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <IconButton
        aria-label="Back to top"
        onClick={handleBackToTop}
        disableRipple
        sx={{
          width: { xs: 56, md: 64 },
          height: { xs: 56, md: 64 },
          borderRadius: "14px",
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          background:
            "linear-gradient(180deg, rgba(7,35,60,0.94) 0%, rgba(0,27,55,0.98) 100%)",
          boxShadow: `
            0 0 0 1px ${COLORS_NEO_EXTENDED.border},
            0 0 12px ${COLORS_NEO_EXTENDED.glowSoft},
            inset 0 0 18px rgba(45, 226, 230, 0.12)
          `,
          color: COLORS_NEO_EXTENDED.accent,
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(12,46,76,0.98) 0%, rgba(3,31,54,1) 100%)",
            boxShadow: `
              0 0 0 1px ${COLORS_NEO_EXTENDED.accent},
              0 0 18px ${COLORS_NEO_EXTENDED.glowSoft},
              0 0 28px rgba(45, 226, 230, 0.22)
            `,
          },
        }}
      >
        <KeyboardDoubleArrowUpIcon sx={{ fontSize: { xs: 28, md: 34 } }} />
      </IconButton>

      <Typography
        sx={{
          fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
          fontSize: "0.72rem",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          color: COLORS_NEO_EXTENDED.muted,
        }}
      >
        Top
      </Typography>
    </Box>
  );
};
