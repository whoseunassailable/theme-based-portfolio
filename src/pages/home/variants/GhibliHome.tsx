import { Box } from "@mui/material";
import { GhibliHomeBg } from "../components/studio-ghibli/GhibliHomeBg";
import { GhibliWorkExperience } from "../../work-experience/variants/GhibliWorkExperience";
import { GhibliProjects } from "../../projects/variants/GhibliProjects";
import { GhibliProjectDetails } from "../../project-details/variants/GhibliProjectDetails";
import { GhibliAboutMe } from "../../about-me/variants/GhibliAboutMe";
import { GhibliContactMe } from "../../contact-me/variants/GhibliContactMe";

export const GhibliHome = () => {
  return (
    <Box>
      <GhibliHomeBg></GhibliHomeBg>
      <GhibliWorkExperience></GhibliWorkExperience>
      <GhibliProjects></GhibliProjects>
      <GhibliProjectDetails></GhibliProjectDetails>
      <GhibliAboutMe></GhibliAboutMe>
      <GhibliContactMe></GhibliContactMe>
    </Box>
  );
};
