export type ThemeName =
  | "base"
  | "cyberpunk"
  | "ghibli"
  | "harryPotter"
  | "pokemon"
  | "cowboyBebop"
  | "neo";

export type ColorTokens = {
  bg: string;
  fg: string;
  muted: string;
  card: string;
  border: string;
  accent: string;
  accentFg: string;
};

export const COLORS: Record<ThemeName, Readonly<ColorTokens>> = {
  base: {
    bg: "#0b1220",
    fg: "#e6f0f8",
    muted: "#8aa1b6",
    card: "#0e1a2b",
    border: "#1e2a3c",
    accent: "#1fb6ff",
    accentFg: "#03121a",
  },
  cyberpunk: {
    bg: "#0a0e12",
    fg: "#e6f8ff",
    muted: "#8fb6cf",
    card: "#0d1622",
    border: "#1a2a3a",
    accent: "#00e5ff",
    accentFg: "#00171c",
  },
  ghibli: {
    bg: "#0f1412",
    fg: "#e8f4ec",
    muted: "#9bb7a6",
    card: "#15201a",
    border: "#253629",
    accent: "#77ddaa",
    accentFg: "#0a140f",
  },
  harryPotter: {
    bg: "#0e0b13",
    fg: "#efe7d1",
    muted: "#bfb49b",
    card: "#17121f",
    border: "#2a2332",
    accent: "#e0b34c",
    accentFg: "#241a09",
  },
  pokemon: {
    bg: "#0b0e17",
    fg: "#e8f0ff",
    muted: "#91a3c6",
    card: "#111827",
    border: "#23314a",
    accent: "#3b82f6",
    accentFg: "#071021",
  },
  cowboyBebop: {
    bg: "#0b1013",
    fg: "#e3eef5",
    muted: "#97a8b3",
    card: "#121a20",
    border: "#22303a",
    accent: "#34d399",
    accentFg: "#07140f",
  },
  neo: {
    bg: "#0a0a0a",
    fg: "#ededed",
    muted: "#a1a1a1",
    card: "#121212",
    border: "#262626",
    accent: "#22c55e",
    accentFg: "#05130a",
  },
} as const;

// ------------------------------
export const COLORS_NEO_EXTENDED = {
  // --- Core Tokens (already used in your theme system)
  bg: "#03182A", // Main background (blueprint navy)
  fg: "#E4F6FF", // Foreground / primary text
  muted: "#6BA3C8", // Secondary / descriptive text
  card: "#07233C", // Card or panel background
  border: "#0E3A5F", // Grid & panel outlines
  accent: "#2DE2E6", // Cyan accent (links, hover underline)
  accentFg: "#021014", // Foreground on accent

  // --- Blueprint Grid & Depth
  grid: "#11314D", // Blueprint grid lines
  gridStrong: "#1D425C", // Stronger grid / outer border
  shadow: "rgba(0, 255, 255, 0.2)", // Cyan glow

  // --- Typography
  heading: "#5CD7FF", // Headings / section titles
  subheading: "#9FD4E1", // Light cyan subtitles
  link: "#00CBF7", // Normal link text
  linkHover: "#2AE0E2", // Hover underline / hover text color
  textDisabled: "#6A98A6", // Muted inactive labels

  // --- Interactive Elements
  buttonBorder: "#2E5D7A", // Outline buttons
  buttonHoverBg: "#1BA1A9", // Slight cyan tint on hover
  buttonActive: "#00FFFF", // Active glowing button
  inputBorder: "#264E68", // Form input outline
  inputBg: "#002745", // Input background

  // --- Card & Section Variants
  cardLight: "#0D273C", // Inner cards / panels
  cardDark: "#001B37", // Deep shadows under panels
  divider: "#345D6F", // Soft separators

  // --- Feedback / Status
  success: "#5EF38C", // Success (soft green)
  warning: "#FFD166", // Subtle yellow (not seen much)
  error: "#FF7B72", // Form validation (contact form)
  errorLight: "#FDC1A0", // Soft salmon highlight
  info: "#00B9F1", // Informational cyan

  // --- Highlights & Glows
  glow1: "#00D2F8",
  glow2: "#00EDFD",
  glow3: "#03D2FD",
  glowSoft: "rgba(45, 226, 230, 0.4)",

  // --- Misc aesthetic tones
  neutral: "#D6DEE0", // UI lines, faint text
  panelEdge: "#233D4E", // Subtle edge definition
  scrollTrack: "#021128",
  scrollThumb: "#0C1F33",
} as const;

export const getColors = (t: ThemeName = "base") => COLORS[t] ?? COLORS.base;
