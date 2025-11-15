// src/theme/harryPotter.ts
import { createTheme } from "@mui/material/styles";
import cursorHarryPotter from "../assets/wand.png";

export const harryPotterTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#120c09", // deep brown/black, like the stone hall
      paper: "#2a1a10",
    },
    text: {
      primary: "#f7e1b5", // parchment text
      secondary: "#d0b07a",
      disabled: "#8a6c44",
    },
    primary: {
      main: "#f3c979", // warm candlelight gold
      contrastText: "#1b1009",
    },
    secondary: {
      main: "#a86b3f", // wax / sealing wax
      contrastText: "#fde9c5",
    },
    divider: "rgba(248, 216, 160, 0.18)",
  },

  typography: {
    fontFamily: `'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    h1: {
      fontFamily: `'Cinzel', 'DM Sans', serif`,
      fontWeight: 700,
      fontSize: "3rem",
      lineHeight: 1.1,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#f7e1b5",
    },
    h2: {
      fontFamily: `'Cinzel', 'DM Sans', serif`,
      fontWeight: 600,
      fontSize: "2.2rem",
      lineHeight: 1.15,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#f7e1b5",
    },
    button: {
      fontFamily: `'DM Sans', system-ui, sans-serif`,
      fontWeight: 600,
      letterSpacing: "0.18em",
      textTransform: "uppercase",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          // base color = dark stone
          backgroundColor: "#120c09",
          color: "#f7e1b5",
          fontFamily: `'DM Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,

          /*
           * Layers:
           * - linear-gradient: vertical dark → slightly warmer → dark again (hall)
           * - big radial in the center: parchment glow where your scroll/UI sits
           * - two side radials: subtle torch fire left/right
           */
          backgroundImage: `
            linear-gradient(
              180deg,
              #100a07 0%,
              #23120b 35%,
              #29160e 50%,
              #23120b 65%,
              #100a07 100%
            ),
            radial-gradient(
              circle at 50% 52%,
              rgba(244, 206, 142, 0.38) 0%,
              rgba(244, 206, 142, 0.24) 35%,
              rgba(244, 206, 142, 0.0) 60%
            ),
            radial-gradient(
              circle at 10% 35%,
              rgba(255, 196, 120, 0.28) 0%,
              rgba(255, 196, 120, 0.0) 55%
            ),
            radial-gradient(
              circle at 90% 35%,
              rgba(255, 196, 120, 0.28) 0%,
              rgba(255, 196, 120, 0.0) 55%
            )
          `,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          backgroundPosition: "center",

          // soft vignette so edges feel like darker stone
          boxShadow: "inset 0 0 180px rgba(0, 0, 0, 0.8)",

          // 🪄 wand cursor
          cursor: `url(${cursorHarryPotter}) 6 6, auto`,
        },

        a: {
          color: "#f3c979",
          textDecoration: "none",
          "&:hover": {
            color: "#ffe9b4",
            textShadow: "0 0 10px rgba(243, 201, 121, 0.75)",
          },
        },

        "::selection": {
          backgroundColor: "rgba(243, 201, 121, 0.85)",
          color: "#1b1009",
        },
      },
    },

    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(39, 22, 13, 0.92)", // like mini scrolls/books on the shelf
          borderRadius: 18,
          border: "1px solid rgba(248, 216, 160, 0.22)",
          boxShadow: "0 16px 40px rgba(0, 0, 0, 0.75)",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 999,
          paddingInline: "1.75rem",
          paddingBlock: "0.7rem",
          boxShadow: "0 0 0 1px rgba(248, 216, 160, 0.28)",
        },
      },
    },
  },
});
