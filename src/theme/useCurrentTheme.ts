// src/theme/useCurrentTheme.ts
import { useThemeController } from "./ThemeProviderWrapper";

export const useCurrentTheme = () => {
  const { themeName } = useThemeController();

  // this maps string -> your design system component variants
  return {
    themeName,
    isBebop: themeName === "Cowboy Bebop",
    isNeo: themeName === "Neo",
    isGhibli: themeName === "Studio Ghibli",
    isRenaissance: themeName === "Renaissance",
  };
};
