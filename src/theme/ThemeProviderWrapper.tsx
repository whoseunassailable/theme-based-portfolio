// ThemeProviderWrapper.tsx
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider, CssBaseline, type Theme } from "@mui/material";
import { neoTheme } from "./neo";
import { cowboyBebopTheme } from "./cowboyBebop";
import { harryPotterTheme } from "./harryPotter";
import {
  normalizeThemeName,
  type ThemeName,
} from "../constants/themeOptions";
// import GhostCursor from "../components/GhostCursor"; // adjust path
// import { harryPotterCursorPreset } from "./ghostCursorPresets"; // if you created it

const themeMap: Record<ThemeName, Theme> = {
  Neo: neoTheme,
  "Cowboy Bebop": cowboyBebopTheme,
  "Studio Ghibli": neoTheme,
  "Harry Potter": harryPotterTheme,
};

type ThemeContextType = {
  themeName: ThemeName;
  setThemeName: (name: ThemeName) => void;
};

const ThemeControllerContext = createContext<ThemeContextType | null>(null);

export const useThemeController = () => {
  const ctx = useContext(ThemeControllerContext);
  if (!ctx)
    throw new Error(
      "useThemeController must be used inside ThemeProviderWrapper"
    );
  return ctx;
};

export const ThemeProviderWrapper: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<ThemeName>(() => {
    const stored = localStorage.getItem("themeName") as ThemeName | null;
    return normalizeThemeName(stored);
  });

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
    document.documentElement.setAttribute("data-theme", themeName);
  }, [themeName]);

  const theme = useMemo(() => themeMap[themeName] ?? neoTheme, [themeName]);
  const updateThemeName = (nextThemeName: ThemeName) => {
    setThemeName(normalizeThemeName(nextThemeName));
  };

  return (
    <ThemeControllerContext.Provider
      value={{ themeName, setThemeName: updateThemeName }}
    >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {/* This container gives GhostCursor a parent to fill */}
        <div style={{ position: "relative", minHeight: "100vh" }}>
          {children}

          {
            themeName === "Harry Potter"
            // && (
            //   <GhostCursor {...harryPotterCursorPreset} />
            // )
          }
        </div>
      </ThemeProvider>
    </ThemeControllerContext.Provider>
  );
};

export default ThemeProviderWrapper;
