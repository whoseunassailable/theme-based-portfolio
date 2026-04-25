import { Box, Container } from "@mui/material";
import { CowboyBebopNavbar } from "../components/cowboy-bebop/CowboyBebopNavbar";
import { MainContainer } from "../components/cowboy-bebop/MainContainer";
import { BebopWorkExperience } from "../../work-experience/variants/BebopWorkExperience";
import { BebopProjects } from "../../projects/variants/BebopProjects";
import { CowboyProjectsDetail } from "../../project-details/variants/CowboyProjectsDetail";
import { CowboyBebopContactMe } from "../../contact-me/CowboyBebopContactMe";
import { CowboyBebopAboutMe } from "../../about-me/variants/CowboyBebopAboutMe";
import { CowboyBebopFloatingControls } from "../components/cowboy-bebop/CowboyBebopFloatingControls";

export const CowboyBebopHome = () => {
  const bebopSectionShellSx = {
    width: "min(1180px, 92vw)",
    mx: "auto",
    mt: { xs: 6, md: 8 },
    px: { xs: 2, md: 2.5 },
    py: { xs: 2.2, md: 2.6 },
    backgroundColor: "transparent",
  } as const;

  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ p: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <CowboyBebopNavbar></CowboyBebopNavbar>
      <Box id="bebop-home-section" sx={bebopSectionShellSx}>
        <MainContainer></MainContainer>
      </Box>
      <Box id="bebop-work-section" sx={bebopSectionShellSx}>
        <BebopWorkExperience />
      </Box>
      <Box id="bebop-projects-section" sx={bebopSectionShellSx}>
        <BebopProjects />
      </Box>
      <Box id="bebop-project-details-section" sx={bebopSectionShellSx}>
        <CowboyProjectsDetail />
      </Box>
      <Box id="bebop-about-section" sx={bebopSectionShellSx}>
        <CowboyBebopAboutMe />
      </Box>
      <Box id="bebop-contact-section" sx={bebopSectionShellSx}>
        <CowboyBebopContactMe />
      </Box>
      <CowboyBebopFloatingControls />
    </Container>
  );
};
