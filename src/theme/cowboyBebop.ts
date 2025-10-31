import { createTheme } from "@mui/material/styles";
import { COLORS_BEBOP_EXTENDED } from "../theme/colors"; // adjust path to where you saved the palette

const c = COLORS_BEBOP_EXTENDED;

export const cowboyBebopTheme = createTheme({
  palette: {
    mode: "dark", // ensures text colors & elevation are tuned for dark mode
    background: {
      default: c.bg,
      paper: c.card,
    },
    text: {
      primary: c.fg,
      secondary: c.muted,
      disabled: c.textDisabled,
    },
    primary: {
      main: c.accent,
      contrastText: c.accentFg,
    },
    secondary: {
      main: c.link,
      contrastText: c.accentFg,
    },
    error: {
      main: c.error,
    },
    warning: {
      main: c.warning,
    },
    info: {
      main: c.info,
    },
    success: {
      main: c.success,
    },
    divider: c.border,
  },

  typography: {
    fontFamily: "'Orbitron', 'Roboto', sans-serif", // Bebop style fonts
    h1: {
      color: c.heading,
      fontWeight: 700,
      textTransform: "uppercase",
    },
    h2: {
      color: c.heading,
      fontWeight: 600,
    },
    h3: {
      color: c.subheading,
    },
    body1: {
      color: c.fg,
    },
    body2: {
      color: c.muted,
    },
    button: {
      textTransform: "uppercase",
      fontWeight: 600,
      color: c.accentFg,
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: c.bg,
          color: c.fg,
          backgroundImage: `
            radial-gradient(circle at 20% 20%, rgba(255,255,255,0.05) 0%, transparent 20%),
            radial-gradient(circle at 80% 40%, rgba(255,255,255,0.03) 0%, transparent 25%),
            radial-gradient(circle at 40% 80%, rgba(255,255,255,0.04) 0%, transparent 25%)
          `,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          fontFamily: "'Orbitron', 'Roboto', sans-serif",
        },
        a: {
          color: c.link,
          textDecoration: "none",
          "&:hover": {
            color: c.linkHover,
            textShadow: `0 0 8px ${c.glowSoft}`,
          },
        },
        "::selection": {
          backgroundColor: c.accent,
          color: c.accentFg,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          border: `1px solid ${c.buttonBorder}`,
          backgroundColor: "transparent",
          color: c.accent,
          "&:hover": {
            backgroundColor: c.buttonHoverBg,
            color: c.accentFg,
            boxShadow: `0 0 10px ${c.glowSoft}`,
          },
          "&:active": {
            backgroundColor: c.buttonActive,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: c.card,
          border: `1px solid ${c.border}`,
          boxShadow: `0 2px 8px ${c.shadow}`,
          borderRadius: "12px",
        },
      },
    },
  },
});
