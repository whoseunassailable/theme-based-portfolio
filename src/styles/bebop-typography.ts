// bebopTypography.ts
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
