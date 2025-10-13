import { Container } from "@mui/material";
import { SectionHeading } from "./components/SectionHeading";

export const WorkExperience = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ px: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <SectionHeading></SectionHeading>
      <SectionSubHeading></SectionSubHeading>
    </Container>
  );
};
