import { Container } from "@mui/material";
import { HomeNeoPageNavBar } from "./components/HomePageNavBar";
import { NeoBigTitle } from "./components/BigTitle";
import { NeoSmallTitle } from "./components/SmallTitle";
import { NeoButtonSection } from "./components/ButtonSection";
import { NeoCardGrid } from "./components/CardGrid";
import { NeoWorkExperience } from "../work-experience/WorkExperience";
import { NeoProjects } from "../projects/Projects";
import { NeoProjectsDetail } from "../project-details/ProjectsDetail";
import { NeoAboutMe } from "../about-me/AboutMe";
import { NeoContactMe } from "../contact-me/ContactMe";

export const Home = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ p: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <HomeNeoPageNavBar></HomeNeoPageNavBar>
      <NeoBigTitle title="I Build Experience As A" typographyAorB={true} />
      <NeoBigTitle
        title="Frontend Developer"
        typographyAorB={false}
      ></NeoBigTitle>
      <NeoSmallTitle></NeoSmallTitle>
      <NeoButtonSection></NeoButtonSection>
      <NeoCardGrid></NeoCardGrid>
      <NeoWorkExperience></NeoWorkExperience>
      <NeoProjects></NeoProjects>
      <NeoProjectsDetail></NeoProjectsDetail>
      <NeoAboutMe></NeoAboutMe>
      <NeoContactMe></NeoContactMe>
    </Container>
  );
};

export default Home;
