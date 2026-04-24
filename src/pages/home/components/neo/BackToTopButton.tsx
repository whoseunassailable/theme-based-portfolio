import { useEffect, useState } from "react";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import { Box, IconButton, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { useThemeController } from "../../../../theme/ThemeProviderWrapper";

export const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showThemeSwitch, setShowThemeSwitch] = useState(false);
  const { setThemeName } = useThemeController();

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

  useEffect(() => {
    const contactSection = document.getElementById("contact-section");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowThemeSwitch(
          entry.isIntersecting || entry.boundingClientRect.top < window.innerHeight * 0.82
        );
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(contactSection);

    return () => observer.disconnect();
  }, []);

  const handleBackToTop = () => {
    document.getElementById("main")?.scrollIntoView({
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
        alignItems: "flex-end",
        gap: 1.25,
      }}
    >
      {showThemeSwitch && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0.7,
          }}
        >
          <IconButton
            aria-label="Switch to Cowboy Bebop theme"
            onClick={() => setThemeName("Cowboy Bebop")}
            disableRipple
            sx={{
              minWidth: { xs: 148, md: 172 },
              height: { xs: 56, md: 64 },
              borderRadius: "14px",
              border: "1px solid rgba(232, 92, 72, 0.95)",
              background:
                "linear-gradient(180deg, rgba(58, 18, 16, 0.94), rgba(24, 11, 10, 0.98))",
              boxShadow:
                "0 0 0 1px rgba(255, 199, 149, 0.08) inset, 0 8px 20px rgba(0, 0, 0, 0.3)",
              color: "#f6e6c8",
              px: { xs: 1.4, md: 1.8 },
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(86, 26, 22, 0.98), rgba(38, 15, 13, 1))",
                borderColor: "#ff7b5d",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
                fontSize: { xs: "0.62rem", md: "0.7rem" },
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 1.35,
              }}
            >
              Switch To
              <br />
              Cowboy Bebop
            </Typography>
          </IconButton>

          <Typography
            sx={{
              fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
              fontSize: "0.68rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(246, 230, 200, 0.78)",
            }}
          >
            Theme
          </Typography>
        </Box>
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 0.7,
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
    </Box>
  );
};
