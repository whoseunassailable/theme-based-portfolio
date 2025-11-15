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

// Optional: glowing floating candle wrappers if you use icons/elements for them
export const potterHomePageStylingFloatingCandle = {
  position: "absolute",
  width: "0.4vw",
  height: "2.2vw",
  borderRadius: "999px",
  background: "linear-gradient(#ffe9c2, #e1b985)",
  boxShadow: "0px 0px 12px rgba(255, 233, 194, 0.9)",
  "&:before": {
    content: "''",
    position: "absolute",
    top: "-1vw",
    left: "50%",
    transform: "translateX(-50%)",
    width: "0.15vw",
    height: "0.6vw",
    borderRadius: "999px",
    backgroundColor: "#ffd191",
    boxShadow: "0px 0px 10px rgba(255, 209, 145, 0.9)",
  },
};
