import { createTheme } from "@mui/material/styles";
import { COLORS_BEBOP_EXTENDED } from "../theme/colors"; // keep your original path

const c = COLORS_BEBOP_EXTENDED;

export const cowboyBebopTheme = createTheme({
  palette: {
    mode: "dark", // keeps dark tuning
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
    // base document font
    fontFamily: `'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,

    // HERO / dossier titles
    h1: {
      fontFamily: `'Cinzel', 'DM Sans', serif`,
      fontWeight: 700,
      fontSize: "3.25rem",
      lineHeight: 1.1,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: c.heading,
    },

    // page titles
    h2: {
      fontFamily: `'Cinzel', 'DM Sans', serif`,
      fontWeight: 600,
      fontSize: "2.4rem",
      lineHeight: 1.15,
      letterSpacing: "0.04em",
      textTransform: "uppercase",
      color: c.heading,
    },

    // section titles
    h3: {
      fontFamily: `'DM Sans', system-ui, sans-serif`,
      fontWeight: 700,
      fontSize: "1.05rem",
      letterSpacing: "0.28em",
      textTransform: "uppercase",
      color: c.accent,
    },

    // metadata / right-column info
    subtitle1: {
      fontFamily: `'Share Tech Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace`,
      fontSize: "0.9rem",
      letterSpacing: "0.08em",
      lineHeight: 1.5,
      color: c.fg,
    },

    // “ISS PBR Database …”
    subtitle2: {
      fontFamily: `'Share Tech Mono', ui-monospace`,
      fontSize: "0.75rem",
      letterSpacing: "0.18em",
      textTransform: "uppercase",
      color: c.info,
    },

    // normal paragraph copy
    body1: {
      fontFamily: `'DM Sans', system-ui, sans-serif`,
      fontSize: "0.9rem",
      lineHeight: 1.6,
      color: c.fg,
    },

    // small helper / footer
    body2: {
      fontFamily: `'Share Tech Mono', ui-monospace`,
      fontSize: "0.7rem",
      letterSpacing: "0.12em",
      textTransform: "uppercase",
      color: c.muted,
    },

    // nav / buttons — we still let the component override handle colors
    button: {
      fontFamily: `'DM Sans', system-ui, sans-serif`,
      fontWeight: 600,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
    },

    overline: {
      fontFamily: `'Share Tech Mono', ui-monospace`,
      fontSize: "0.65rem",
      letterSpacing: "0.4em",
      textTransform: "uppercase",
      color: c.muted,
    },
  },

  components: {
    //
    // keep your old component overrides
    //
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
          // match typography base:
          fontFamily: `'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
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
          border: "none", // 👈 default: no border
          backgroundColor: "transparent",
          color: c.accent,
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: `1px solid ${c.buttonBorder}`,
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: c.buttonHoverBg,
              color: c.accentFg,
              boxShadow: `0 0 10px ${c.glowSoft}`,
            },
          },
        },
      ],
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
