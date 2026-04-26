import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import { Box, Button, Typography } from "@mui/material";
import { useThemeController } from "../../../../theme/ThemeProviderWrapper";

export const HarryPotterFloatingThemeButton = () => {
  const { setThemeName } = useThemeController();

  return (
    <Box
      sx={{
        position: "fixed",
        left: { xs: 16, md: 24 },
        bottom: { xs: 16, md: 24 },
        zIndex: 1200,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 0.8,
      }}
    >
      <Button
        aria-label="Switch to Studio Ghibli theme"
        onClick={() => setThemeName("Studio Ghibli")}
        disableRipple
        sx={{
          minWidth: { xs: 168, md: 188 },
          minHeight: { xs: 58, md: 66 },
          px: { xs: 1.8, md: 2.2 },
          borderRadius: "18px",
          border: "1px solid rgba(207, 166, 89, 0.94)",
          background:
            "linear-gradient(180deg, rgba(31, 22, 15, 0.97), rgba(12, 9, 7, 0.99))",
          boxShadow:
            "0 0 0 1px rgba(255, 231, 175, 0.08) inset, 0 10px 24px rgba(0, 0, 0, 0.34)",
          color: "#f6dfac",
          textTransform: "none",
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(47, 34, 21, 0.98), rgba(18, 13, 9, 1))",
            borderColor: "#f0cf88",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 0.95,
          }}
        >
          <AutoFixHighIcon sx={{ fontSize: { xs: 18, md: 21 } }} />
          <Typography
            sx={{
              fontFamily: "'Cinzel', serif",
              fontSize: { xs: "0.68rem", md: "0.76rem" },
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textAlign: "center",
              lineHeight: 1.32,
            }}
          >
            Switch To
            <br />
            Studio Ghibli
          </Typography>
        </Box>
      </Button>

      <Typography
        sx={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: { xs: "0.9rem", md: "1rem" },
          letterSpacing: "0.08em",
          color: "rgba(246, 223, 172, 0.88)",
          textTransform: "uppercase",
        }}
      >
        Themes
      </Typography>
    </Box>
  );
};
