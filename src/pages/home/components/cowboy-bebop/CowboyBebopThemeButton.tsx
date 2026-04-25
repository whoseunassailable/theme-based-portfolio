import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import { useState } from "react";
import { themeOptions, type ThemeName } from "../../../../constants/themeOptions";
import { useThemeController } from "../../../../theme/ThemeProviderWrapper";

export const CowboyBebopThemeButton = () => {
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
    <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
      <Button
        onClick={handleOpen}
        endIcon={<ArrowDropDownIcon />}
        sx={{
          minWidth: 188,
          borderRadius: "16px",
          border: "1px solid rgba(219, 86, 62, 0.95)",
          color: "#f4e6c9",
          background:
            "linear-gradient(180deg, rgba(58, 19, 14, 0.96), rgba(22, 10, 10, 1))",
          fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          fontSize: "0.78rem",
          px: 2,
          py: 1,
          boxShadow:
            "0 0 0 1px rgba(255, 208, 166, 0.06) inset, 0 10px 24px rgba(0, 0, 0, 0.22)",
          "&:hover": {
            background:
              "linear-gradient(180deg, rgba(84, 31, 24, 0.98), rgba(32, 14, 12, 1))",
            borderColor: "#ff7b5d",
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
            borderRadius: "14px",
            border: "1px solid rgba(219, 86, 62, 0.9)",
            background:
              "linear-gradient(180deg, rgba(26, 12, 11, 0.98), rgba(15, 8, 8, 1))",
            color: "#f4e6c9",
            minWidth: 220,
            boxShadow: "0 16px 32px rgba(0, 0, 0, 0.34)",
          },
        }}
      >
        {themeOptions.map(({ value, label, inProgress }) => (
          <MenuItem
            key={value}
            disabled={inProgress}
            selected={value === themeName}
            onClick={() => handleThemeSelect(value)}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 1.5,
              fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
              fontSize: "0.8rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              py: 1.15,
              "&.Mui-selected": {
                backgroundColor: "rgba(219, 86, 62, 0.16)",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
                fontSize: "0.78rem",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              {label}
            </Typography>
            {value === themeName && (
              <Typography
                sx={{
                  color: "#ff9c73",
                  fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
                  fontSize: "0.72rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                Live
              </Typography>
            )}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
