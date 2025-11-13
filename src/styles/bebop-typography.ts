// bebopTypography.ts

import type { SxProps, Theme } from "@mui/material/styles";

export const bebopWorkExperience = {
  backgroundColor: "#e6dcc5",
  borderRadius: "0.5vw",
  p: "2vw",
  boxShadow: "0px 2px 6px rgba(0,0,0,0.25)",
  border: "1px solid #BFAE90",
  fontFamily: "'Courier Prime', monospace",
  color: "transparent",
};

export const bebopCase = {
  color: "#1B1B1B",
  fontWeight: 700,
  fontSize: "0.95rem",
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  mb: "0.5rem",
};

export const bebopDivider = {
  borderBottom: "1.5px solid #1B1B1B",
  width: "100%",
  mb: "0.75rem",
};

export const bebopMission = {
  color: "#1B1B1B",
  fontWeight: 700,
  fontSize: "0.9rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  mb: "0.25rem",
};

export const bebopDuration = {
  color: "#1B1B1B",
  fontWeight: 500,
  fontSize: "0.85rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  mb: "0.25rem",
};

export const bebopStatus = {
  color: "#1B1B1B",
  fontWeight: 600,
  fontSize: "0.85rem",
  textTransform: "uppercase",
  mb: "0.5rem",
};

export const bebopOperationNotes = {
  color: "#1B1B1B",
  fontWeight: 500,
  fontSize: "0.85rem",
  letterSpacing: "0.02em",
  lineHeight: 1.6,
};

// bebop-bounty.ts

// SECTION HEADER: "BOUNTY FILES"
export const bebopBountyHeader = {
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontWeight: 700,
  fontSize: "3.6vw",
  textTransform: "uppercase" as const,
  letterSpacing: "0.08em",
  color: "#c0392b",
  placeSelf: "center",
};

// SUBTITLE: "Projects with a price tag across the galaxy."
export const bebopBountySubhead = {
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontSize: "1.05vw",
  letterSpacing: "0.04em",
  color: "#e6dcc5",
  opacity: 0.85,
  placeSelf: "center",
};

// FILTER BAR: All | Frontend | Backend | ...
export const bebopBountyFilterBar = {
  display: "flex",
  gap: "1.5vw",
  alignItems: "center",
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontSize: "0.95vw",
  textTransform: "capitalize" as const,
  color: "#e6dcc5",
};

export const bebopBountyFilterItem = {
  cursor: "pointer",
  letterSpacing: "0.08em",
  paddingBottom: "0.3vw",
  borderBottom: "2px solid transparent",
};

export const bebopBountyFilterItemActive = {
  ...bebopBountyFilterItem,
  color: "#e6dcc5",
  borderBottom: "2px solid #c0392b",
};

// GRID WRAPPER
export const bebopBountyGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(12.5rem, 1fr))",
  gap: "1.5vw",
  marginTop: "1.5vw",
};

// CARD (the beige dossier)
export const bebopBountyCard = {
  backgroundColor: "#e6dcc5",
  border: "1px solid #bfae90",
  borderRadius: "0.35vw",
  padding: "1.3vw",
  display: "flex",
  flexDirection: "column" as const,
  gap: "0.65vw",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.35)",
  minHeight: "16rem",
  position: "relative" as const,
};

// CARD TITLE: "PORTFOLIO SITE"
export const bebopBountyTitle = {
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontWeight: 700,
  fontSize: "1.15vw",
  letterSpacing: "0.09em",
  textTransform: "uppercase" as const,
  color: "#1b1b1b",
};

// THUMB / PREVIEW BOX (the little mockup image area)
export const bebopBountyThumb = {
  backgroundColor: "#d7cdb5",
  border: "1px solid #1b1b1b",
  borderRadius: "0.25vw",
  height: "6.3vw",
  overflow: "hidden",
};

// REWARD LINE: "Reward: 5000#"
export const bebopBountyRewardLabel = {
  fontFamily: `"Share Tech Mono", ui-monospace`,
  fontSize: "0.7rem",
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#1b1b1b",
};

export const bebopBountyRewardValue = {
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontWeight: 600,
  fontSize: "0.82rem",
  marginLeft: "0.35rem",
};

// TAG STRIP: "FRONTEND", "REACT", etc.
export const bebopBountyTagRow = {
  display: "flex",
  gap: "0.4rem",
  flexWrap: "wrap" as const,
};

export const bebopBountyTag = {
  border: "1px solid #1b1b1b",
  borderRadius: "9999px",
  padding: "0.15rem 0.6rem",
  fontFamily: `"Share Tech Mono", ui-monospace`,
  fontSize: "0.6rem",
  textTransform: "uppercase" as const,
  letterSpacing: "0.06em",
  color: "#1b1b1b",
  backgroundColor: "rgba(0,0,0,0.02)",
};

// STATUS: "ACTIVE CASE"
export const bebopBountyStatus = {
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontWeight: 700,
  fontSize: "0.7rem",
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#1b1b1b",
  marginTop: "auto",
};

// STAMP: "OPEN CASE" (red, slightly rotated)
export const bebopBountyStamp = {
  position: "absolute" as const,
  right: "-0.1rem",
  bottom: "2.5rem",
  transform: "rotate(-8deg)",
  border: "2px solid #c0392b",
  color: "#c0392b",
  fontFamily: `"DM Sans", system-ui, sans-serif`,
  fontWeight: 700,
  fontSize: "0.8rem",
  textTransform: "uppercase" as const,
  padding: "0.25rem 0.85rem",
  backgroundColor: "rgba(230, 220, 197, 0.85)",
  letterSpacing: "0.08em",
};

// Card base color so you can reuse it in styled-components / sx / tailwind plugin
export const bebopProjectSectionCardBackground = "#99907C";

// 1. Card title: "PORTFOLIO SITE", "EXPENSE TRACKER", etc.
export const bebopProjectSectionHeader = {
  fontFamily: "var(--font-bebop-heading, system-ui, sans-serif)",
  fontSize: "3.5vh", // ~22–23px
  lineHeight: 1.05,
  letterSpacing: "0.03em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#1E1111",
};

// 2. Small label text like “Reward:”
export const bebopProjectSectionMetaLabel = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2vh", // ~11px
  lineHeight: 1.2,
  letterSpacing: "0.04em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: "#1E1111",
};

// 3. The reward value itself e.g. “5000#”
export const bebopProjectSectionMetaValue = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "0.85rem", // ~13–14px
  lineHeight: 1.1,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#1E1111",
};

// 4. Tech / role chips at the bottom (“FRONTEND”, “REACT NATIVE”, “API”)
export const bebopProjectSectionTag = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2vh", //
  lineHeight: 1.2,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "#1E1111",
  backgroundColor: "#B39D88", // lighter beige chip color in the image
};

// 5. Status line at the bottom: “ACTIVE CASE”
export const bebopProjectSectionStatus = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2.2vh",
  lineHeight: 1.1,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#1E1111",
};

// 6. Red diagonal stamp: “OPEN CASE”
export const bebopProjectSectionStamp = {
  fontFamily: "var(--font-bebop-heading, system-ui, sans-serif)",
  fontSize: "1.1rem", // slightly smaller than card title
  lineHeight: 1,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#B12022",
};

// 1. Top case file title: "CASE FILE: REDUX SPACE APP"
export const bebopProjectsDetailSectionCaseTitle = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "5vh",
  lineHeight: 0.95,
  letterSpacing: "0.005em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#F5F1EA",
  placeSelf: "center",
};

// 2. Small line under title: "ISS PBR Database // Entry 09.17.2071"
export const bebopProjectsDetailSectionCaseSubhead = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2.6vh",
  lineHeight: 1.2,
  letterSpacing: "0.24em",
  textTransform: "uppercase",
  fontWeight: 500,
  color: "#D6CFBE",
  placeSelf: "center",
};

// 3. Right panel label stack: "CASE ID:", "TARGET:", "REWARD:", etc.
export const bebopProjectsDetailSectionMetaLabel = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "1.4vh",
  lineHeight: 1.2,
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "#F5F1EA",
};

// 4. Right panel values: "2071-09-001", "Redux Space App", etc.
export const bebopProjectsDetailSectionMetaValue = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2.4vh",
  lineHeight: 1.35,
  letterSpacing: "0.09em",
  textTransform: "none",
  fontWeight: 500,
  color: "#F5F1EA",
};

// 5. Section headers in red: "INVESTIGATION NOTES", "EVIDENCE LOCKER"
export const bebopProjectsDetailSectionHeader = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "3.8vh",
  lineHeight: 1.5,
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  fontWeight: 700,
  color: "#C74435",
  mt: "2vh",
};

// 6. Body copy under investigation notes
export const bebopProjectsDetailSectionBody = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "3vh",
  lineHeight: 1.6,
  wordSpacing: "0.5em",
  textTransform: "none",
  fontWeight: 400,
  color: "#F5F1EA",
};

// 7. Evidence buttons: "SOURCE CODE", "LIVE DEPLOYMENT"
export const bebopProjectsDetailSectionButton = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "1.6vh",
  lineHeight: 1.1,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "#F5F1EA",
  backgroundColor: "transparent",
  border: "1px solid #F5F1EA",
};

// 8. Footer line: "End of Case File // ISS PBR Database"
export const bebopProjectsDetailSectionFooter = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2.6vh",
  mt: "5vh",
  lineHeight: 1.2,
  letterSpacing: "0.26em",
  textTransform: "uppercase",
  fontWeight: 500,
  placeSelf: "center",
  color: "#B5B0A1",
};

// 9. Beige chip / inset card text (from your example)
export const bebopProjectsDetailSectionChip = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "2vh",
  lineHeight: 1.2,
  letterSpacing: "0.08em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "#1E1111",
  backgroundColor: "#B39D88",
};

/**
 * Palette used across the dossier.
 * Adjust if you want a slightly different vibe.
 */
export const cowboyBebopAboutMeColors = {
  background: "#0D0B0A",
  sand: "#E3D1B4",
  sandMuted: "#C7AE8C",
  sandDark: "#B39D88",
  red: "#E0483B",
  green: "#7BC7A3",
  offWhite: "#F5E9D6",
  bodyText: "#F0E2CF",
  bodyDim: "#C2B096",
  border: "#40332A",
};

/**
 * CREW DOSSIER
 */
export const cowboyBebopAboutMeCrewTitle: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-heading, 'Cinzel', 'Times New Roman', serif)",
  textTransform: "uppercase",
  letterSpacing: "0.02em",
  fontWeight: 700,
  color: cowboyBebopAboutMeColors.sand,
  lineHeight: 1.02,
  fontSize: {
    xs: "2.4vw",
    sm: "3vw",
    md: "3.6vw",
    lg: "4.4vw",
  },
};

/**
 * PROFILE ENTRY // ISS PBR DATABASE SS / 2071
 */
export const cowboyBebopAboutMeCrewSubtitleMeta: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontWeight: 500,
  color: cowboyBebopAboutMeColors.green,
  fontSize: {
    xs: "0.65vw",
    sm: "0.7vw",
    md: "1.15vw",
  },
};

/**
 * Section titles:
 * BACKGROUND REPORT, KNOWN CAPABILITIES, MISSION LOG, CREW REFERENCES
 */
export const cowboyBebopAboutMeSectionTitle: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  fontWeight: 400,
  color: cowboyBebopAboutMeColors.red,
  fontSize: {
    xs: "1.9vh",
    sm: "3.5vh",
    md: "3.5vh",
  },
};

/**
 * Side-card key labels:
 * Name:, Alias:, Role:, Skills:, Location:
 */
export const cowboyBebopAboutMeFieldLabel: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-mono, 'IBM Plex Mono', monospace)",
  textTransform: "none",
  letterSpacing: "0.12em",
  fontWeight: 500,
  color: cowboyBebopAboutMeColors.green,
  fontSize: {
    xs: "0.7rem",
    sm: "0.75rem",
  },
};

/**
 * Side-card values:
 * YOUR NAME, Space Developer, Full-Stack Engineer…
 */
export const cowboyBebopAboutMeFieldValue: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  textTransform: "none",
  letterSpacing: "0.04em",
  fontWeight: 500,
  color: cowboyBebopAboutMeColors.offWhite,
  fontSize: {
    xs: "0.75rem",
    sm: "0.8rem",
  },
};

/**
 * Main paragraph copy (BACKGROUND REPORT body text)
 */
export const cowboyBebopAboutMeBodyParagraph: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "0.03em",
  color: cowboyBebopAboutMeColors.bodyText,
  fontSize: {
    xs: "0.75rem",
    sm: "0.8rem",
    md: "0.85rem",
  },
};

/**
 * Small caption text:
 * SUBJECT PHOTO #AD1, Reward: 500w, etc.
 */
export const cowboyBebopAboutMeCaptionSmall: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-mono, 'IBM Plex Mono', monospace)",
  letterSpacing: "0.02em",
  fontWeight: 400,
  color: cowboyBebopAboutMeColors.bodyDim,
  fontSize: {
    xs: "2.55vh",
    sm: "2.4vh",
  },
};

/**
 * Reward label inside capability cards:
 * Reward: 500w
 */
export const cowboyBebopAboutMeRewardLabel: SxProps<Theme> = {
  ...cowboyBebopAboutMeCaptionSmall,
  color: cowboyBebopAboutMeColors.offWhite,
  letterSpacing: "0.14em",
};

/**
 * Capability card titles:
 * FRONTEND, BACKEND, DATA SCIENCE, MOBILE
 */
export const cowboyBebopAboutMeCapabilityTitle: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  textTransform: "uppercase",
  letterSpacing: "0.16em",
  fontWeight: 700,
  color: cowboyBebopAboutMeColors.background,
  fontSize: {
    xs: "0.8rem",
    sm: "0.9rem",
  },
};

/**
 * Mission log year column:
 * 2023, 2024, 2025…
 */
export const cowboyBebopAboutMeMissionYear: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-mono, 'IBM Plex Mono', monospace)",
  fontWeight: 600,
  letterSpacing: "0.12em",
  color: cowboyBebopAboutMeColors.sandMuted,
  fontSize: {
    xs: "0.75rem",
    sm: "0.8rem",
  },
};

/**
 * Mission log description lines
 */
export const cowboyBebopAboutMeMissionEntry: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  letterSpacing: "0.03em",
  lineHeight: 1.5,
  color: cowboyBebopAboutMeColors.bodyText,
  fontSize: {
    xs: "1.2vw",
    sm: "1.4vw",
  },
};

/**
 * CREW REFERENCES heading (red in the card)
 */
export const cowboyBebopAboutMeCrewReferencesTitle: SxProps<Theme> = {
  ...cowboyBebopAboutMeSectionTitle,
  fontSize: {
    xs: "0.7vw",
    sm: "1.5vw",
  },
};

/**
 * The quote text inside CREW REFERENCES
 */
export const cowboyBebopAboutMeQuoteText: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontStyle: "italic",
  letterSpacing: "0.03em",
  lineHeight: 1.6,
  color: cowboyBebopAboutMeColors.bodyText,
  fontSize: {
    xs: "1vw",
    sm: "1.2vw",
  },
};

/**
 * Quote attribution:
 * – JET BLACK
 */
export const cowboyBebopAboutMeQuoteAttribution: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-mono, 'IBM Plex Mono', monospace)",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontWeight: 600,
  color: cowboyBebopAboutMeColors.sandMuted,
  fontSize: {
    xs: "1vw",
    sm: "1.2vw",
  },
  textAlign: "right",
};

/**
 * Chip style (Projects detail section)
 */
export const cowboyBebopAboutMeProjectsDetailSectionChip: SxProps<Theme> = {
  fontFamily: "var(--font-bebop-body, system-ui, sans-serif)",
  fontSize: "0.75rem",
  lineHeight: 1.2,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  fontWeight: 600,
  color: "#1E1111",
  backgroundColor: cowboyBebopAboutMeColors.sandDark,
  borderRadius: 0,
};
