export type ThemeName =
  | "Neo"
  | "Cowboy Bebop"
  | "Studio Ghibli"
  | "Harry Potter";

export type ThemeOption = {
  value: ThemeName;
  label: string;
  inProgress?: boolean;
};

export const SELECTABLE_THEMES: ThemeName[] = [
  "Neo",
  "Cowboy Bebop",
  "Harry Potter",
];

export const themeOptions: ThemeOption[] = [
  {
    value: "Neo",
    label: "Neo",
  },
  {
    value: "Cowboy Bebop",
    label: "Cowboy Bebop",
  },
  {
    value: "Studio Ghibli",
    label: "Studio Ghibli (In Progress)",
    inProgress: true,
  },
  {
    value: "Harry Potter",
    label: "Harry Potter",
  },
];

export const isSelectableTheme = (themeName: ThemeName) =>
  SELECTABLE_THEMES.includes(themeName);

export const normalizeThemeName = (themeName: ThemeName | null | undefined) =>
  themeName && isSelectableTheme(themeName) ? themeName : "Neo";
