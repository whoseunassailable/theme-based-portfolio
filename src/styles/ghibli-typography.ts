// ghibli-typography.ts

// Shared tokens --------------------------------------------------------------

export const ghibliHeadingFontFamily =
  "'Cormorant Infant', 'Cormorant Garamond', 'Times New Roman', serif";

export const ghibliBodyFontFamily =
  "'Crimson Text', 'Georgia', 'Times New Roman', serif";

export const ghibliPrimaryTextColor = "#3c2b23"; // warm, storybook brown
export const ghibliMutedTextColor = "#5a4335";
export const ghibliAccentTextColor = "#8a5a24";

// HOME ----------------------------------------------------------------------
// Hero text from the landing "Hi, I'm Your Name" page

export const ghibliHomeHeroTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(2.8rem, 5vw, 4.6rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  letterSpacing: "0.02em",
  color: ghibliPrimaryTextColor,
  placeSelf: "center",
};

export const ghibliHomeHeroSubtitleTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.1rem, 2.1vw, 1.6rem)",
  fontWeight: 700,
  lineHeight: 1.4,
  letterSpacing: "0.02em",
  color: ghibliMutedTextColor,
  placeSelf: "center",
};

export const ghibliHomeHeroButtonTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.9rem, 1.5vw, 1.1rem)",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: ghibliPrimaryTextColor,
};

export const ghibliHomeScrollHintTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "2.5vw",
  fontWeight: 500,
  letterSpacing: "0.04em",
  color: "#135b96", // matches the blue “Scroll down to enter the story…”
  placeSelf: "center",
  mt: "90vh",
};

// WORK HISTORY TIMELINE (“My Work – Where I’ve Worked…”) ---------------------

export const ghibliWorkSectionTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(2.4rem, 4.1vw, 3.4rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  color: ghibliPrimaryTextColor,
};

export const ghibliWorkSectionSubtitleTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)",
  fontWeight: 400,
  lineHeight: 1.4,
  color: ghibliMutedTextColor,
};

export const ghibliWorkYearLabelTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1rem, 1.4vw, 1.1rem)",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: ghibliAccentTextColor,
};

export const ghibliWorkFilterChipTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: ghibliPrimaryTextColor,
};

export const ghibliWorkRoleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(1.3rem, 2.1vw, 1.7rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: ghibliPrimaryTextColor,
};

export const ghibliWorkCompanyTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)",
  fontWeight: 600,
  lineHeight: 1.3,
  color: ghibliPrimaryTextColor,
};

export const ghibliWorkDatesTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
  fontWeight: 500,
  color: ghibliMutedTextColor,
};

export const ghibliWorkBulletTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.98rem, 1.5vw, 1.15rem)",
  fontWeight: 400,
  lineHeight: 1.5,
  color: ghibliMutedTextColor,
};

export const ghibliWorkTagTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: ghibliPrimaryTextColor,
};

export const ghibliWorkResumeButtonTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "none" as const,
  color: ghibliPrimaryTextColor,
};

// PROJECTS GRID (“My Work – Each project, a chapter…”) ----------------------

export const ghibliProjectsSectionTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(2.4rem, 4.1vw, 3.4rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectsSectionSubtitleTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)",
  fontWeight: 400,
  lineHeight: 1.4,
  color: ghibliMutedTextColor,
};

export const ghibliProjectsFilterChipTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.85rem, 1.2vw, 1rem)",
  fontWeight: 600,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectsCardTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(1.25rem, 2vw, 1.6rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectsCardSubtitleTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
  fontWeight: 500,
  lineHeight: 1.4,
  color: ghibliMutedTextColor,
};

export const ghibliProjectsCardTagTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.8rem, 1.2vw, 0.95rem)",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: ghibliPrimaryTextColor,
};

// PROJECT DETAILS (“Readiculous – A Journey Through Stories”) ---------------

export const ghibliProjectDetailsTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(2.3rem, 3.8vw, 3.2rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectDetailsSubtitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(1.4rem, 2.3vw, 1.9rem)",
  fontWeight: 500,
  fontStyle: "italic",
  lineHeight: 1.2,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectDetailsMetaLabelTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.9rem, 1.3vw, 1.05rem)",
  fontWeight: 600,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: ghibliAccentTextColor,
};

export const ghibliProjectDetailsMetaValueTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
  fontWeight: 500,
  color: ghibliMutedTextColor,
};

export const ghibliProjectDetailsBodyTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
  fontWeight: 400,
  lineHeight: 1.6,
  color: ghibliMutedTextColor,
};

export const ghibliProjectDetailsSubsectionTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(1.6rem, 2.5vw, 2rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectDetailsColumnHeadingTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
  fontWeight: 700,
  color: ghibliPrimaryTextColor,
};

export const ghibliProjectDetailsBulletTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.98rem, 1.5vw, 1.15rem)",
  fontWeight: 400,
  lineHeight: 1.5,
  color: ghibliMutedTextColor,
};

// ABOUT ME -------------------------------------------------------------------

export const ghibliAboutTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(2.4rem, 4.1vw, 3.4rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  color: ghibliPrimaryTextColor,
};

export const ghibliAboutBodyTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1rem, 1.6vw, 1.25rem)",
  fontWeight: 400,
  lineHeight: 1.6,
  letterSpacing: "0.01em",
  color: ghibliMutedTextColor,
};

export const ghibliAboutTimelineYearTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.1rem, 1.7vw, 1.3rem)",
  fontWeight: 600,
  letterSpacing: "0.06em",
  textTransform: "uppercase" as const,
  color: ghibliAccentTextColor,
};

export const ghibliAboutTimelineHeadingTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.05rem, 1.7vw, 1.3rem)",
  fontWeight: 600,
  lineHeight: 1.35,
  color: ghibliPrimaryTextColor,
};

export const ghibliAboutTimelineBodyTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.98rem, 1.5vw, 1.15rem)",
  fontWeight: 400,
  lineHeight: 1.5,
  color: ghibliMutedTextColor,
};

export const ghibliAboutHobbiesTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(1.4rem, 2.3vw, 1.9rem)",
  fontWeight: 700,
  lineHeight: 1.2,
  color: ghibliPrimaryTextColor,
};

export const ghibliAboutHobbiesLabelTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
  fontWeight: 500,
  letterSpacing: "0.06em",
  color: ghibliPrimaryTextColor,
};

// CONTACT --------------------------------------------------------------------

export const ghibliContactTitleTypography = {
  fontFamily: ghibliHeadingFontFamily,
  fontSize: "clamp(2.4rem, 4.1vw, 3.4rem)",
  fontWeight: 700,
  lineHeight: 1.1,
  color: ghibliPrimaryTextColor,
};

export const ghibliContactSubtitleTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
  fontWeight: 500,
  lineHeight: 1.4,
  color: ghibliMutedTextColor,
};

export const ghibliContactLabelTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(0.95rem, 1.4vw, 1.1rem)",
  fontWeight: 600,
  letterSpacing: "0.06em",
  color: ghibliPrimaryTextColor,
};

export const ghibliContactButtonTypography = {
  fontFamily: ghibliBodyFontFamily,
  fontSize: "clamp(1rem, 1.6vw, 1.2rem)",
  fontWeight: 700,
  letterSpacing: "0.12em",
  textTransform: "none" as const,
  color: ghibliPrimaryTextColor,
};
