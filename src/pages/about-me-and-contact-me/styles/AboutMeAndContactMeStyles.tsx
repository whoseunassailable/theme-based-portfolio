import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

// styles.ts
export class AboutMeAndContactStyles {
  static monoText = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "0.80rem",
    lineHeight: 1,
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "justify",
  };

  static monoText2 = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "0.70rem",
    lineHeight: 1,
    p: "2vh",
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "center",
  };

  static monoText3 = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "0.70rem",
    lineHeight: 1,
    p: "2vh",
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "start",
  };

  static containerTextHeading = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "0.08em",
    fontWeight: 400,
    fontSize: "0.65rem",
  };

  static heading = {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#FFFFFF",
  };

  static labelSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: COLORS_NEO_EXTENDED.heading, // or .accent for brighter
    mb: 0.75,
  };

  static inputSx = {
    mb: 2,
    height: "5vh",
    width: "70%",
    input: {
      color: COLORS_NEO_EXTENDED.fg,
      fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    },
    textarea: {
      color: COLORS_NEO_EXTENDED.fg,
      fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    },
    "& .MuiInputBase-root": {
      height: "100%",
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: COLORS_NEO_EXTENDED.inputBg,
      "& fieldset": {
        borderColor: COLORS_NEO_EXTENDED.inputBorder,
      },
      "&:hover fieldset": {
        borderColor: COLORS_NEO_EXTENDED.linkHover,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS_NEO_EXTENDED.accent,
        boxShadow: `0 0 0 3px ${COLORS_NEO_EXTENDED.glowSoft}`,
      },
    },
    "& .MuiFormHelperText-root": {
      color: COLORS_NEO_EXTENDED.error,
    },
  };

  // ===== CONTACT ME / GET IN TOUCH =====
  static contactTitleSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    textTransform: "uppercase",
    letterSpacing: "0.12em",
    fontWeight: 700,
    fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3rem" },
    lineHeight: 1,
    color: COLORS_NEO_EXTENDED.heading,
    textShadow: `0 0 6px ${COLORS_NEO_EXTENDED.glowSoft}`,
    alignItems: "center",
    justifyContent: "center",
    p: 0.5,
    m: 2,
  };

  static getInTouchTitleSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    textTransform: "uppercase",
    letterSpacing: "0.22em",
    fontWeight: 700,
    fontSize: "2vw",
    color: COLORS_NEO_EXTENDED.muted,
    opacity: 0.95,
    mb: 1.5,
  };

  static getInTouchListSx = {
    mt: 1,
    display: "grid",
    gap: 1.25,
  };

  static getInTouchRowSx = {
    display: "inline-flex",
    alignItems: "center",
    gap: 1,
    lineHeight: 1.1,
    color: COLORS_NEO_EXTENDED.link,
    textDecoration: "none",
    cursor: "pointer",
    "&:hover": {
      color: COLORS_NEO_EXTENDED.linkHover,
      textShadow: `0 0 8px ${COLORS_NEO_EXTENDED.shadow}`,
    },
  };

  static getInTouchIconSx = {
    fontSize: 20,
    opacity: 0.9,
    mr: 1,
    color: COLORS_NEO_EXTENDED.heading,
  };

  // Square outlined icon box (like the mock)
  static getInTouchIconWrapSx = {
    height: 36,
    width: 36,
    display: "grid",
    placeItems: "center",
    borderRadius: 1,
    border: `1px solid ${COLORS_NEO_EXTENDED.buttonBorder}`,
    backgroundColor: "transparent",
  };

  static getInTouchLabelSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    fontSize: "0.85rem",
    letterSpacing: "0.04em",
    color: COLORS_NEO_EXTENDED.fg,
  };

  // Email / link chips (optional, for inline pills)
  static contactPillSx = {
    display: "inline-flex",
    alignItems: "center",
    gap: 0.75,
    px: 1,
    py: 0.5,
    borderRadius: "9999px",
    border: `1px solid ${COLORS_NEO_EXTENDED.buttonBorder}`,
    backgroundColor: "transparent",
    color: COLORS_NEO_EXTENDED.fg,
    "&:hover": {
      backgroundColor: COLORS_NEO_EXTENDED.buttonHoverBg,
      borderColor: COLORS_NEO_EXTENDED.accent,
      boxShadow: `0 0 12px ${COLORS_NEO_EXTENDED.glowSoft}`,
    },
  };

  // Small helper/error line under inputs (matches your form palette)
  static helperErrorTextSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    fontSize: "0.70rem",
    letterSpacing: "0.06em",
    color: COLORS_NEO_EXTENDED.error,
    mt: 0.75,
  };

  // Vertical divider between form and contact list (if you lay them side-by-side)
  static rightPaneDividerSx = {
    borderLeft: `1px solid ${COLORS_NEO_EXTENDED.divider}`,
    pl: { xs: 0, md: 3 },
    ml: { xs: 0, md: 3 },
  };

  // Tiny footer glyphs / theme tag (bottom-left in your mock)
  static tinyGlyphsSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    fontSize: "0.65rem",
    letterSpacing: "0.18em",
    color: COLORS_NEO_EXTENDED.textDisabled,
    mt: 2,
  };

  // Optional: CTA button for "Send"
  static sendButtonSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    textTransform: "uppercase",
    letterSpacing: "0.18em",
    borderRadius: 2,
    px: 3,
    py: 1,
    border: `1px solid ${COLORS_NEO_EXTENDED.buttonBorder}`,
    color: COLORS_NEO_EXTENDED.fg,
    backgroundColor: "transparent",
    "&:hover": {
      borderColor: COLORS_NEO_EXTENDED.accent,
      boxShadow: `0 0 14px ${COLORS_NEO_EXTENDED.glowSoft}`,
      backgroundColor: COLORS_NEO_EXTENDED.buttonHoverBg,
    },
    "&.Mui-disabled": {
      color: COLORS_NEO_EXTENDED.textDisabled,
      borderColor: COLORS_NEO_EXTENDED.panelEdge,
    },
  };
}
