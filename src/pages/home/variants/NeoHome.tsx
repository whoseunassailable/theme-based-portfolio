import { Container } from "@mui/material";

import { NeoSmallTitle } from "../components/neo/SmallTitle";

import { NeoWorkExperience } from "../../work-experience/variants/NeoWorkExperience";
import { NeoProjects } from "../../projects/variants/NeoProjects";
import { NeoProjectsDetail } from "../../project-details/variants/NeoProjectsDetail";
import { NeoAboutMe } from "../../about-me/AboutMe";
import { NeoContactMe } from "../../contact-me/NeoContactMe";
import { NeoBigTitle } from "../components/neo/BigTitle";
import { NeoButtonSection } from "../components/neo/ButtonSection";
import { NeoCardGrid } from "../components/neo/CardGrid";
import { HomeNeoPageNavBar } from "../components/neo/HomePageNavBar";

export const NeoHome = () => {
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
      <NeoBigTitle title="Frontend Developer" typographyAorB={false} />
      <NeoSmallTitle />
      <NeoButtonSection />
      <NeoCardGrid></NeoCardGrid>
      <NeoWorkExperience></NeoWorkExperience>
      <NeoProjects></NeoProjects>
      <NeoProjectsDetail></NeoProjectsDetail>
      <NeoAboutMe></NeoAboutMe>
      <NeoContactMe></NeoContactMe>
    </Container>
  );
};

export default NeoHome;
