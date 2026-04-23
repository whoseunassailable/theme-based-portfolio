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

export const ACTIVE_THEME: ThemeName = "Neo";

export const themeOptions: ThemeOption[] = [
  {
    value: "Neo",
    label: "Neo",
  },
  {
    value: "Cowboy Bebop",
    label: "Cowboy Bebop (In Progress)",
    inProgress: true,
  },
  {
    value: "Studio Ghibli",
    label: "Studio Ghibli (In Progress)",
    inProgress: true,
  },
  {
    value: "Harry Potter",
    label: "Harry Potter (In Progress)",
    inProgress: true,
  },
];

export const isSelectableTheme = (themeName: ThemeName) =>
  themeName === ACTIVE_THEME;

export const normalizeThemeName = (themeName: ThemeName | null | undefined) =>
  themeName && isSelectableTheme(themeName) ? themeName : ACTIVE_THEME;
