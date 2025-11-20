import { Box, Container } from "@mui/material";
import { CowboyBebopNavbar } from "../components/cowboy-bebop/CowboyBebopNavbar";
import { MainContainer } from "../components/cowboy-bebop/MainContainer";
import { BebopWorkExperience } from "../../work-experience/variants/BebopWorkExperience";
import { BebopProjects } from "../../projects/variants/BebopProjects";
import { MuiSelectTheme } from "../../../components/MuiSelectTheme";
import { CowboyProjectsDetail } from "../../project-details/variants/CowboyProjectsDetail";
import { CowboyBebopContactMe } from "../../contact-me/CowboyBebopContactMe";
import { CowboyBebopAboutMe } from "../../about-me/variants/CowboyBebopAboutMe";

export const CowboyBebopHome = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ p: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <CowboyBebopNavbar></CowboyBebopNavbar>
      <MainContainer></MainContainer>
      <Box sx={{ gridArea: "theme", display: "flex" }}>
        <MuiSelectTheme />
      </Box>
      <BebopWorkExperience />
      <BebopProjects />
      <CowboyProjectsDetail />
      <CowboyBebopAboutMe />
      <CowboyBebopContactMe />
    </Container>
  );
};
