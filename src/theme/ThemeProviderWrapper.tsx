import React, { type ReactNode } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

interface ThemeProviderWrapperProps {
  children: ReactNode;
}

export const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#0a1d2d", // page background
      paper: "#112b45", // card/paper background
    },
    primary: {
      main: "#00bfff", // accent blue
    },
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        },
      },
    },
  },
});

const ThemeProviderWrapper: React.FC<ThemeProviderWrapperProps> = ({
  children,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
