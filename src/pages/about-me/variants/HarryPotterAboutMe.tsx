import { Box, Typography } from "@mui/material";
import aboutMeTheme from "../../../assets/about-me-theme-harry-potter.png";
import {
  potterAboutMePageSectionHeading,
  potterAboutMePageSkillLabel,
  potterAboutMePageSubtitle,
  potterAboutMePageTitle,
} from "../../../styles/potter-typography";

export const HarryPotterAboutMe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "100vw",
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${aboutMeTheme})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography sx={potterAboutMePageTitle}>About Me</Typography>
        <Typography sx={potterAboutMePageSubtitle}>
          Hi, I',m Rohan Bhande <br /> - Full Stack Wizard <br />
          blending Mobile App, data <br /> and Software Engineering skills.
        </Typography>
        <Typography sx={potterAboutMePageSectionHeading}>Skills</Typography>
        <Typography sx={potterAboutMePageSkillLabel}>
          <Typography>FrontEnd</Typography>
          <Typography>Data Science and AI</Typography>
          <Typography>Backend</Typography>
          <Typography>Mobile Development</Typography>
        </Typography>
      </Box>
    </Box>
  );
};
