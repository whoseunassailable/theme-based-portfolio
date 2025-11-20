// Scroll / card container behind the text (optional)
export const potterHomeScroll = {
  backgroundColor: "#e6d2a8",
  borderRadius: "0.6vw",
  p: "3vw",
  boxShadow: "0px 6px 18px rgba(0,0,0,0.45)",
  border: "1px solid #c3a776",
  maxWidth: "38rem",
  mx: "auto",
};

// Main title: “Greetings, Muggle or Wizard!”
export const potterHomeTitle = {
  fontFamily: "'Cinzel', 'Times New Roman', serif",
  fontSize: { xs: "6vw", sm: "3.5vw", md: "3.8vw" },
  textAlign: "center",
  color: "#3b1c0c",
  textShadow: "0 2px 3px rgba(0,0,0,0.6)",
  letterSpacing: "0.08em",
  mb: "1.5vw",
};

// Subtitle / question line: “Tell me…”
export const potterHomeSubtitle = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: { xs: "4vw", sm: "2.2vw", md: "2.6vw" },
  textAlign: "center",
  color: "#4a2712",
  mb: "1vw",
};

// Body text / description: “how much do you know about…”
export const potterHomeBody = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: { xs: "3.4vw", sm: "2vw", md: "1.4vw" },
  lineHeight: 1.4,
  textAlign: "center",
  color: "#4a2712",
  maxWidth: "32rem",
  mx: "auto",
  mb: "2.5vw",
};

// Primary button: “I’m a True Wizard”
export const potterHomePrimaryButton = {
  mt: "1vw",
  width: "100%",
  maxWidth: "26rem",
  mx: "auto",
  fontFamily: "'Cinzel', 'Times New Roman', serif",
  fontSize: { xs: "3.4vw", sm: "2vw", md: "1.3vw" },
  textTransform: "none",
  backgroundColor: "#5b3416",
  color: "#f9edd0",
  borderRadius: "0.8vw",
  border: "1px solid #f0d49b",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.45)",
  py: "0.9vw",
  px: "2vw",
  letterSpacing: "0.05em",
  "&:hover": {
    backgroundColor: "#734020",
    boxShadow: "0px 5px 14px rgba(0,0,0,0.55)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
  },
};

// Secondary button: “Not Much, I’m a Muggle”
export const potterHomeSecondaryButton = {
  mt: "1.5vw",
  width: "100%",
  maxWidth: "26rem",
  mx: "auto",
  fontFamily: "'Cinzel', 'Times New Roman', serif",
  fontSize: { xs: "3.2vw", sm: "1.9vw", md: "1.2vw" },
  textTransform: "none",
  backgroundColor: "#2e2216",
  color: "#f9edd0",
  borderRadius: "0.8vw",
  border: "1px solid #f0d49b",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.45)",
  py: "0.85vw",
  px: "2vw",
  letterSpacing: "0.05em",
  "&:hover": {
    backgroundColor: "#3d2c1d",
    boxShadow: "0px 5px 14px rgba(0,0,0,0.55)",
    transform: "translateY(-1px)",
  },
  "&:active": {
    transform: "translateY(0)",
    boxShadow: "0px 2px 6px rgba(0,0,0,0.4)",
  },
};

// TITLE on the scroll
export const potterSpellsPageTitle = {
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontWeight: 600,
  fontSize: "3.2vw",
  letterSpacing: "0.12em",
  textAlign: "center",
  color: "#3b2412",
  textShadow: "0px 3px 6px rgba(0,0,0,0.45)",
  mb: "1.5vw",
};

// SUBTITLE / main instructions
export const potterSpellsPageSubtitle = {
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontWeight: 500,
  fontSize: "1.8vw",
  lineHeight: 1.5,
  textAlign: "center",
  color: "#3b2412",
  textShadow: "0px 2px 4px rgba(0,0,0,0.35)",
  mb: "1.2vw",
};

// SMALL HINT text (e.g. “Hint: It opens locked doors…”)
export const potterSpellsPageHint = {
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontWeight: 400,
  fontSize: "2.3vw",
  textAlign: "center",
  color: "#5a3a20",
  opacity: 0.9,
  mt: "0.8vw",
  mb: "2.2vw",
};

// PRIMARY BUTTON (e.g. “Begin the Spell Test”)
export const potterSpellsPagePrimaryButton = {
  mt: "1.5vw",
  px: "3.4vw",
  py: "0.9vw",
  borderRadius: "0.6vw",
  border: "2px solid #f4ddb0",
  background: "linear-gradient(180deg, #9b6a32 0%, #5b3518 100%)",
  boxShadow: "0px 4px 10px rgba(0,0,0,0.45)",
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontSize: "1.2vw",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: "#f8f0dd",
  "&:hover": {
    background: "linear-gradient(180deg, #b17a3c 0%, #6a3f1d 100%)",
    boxShadow: "0px 6px 14px rgba(0,0,0,0.55)",
  },
};

// SECONDARY BUTTON (if you need a back/skip action)
export const potterSpellsPageSecondaryButton = {
  mt: "0.9vw",
  px: "3.4vw",
  py: "0.8vw",
  borderRadius: "0.6vw",
  border: "2px solid #8a6a4a",
  backgroundColor: "#3a2514",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.35)",
  fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
  fontSize: "1.1vw",
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "#f4e3c0",
  "&:hover": {
    backgroundColor: "#46301a",
    boxShadow: "0px 5px 12px rgba(0,0,0,0.5)",
  },
};

// ROUND “MIC” / ACTION BUTTON AREA (if you bring back the recorder icon)
export const potterSpellsPageMicButton = {
  mt: "2vw",
  width: "4.5vw",
  height: "4.5vw",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid #f4f0d0",
  backgroundColor: "rgba(0,0,0,0.12)",
  boxShadow: "0 0 22px rgba(150, 222, 255, 0.75)",
  cursor: "pointer",
  transition: "transform 0.2s ease, box-shadow 0.2s ease",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 0 28px rgba(170, 240, 255, 0.95)",
  },
};

// Entire hero/page wrapper
export const potterHomePageStylingContainer = {
  minHeight: "100vh",
  backgroundColor: "#050817",
  color: "#f8e3b5",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  pt: "3vh",
  pb: "6vh",
  px: "6vw",
  textAlign: "center",
  position: "relative",
};

// Top parchment nav bar
export const potterHomePageStylingNavBar = {
  width: "100%",
  maxWidth: "1200px",
  display: "flex",
  justifyContent: "center",
  gap: "4vw",
  py: "1.2vh",
  px: "3vw",
  background: "linear-gradient(90deg, #c9a875, #b78f5a)",
  borderRadius: "0.75vw",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.6)",
  border: "1px solid #8b683a",
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  fontFamily: "'Cinzel', serif",
  fontSize: "1.1vw",
};

// Individual nav links (Home, About, Projects, Contact)
export const potterHomePageStylingNavLink = {
  color: "#3a1a08",
  textDecoration: "none",
  cursor: "pointer",
  position: "relative",
  "&:after": {
    content: "''",
    position: "absolute",
    left: 0,
    bottom: "-0.4vh",
    width: 0,
    height: "1px",
    backgroundColor: "#3a1a08",
    transition: "width 0.2s ease",
  },
  "&:hover:after": {
    width: "100%",
  },
};

// Main title: "Jonathan Doe"
export const potterHomePageStylingTitle = {
  mt: "10vh",
  fontFamily: "'Cinzel Decorative', 'Cinzel', serif",
  fontSize: "5.2vw",
  fontWeight: 700,
  letterSpacing: "0.08em",
  placeSelf: "center",
  color: "#f8e3b5",
  textShadow: "0px 0px 18px rgba(255, 227, 173, 0.9)",
};

// Subtitle: "Full Stack Wizard"
export const potterHomePageStylingSubtitle = {
  mt: "1.5vh",
  fontFamily: "'Cinzel', serif",
  fontSize: "2.1vw",
  placeSelf: "center",
  textTransform: "uppercase",
  letterSpacing: "0.35em",
  color: "#f3d9a2",
  textShadow: "0px 0px 10px rgba(255, 227, 173, 0.7)",
};

// CTA parchment button: "View My Work"
export const potterHomePageStylingButton = {
  mt: "10vh",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  px: "4.5vw",
  py: "1.8vh",
  backgroundColor: "#c9a875",
  borderRadius: "0.6vw",
  border: "1px solid #8b683a",
  boxShadow: "0px 4px 12px rgba(0,0,0,0.7)",
  fontFamily: "'Cinzel', serif",
  textTransform: "uppercase",
  letterSpacing: "0.22em",
  fontSize: "1.4vw",
  color: "#3a1a08",
  cursor: "pointer",
  transition:
    "transform 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease",
  "&:hover": {
    backgroundColor: "#d6b883",
    boxShadow: "0px 6px 18px rgba(0,0,0,0.9)",
    transform: "translateY(-2px)",
  },
  "&:active": {
    transform: "translateY(0px)",
    boxShadow: "0px 3px 8px rgba(0,0,0,0.6)",
  },
};

// SECTION WRAPPER (whole work experience block)
export const potterWorkExperienceWrapper = {
  backgroundColor: "#2b1a0e",
  backgroundImage:
    "radial-gradient(circle at top, #5a3415 0%, #2b1a0e 55%, #120a05 100%)",
  minHeight: "100vh",
  px: { xs: "6vw", md: "10vw" },
  py: { xs: "4vh", md: "6vh" },
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

// TOP TITLE: "Work Experience"
export const potterWorkExperienceTitle = {
  fontFamily: "'Cinzel', 'Cormorant Garamond', serif",
  fontWeight: 600,
  fontSize: { xs: "2.3rem", md: "2.8rem" },
  letterSpacing: "0.12em",
  textTransform: "capitalize",
  color: "#f6d58a",
  textAlign: "center",
  textShadow: "0 0 18px rgba(18, 16, 16, 0.7)",
  mb: { xs: "2rem", md: "3rem" },
};

// COMPANY NAME: "Launch Ventures", "Excelerate", "MIT-FOSS"
export const potterWorkExperienceCompanyTitle = {
  fontFamily: "'Cinzel', serif",
  fontWeight: 600,
  fontSize: { xs: "2.3vw", md: "2vw" },
  letterSpacing: "0.08em",
  textAlign: "center",
  color: "#3b1f0d",
  mb: "0.6rem",
};

// ROLE / POSITION SUBTITLE: "Software Craftsces…", "Data Analyst Associate Intern"
export const potterWorkExperienceRoleSubtitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 500,
  fontStyle: "italic",
  fontSize: { xs: "1.4vw", md: "1.6vw" },
  textAlign: "center",
  color: "#3b1f0d",
  mb: "0.4rem",
};

// DATE RANGE: "Jun 2022 – May 2024"
export const potterWorkExperienceDateText = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 500,
  fontSize: { xs: "1.3vw", md: "1.5vw" },
  textAlign: "center",
  color: "#3b1f0d",
  mb: "1rem",
};

// BULLET TEXT (li)
export const potterWorkExperienceBulletItem = {
  fontFamily: "'Cormorant Garamond', serif",
  fontWeight: 400,
  fontSize: { xs: "1.3vw", md: "1.5vw" },
  lineHeight: 1.5,
  color: "#3b1f0d",
  mb: "0.35rem",
};

// OPTIONAL: CTA BUTTON STYLE IF YOU ADD ONE ON A SCROLL
export const potterWorkExperienceButton = {
  mt: "1.6rem",
  alignSelf: "center",
  px: "1.9rem",
  py: "0.6rem",
  borderRadius: "999px",
  background: "linear-gradient(180deg, #e4c27d 0%, #c2954b 50%, #a46f33 100%)",
  color: "#3b1f0d",
  fontFamily: "'Cinzel', serif",
  fontWeight: 600,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  boxShadow: "0 0 18px rgba(0,0,0,0.7)",
  border: "1px solid rgba(0,0,0,0.35)",
  "&:hover": {
    background:
      "linear-gradient(180deg, #f4d58e 0%, #cf9f54 50%, #b87936 100%)",
    boxShadow: "0 0 24px rgba(0,0,0,0.9)",
  },
};

export const potterProjectsPageStylingTitle = {
  fontFamily: "'Cinzel', serif",
  fontSize: "3.4vw",
  letterSpacing: "0.08em",
  textAlign: "center",
  color: "#3b2715",
  mb: "0.8vw",
};

export const potterProjectsPageStylingSubtitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "2vw",
  textAlign: "center",
  lineHeight: 1.4,
  color: "#4a3320",
  maxWidth: "36vw",
  mx: "auto",
  mb: "2.2vw",
};

export const potterProjectsPageStylingSectionHeading = {
  fontFamily: "'Cinzel', serif",
  fontSize: "1.6vw",
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  textAlign: "center",
  color: "#3b2715",
  mt: "1.4vw",
  mb: "1.2vw",
};

export const potterProjectsPageStylingContainerHeading = {
  fontFamily: "'Cinzel', serif",
  fontSize: "1.45vw",
  fontWeight: "700",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  textAlign: "center",
  color: "#3b2715",
};

export const potterProjectsPageStylingContainerSubHeading = {
  fontFamily: "'Cinzel', serif",
  fontSize: "1.2vw",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  fontWeight: "700",
  textAlign: "center",
  color: "#3b2715",
  mt: "7.5vh",
};

export const potterProjectsPageStylingProjectGrid = {
  display: "grid",
  gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
  gap: "1.6vw",
  mt: "0.8vw",
};

export const potterProjectsPageStylingProjectCard = {
  backgroundColor: "#e9ddc4",
  borderRadius: "0.4vw",
  px: "1.2vw",
  py: "1.4vw",
  border: "1px solid #c1b191",
  boxShadow: "0px 3px 8px rgba(0,0,0,0.28)",
};

export const potterProjectsPageStylingProjectTitle = {
  fontFamily: "'Cinzel', serif",
  fontSize: "1.1vw",
  textAlign: "center",
  color: "#3b2715",
  mb: "0.4vw",
};

// Title: “Readiculous”
export const potterProjectDetailsPageTitle = {
  fontFamily: "'Great Vibes', 'Lucida Handwriting', 'Brush Script MT', cursive",
  fontWeight: 700,
  fontSize: "2.2vw",
  letterSpacing: "0.08em",
  textTransform: "none",
  color: "#3b220a",
  textShadow: "0px 0px 10px rgba(0,0,0,0.7)",
  mb: "1vw",
  // angle effect
  mt: "30vh",
  ml: "25vw",
  transform: "rotate(3deg)", // or 25deg depending on direction
};

// Subtitle: “Full-Stack Book Recommendation App”
export const potterProjectDetailsPageSubtitle = {
  fontFamily: "'Great Vibes', 'Lucida Handwriting', 'Brush Script MT', cursive",
  fontWeight: 400,
  fontSize: "1.8vw",
  letterSpacing: "0.04em",
  color: "#4a2a0d",
  opacity: 0.95,
  mb: "1.8vw",
  ml: "22.5vw",
  transform: "rotate(3deg)", // or 25deg depending on direction
};

// Body / bullet text
export const potterProjectDetailsPageBodyText = {
  fontFamily: "'Great Vibes', 'Lucida Handwriting', 'Brush Script MT', cursive",
  fontSize: "1.5vw",
  lineHeight: 1.6,
  color: "#9e631d",
  mb: "1.8vw",
  ml: "22.5vw",
  transform: "rotate(3deg)", // or 25deg depending on direction
};

// "ABOUT ME" title
export const potterAboutMePageTitle = {
  fontFamily: "'Cinzel', 'Times New Roman', serif",
  fontSize: "3.8vw",
  fontWeight: 700,
  textTransform: "uppercase",
  letterSpacing: "0.05em",
  textAlign: "center",
  mb: "2.4vw",
  color: "#3b2514",
  textShadow: "0px 2px 3px rgba(0,0,0,0.35)",
  mt: "20vh",
  transform: "rotate(3deg)",
  mr: "5vw",
};

// Intro subtitle block: "Hi, I'm Rohan…"
export const potterAboutMePageSubtitle = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "1.6vw",
  lineHeight: 1.4,
  justifySelf: "center",
  maxWidth: "42vw",
  color: "#3b2514",
  mb: "2vh",
  transform: "rotate(3.2deg)",
  mr: "7vw",
};

// Generic section heading (e.g. "SKILLS")
export const potterAboutMePageSectionHeading = {
  fontFamily: "'Cinzel', 'Times New Roman', serif",
  fontSize: "2.6vw",
  fontWeight: 600,
  textTransform: "uppercase",
  letterSpacing: "0.18em",
  textAlign: "center",
  color: "#3b2514",
  textShadow: "0px 1px 3px rgba(0,0,0,0.3)",
  transform: "rotate(3deg)",
  mr: "20vw",
  mb: "2vh",
};

// Skill labels under the potion bottles
export const potterAboutMePageSkillLabel = {
  display: "flex",
  columnGap: "2vw",
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "1.25vw",
  lineHeight: 1.3,
  color: "#3b2514",
  mb: "20vh",
  ml: "20vw",
  transform: "rotate(3deg)",
};

// Bottom timeline / journey text
export const potterAboutMePageTimelineText = {
  fontFamily: "'Cormorant Garamond', 'Georgia', serif",
  fontSize: "1.3vw",
  lineHeight: 1.5,
  textAlign: "center",
  mt: "2.4vw",
  color: "#3b2514",
};

// “Contact” title
export const potterContactMePageTitle = {
  fontFamily: "'Cinzel', 'Cormorant Garamond', serif",
  fontSize: "3vw",
  textAlign: "center",
  color: "#2b1607",
  letterSpacing: "0.08em",
  mb: "2vh",
  mt: "30vh",
};

// Field label (Name / Email / Message)
export const potterContactMePageLabel = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.3vw",
  color: "#2b1607",
};

// Single-line input styling
export const potterContactMePageInput = {
  fontFamily: "'Courier Prime', monospace",
  fontSize: "1.1vw",
  color: "#2b1607",
  backgroundColor: "transparent",
  border: "none",
  borderBottom: "2px solid rgba(43,22,7,0.45)",
  px: "0.4vw",
  py: "0.4vw",
  outline: "none",
  width: "100%",
  mb: "2vh",
};

// Multi-line message input styling
export const potterContactMePageMessageInput = {
  fontFamily: "'Courier Prime', monospace",
  fontSize: "1.1vw",
  color: "#2b1607",
  backgroundColor: "transparent",
  border: "2px solid rgba(43,22,7,0.35)",
  borderRadius: "0.4vw",
  px: "0.6vw",
  py: "0.6vw",
  outline: "none",
  width: "100%",
  minHeight: "8vw",
  resize: "vertical",
};

// “Send via Owl” button container
export const potterContactMePageButton = {
  mt: "2vw",
  alignSelf: "center",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  px: "2.8vw",
  py: "0.9vw",
  borderRadius: "0.5vw",
  background: "linear-gradient(180deg, #e7c992 0%, #b87833 100%)",
  border: "1px solid #7d4d1c",
  boxShadow: "0px 3px 6px rgba(0,0,0,0.35)",
  cursor: "pointer",
  transition: "transform 0.15s ease-out, box-shadow 0.15s ease-out",
  "&:hover": {
    transform: "translateY(-0.1vw)",
    boxShadow: "0px 5px 12px rgba(0,0,0,0.55)",
  },
  "&:active": {
    transform: "translateY(0.1vw)",
    boxShadow: "0px 2px 4px rgba(0,0,0,0.4)",
  },
};

// “Send via Owl” text
export const potterContactMePageButtonLabel = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.3vw",
  fontWeight: 600,
  letterSpacing: "0.08em",
  color: "#2b1607",
  textTransform: "none",
};
