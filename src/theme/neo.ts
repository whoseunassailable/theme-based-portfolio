import { createTheme } from "@mui/material";

export const neoTheme = createTheme({
  palette: {
    mode: "dark",
    background: { default: "#0a1d2d", paper: "#112b45" },
    primary: { main: "#00bfff" },
    text: { primary: "#ffffff", secondary: "#aaaaaa" },
  },
  typography: { fontFamily: "Arial, sans-serif" },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          backgroundColor: "#0a1d2d",
        },
      },
    },
  },
});
