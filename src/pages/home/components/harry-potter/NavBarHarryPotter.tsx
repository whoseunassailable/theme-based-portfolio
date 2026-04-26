import { Box } from "@mui/material";
import harryHomeDesign from "../../../../assets/harry_home_design.png";

const hotspotSx = {
  position: "absolute",
  background: "transparent",
  border: 0,
  cursor: "pointer",
  padding: 0,
  margin: 0,
  opacity: 0,
  zIndex: 2,
  "&:focus-visible": {
    opacity: 0.18,
    outline: "2px solid rgba(255, 219, 138, 0.95)",
    outlineOffset: "2px",
    background:
      "linear-gradient(180deg, rgba(255, 230, 181, 0.32), rgba(163, 108, 44, 0.24))",
  },
} as const;

const navButtons = [
  { label: "Home", left: "23.3%", width: "10.2%", target: "potter-home-section" },
  { label: "About", left: "36.8%", width: "9.5%", target: "potter-about-section" },
  {
    label: "Projects",
    left: "48.4%",
    width: "11.3%",
    target: "potter-projects-section",
  },
  {
    label: "Experience",
    left: "61.5%",
    width: "12.7%",
    target: "potter-work-section",
  },
  {
    label: "Contact",
    left: "76.1%",
    width: "10.4%",
    target: "potter-contact-section",
  },
] as const;

export const NavBarHarryPotter = () => {
  const scrollToSection = (id: string, block: ScrollLogicalPosition = "start") => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block });
  };

  return (
    <Box
      id="potter-home-section"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "min(100vw, 1448px)",
          aspectRatio: "1448 / 1086",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={harryHomeDesign}
          alt="Harry Potter home design"
          sx={{
            width: "100%",
            height: "100%",
            display: "block",
            objectFit: "cover",
            userSelect: "none",
            WebkitUserDrag: "none",
          }}
        />

        {navButtons.map((button) => (
          <Box
            key={button.label}
            component="button"
            type="button"
            aria-label={button.label}
            onClick={() => scrollToSection(button.target)}
            sx={{
              ...hotspotSx,
              top: "4.6%",
              left: button.left,
              width: button.width,
              height: "7.6%",
            }}
          />
        ))}

        <Box
          component="button"
          type="button"
          aria-label="View my work"
          onClick={() => scrollToSection("potter-work-section")}
          sx={{
            ...hotspotSx,
            top: "62.5%",
            left: "36.2%",
            width: "27.7%",
            height: "9.6%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Open the grimoire"
          onClick={() => scrollToSection("potter-projects-section")}
          sx={{
            ...hotspotSx,
            top: "74.7%",
            left: "39.5%",
            width: "20.7%",
            height: "6.1%",
          }}
        />

        <Box
          component="button"
          type="button"
          aria-label="Scroll to explore"
          onClick={() => scrollToSection("potter-work-section")}
          sx={{
            ...hotspotSx,
            bottom: "1.8%",
            left: "46.3%",
            width: "7.6%",
            height: "8.8%",
          }}
        />
      </Box>
    </Box>
  );
};
