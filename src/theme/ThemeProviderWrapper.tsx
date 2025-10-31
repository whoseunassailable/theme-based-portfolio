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
// import the others when you build them

type ThemeName =
  | "Neo"
  | "Cowboy Bebop"
  | "Cyberpunk"
  | "Studio Ghibli"
  | "Harry Potter"
  | "Pokemon";

const themeMap: Record<ThemeName, Theme> = {
  Neo: neoTheme,
  "Cowboy Bebop": cowboyBebopTheme,
  Cyberpunk: neoTheme, // temp placeholder until built
  "Studio Ghibli": neoTheme,
  "Harry Potter": neoTheme,
  Pokemon: neoTheme,
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
  const [themeName, setThemeName] = useState<ThemeName>(
    () => (localStorage.getItem("themeName") as ThemeName) || "Neo"
  );

  useEffect(() => {
    localStorage.setItem("themeName", themeName);
    document.documentElement.setAttribute("data-theme", themeName);
  }, [themeName]);

  const theme = useMemo(() => themeMap[themeName] ?? neoTheme, [themeName]);

  return (
    <ThemeControllerContext.Provider value={{ themeName, setThemeName }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeControllerContext.Provider>
  );
};

export default ThemeProviderWrapper;
