import type { SxProps, Theme } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

export class NeoTypographyForProjectDetailsPage {
  // core NEO_EXTENDED colors
  static readonly NEO_PRIMARY = "#00bfff";
  static readonly NEO_DIM = "rgba(0,191,255,0.8)";
  static readonly NEO_FADE = "rgba(0,191,255,0.6)";

  // MAIN TITLE (READICULOUS)
  static readonly title: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(2.4rem, 6vw, 3.25rem)",
    fontWeight: 300,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#9BD2FF",
    lineHeight: 1.1,
  };

  // SUBTITLE (Book recommendation system...)
  static readonly subtitle: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(1rem, 2vw, 1.25rem)",
    fontWeight: 400,
    opacity: 0.9,
    letterSpacing: "0.02em",
    color: COLORS_NEO_EXTENDED.neutral,
    lineHeight: 1.35,
  };

  // TOP NAV (PROBLEM | APPROACH | ARCHITECTURE | OUTCOME | LESSONS)
  static readonly navItem: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(0.75rem, 1vw, 0.85rem)",
    fontWeight: 600,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: NeoTypographyForProjectDetailsPage.NEO_PRIMARY,
  };

  // SECTION TITLE (PROBLEM, APPROACH, OUTCOME, LESSONS)
  static readonly sectionTitle: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(0.95rem, 1.8vw, 1.5rem)",
    fontWeight: 600,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    color: COLORS_NEO_EXTENDED.neutral,
  };

  // SUBHEADING (THE PROBLEM)
  static readonly subheading: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(0.9rem, 1.2vw, 1rem)",
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: NeoTypographyForProjectDetailsPage.NEO_PRIMARY,
  };

  // BODY TEXT (paragraphs)
  static readonly bodyText: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(0.88rem, 1.1vw, 0.98rem)",
    fontWeight: 400,
    lineHeight: 1.55,
    color: NeoTypographyForProjectDetailsPage.NEO_DIM,
  };

  // TAG TEXT (FULL STACK, DATA SCIENCE, etc.)
  static readonly tagText: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(0.72rem, 1vw, 0.8rem)",
    fontWeight: 600,
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    color: NeoTypographyForProjectDetailsPage.NEO_PRIMARY,
    border: `1px solid ${NeoTypographyForProjectDetailsPage.NEO_FADE}`,
    borderRadius: "8px",
    px: 1,
    py: 0.25,
    display: "inline-block",
  };

  // KPI LABEL (SHELF SPACE WASTE)
  static readonly kpiLabel: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(0.8rem, 1.1vw, 0.9rem)",
    fontWeight: 600,
    letterSpacing: "0.14em",
    textTransform: "uppercase",
    color: NeoTypographyForProjectDetailsPage.NEO_PRIMARY,
  };

  // KPI VALUE (↓ 25% ↑ 15%)
  static readonly kpiValue: SxProps<Theme> = {
    fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
    fontSize: "clamp(1.6rem, 4.5vw, 2.25rem)",
    fontWeight: 700,
    letterSpacing: "0.04em",
    color: NeoTypographyForProjectDetailsPage.NEO_PRIMARY,
    lineHeight: 1,
  };
}
