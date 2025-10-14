import { Container } from "@mui/material";
import { HomePageNavBar } from "./components/HomePageNavBar";
import { BigTitle } from "./components/BigTitle";
import { SmallTitle } from "./components/SmallTitle";
import { ButtonSection } from "./components/ButtonSection";
import { CardGrid } from "./components/CardGrid";
import { WorkExperience } from "../work-experience/WorkExperience";
import { Projects } from "../projects/Projects";

export const Home = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ px: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <HomePageNavBar></HomePageNavBar>
      <BigTitle title="I Build Experience As A" typographyAorB={true} />
      <BigTitle title="Frontend Developer" typographyAorB={false}></BigTitle>
      <SmallTitle></SmallTitle>
      <ButtonSection></ButtonSection>
      <CardGrid></CardGrid>
      <WorkExperience></WorkExperience>
      <Projects></Projects>
    </Container>
  );
};

export default Home;
