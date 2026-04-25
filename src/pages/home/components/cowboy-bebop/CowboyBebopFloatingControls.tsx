import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Box, IconButton, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useThemeController } from "../../../../theme/ThemeProviderWrapper";

export const CowboyBebopFloatingControls = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showThemeSwitch, setShowThemeSwitch] = useState(false);
  const { setThemeName } = useThemeController();

  useEffect(() => {
    const workSection = document.getElementById("bebop-work-section");
    if (!workSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting || entry.boundingClientRect.top < 0);
      },
      { threshold: 0.05 }
    );

    observer.observe(workSection);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const contactSection = document.getElementById("bebop-contact-section");
    if (!contactSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowThemeSwitch(
          entry.isIntersecting ||
            entry.boundingClientRect.top < window.innerHeight * 0.82
        );
      },
      { threshold: 0.08 }
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
            aria-label="Switch to Harry Potter theme"
            onClick={() => setThemeName("Harry Potter")}
            disableRipple
            sx={{
              minWidth: { xs: 148, md: 176 },
              height: { xs: 56, md: 64 },
              borderRadius: "16px",
              border: "1px solid rgba(205, 171, 79, 0.92)",
              background:
                "linear-gradient(180deg, rgba(27, 17, 10, 0.96), rgba(12, 8, 5, 1))",
              color: "#f7e7b0",
              px: { xs: 1.4, md: 1.9 },
              boxShadow:
                "0 0 0 1px rgba(229, 207, 138, 0.08) inset, 0 10px 24px rgba(0, 0, 0, 0.26)",
              "&:hover": {
                background:
                  "linear-gradient(180deg, rgba(43, 28, 15, 0.98), rgba(17, 11, 7, 1))",
                borderColor: "#f0d37d",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 0.8,
              }}
            >
              <AutoFixHighIcon sx={{ fontSize: { xs: 18, md: 20 } }} />
              <Typography
                sx={{
                  fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
                  fontSize: { xs: "0.6rem", md: "0.7rem" },
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  lineHeight: 1.35,
                  textAlign: "center",
                }}
              >
                Switch To
                <br />
                Harry Potter
              </Typography>
            </Box>
          </IconButton>
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
            borderRadius: "16px",
            border: "1px solid rgba(219, 86, 62, 0.95)",
            background:
              "linear-gradient(180deg, rgba(58, 19, 14, 0.96), rgba(22, 10, 10, 1))",
            boxShadow:
              "0 0 0 1px rgba(255, 208, 166, 0.06) inset, 0 10px 24px rgba(0, 0, 0, 0.22)",
            color: "#f4e6c9",
            "&:hover": {
              background:
                "linear-gradient(180deg, rgba(84, 31, 24, 0.98), rgba(32, 14, 12, 1))",
              borderColor: "#ff7b5d",
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
            color: "#f4e6c9",
          }}
        >
          Top
        </Typography>
      </Box>
    </Box>
  );
};
