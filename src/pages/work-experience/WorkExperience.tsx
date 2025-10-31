import { Container } from "@mui/material";
import { SectionHeading } from "./components/SectionHeading";
import { SectionSubHeading } from "./components/SectionSubHeading";
import { WorkExperienceTimeline } from "./components/WorkExperienceTimeline";

export const NeoWorkExperience = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ px: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <SectionHeading title={"Work Experience"} />
      <SectionSubHeading
        sub_title={
          "Crafting reliable, data-driven, and scalable solutions across software, mobile and data domains."
        }
      />
      <WorkExperienceTimeline></WorkExperienceTimeline>
    </Container>
  );
};
