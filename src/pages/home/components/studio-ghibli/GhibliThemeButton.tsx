import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import ForestRoundedIcon from "@mui/icons-material/ForestRounded";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { themeOptions, type ThemeName } from "../../../../constants/themeOptions";
import { useThemeController } from "../../../../theme/ThemeProviderWrapper";
import {
  ghibliBodyFontFamily,
  ghibliHeadingFontFamily,
} from "../../../../styles/ghibli-typography";

export const GhibliThemeButton = () => {
  const { themeName, setThemeName } = useThemeController();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleThemeSelect = (nextTheme: ThemeName) => {
    setThemeName(nextTheme);
    handleClose();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: { xs: 18, md: 28 },
        right: { xs: 18, md: 28 },
        zIndex: 5,
      }}
    >
      <Button
        onClick={handleOpen}
        endIcon={<ArrowDropDownRoundedIcon />}
        startIcon={<ForestRoundedIcon />}
        disableRipple
        sx={{
          minWidth: { xs: 172, md: 196 },
          borderRadius: "999px",
          px: { xs: 2, md: 2.4 },
          py: { xs: 1, md: 1.15 },
          border: "1px solid rgba(125, 100, 68, 0.72)",
          background:
            "linear-gradient(180deg, rgba(244, 233, 209, 0.95), rgba(222, 206, 173, 0.94))",
          color: "#4f3a2f",
          boxShadow:
            "0 10px 22px rgba(57, 42, 26, 0.12), inset 0 1px 0 rgba(255,255,255,0.6)",
          fontFamily: ghibliHeadingFontFamily,
          fontSize: { xs: "0.78rem", md: "0.86rem" },
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(247, 238, 219, 0.98), rgba(230, 214, 183, 0.98))",
          },
        }}
      >
        Themes
      </Button>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            mt: 1,
            minWidth: 244,
            borderRadius: "20px",
            border: "1px solid rgba(143, 117, 82, 0.6)",
            background:
              "linear-gradient(180deg, rgba(248, 241, 226, 0.98), rgba(235, 223, 198, 0.97))",
            color: "#4b372d",
            boxShadow: "0 20px 34px rgba(56, 42, 28, 0.16)",
            overflow: "hidden",
          },
        }}
      >
        {themeOptions.map(({ value, label, inProgress }) => {
          const isCurrent = value === themeName;
          const isDisabled = Boolean(inProgress && !isCurrent);

          return (
            <MenuItem
              key={value}
              disabled={isDisabled}
              selected={isCurrent}
              onClick={() => handleThemeSelect(value)}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 1.5,
                py: 1.35,
                px: 1.8,
                "&.Mui-selected": {
                  backgroundColor: "rgba(167, 196, 151, 0.2)",
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: ghibliBodyFontFamily,
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  lineHeight: 1.3,
                  color: "#4b372d",
                }}
              >
                {label}
              </Typography>

              <Typography
                sx={{
                  fontFamily: ghibliBodyFontFamily,
                  fontSize: "0.82rem",
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: isCurrent
                    ? "#5f7d57"
                    : inProgress
                      ? "rgba(98, 78, 59, 0.72)"
                      : "#7e5b33",
                }}
              >
                {isCurrent ? "Here" : inProgress ? "In Progress" : "Live"}
              </Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </Box>
  );
};
