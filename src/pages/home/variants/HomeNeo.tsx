import { Container } from "@mui/material";

export const HomeNeo = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ p: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <HomePageNavBar></HomePageNavBar>
      <BigTitle title="I Build Experience As A" typographyAorB={true} />
      <BigTitle title="Frontend Developer" typographyAorB={false}></BigTitle>
      <SmallTitle></SmallTitle>
      <ButtonSection></ButtonSection>
      <CardGrid></CardGrid>
      <WorkExperience></WorkExperience>
      <Projects></Projects>
      <ProjectsDetail></ProjectsDetail>
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </Container>
  );
};

export default Home;
