import { Box } from "@mui/material";
// import { EntryPage } from "../components/harry-potter/EntryPage";
// import { SpellsPage } from "../components/harry-potter/SpellsPage";
// import GhostCursor from "../../../components/GhostCursor";
import { NavBarHarryPotter } from "../components/harry-potter/NavBarHarryPotter";
import { HarryPotterWorkExperience } from "../../work-experience/variants/HarryPotterWorkExperience";
import { PotterProjects } from "../../projects/variants/PotterProjects";
import { HarryPotterProjectsDetail } from "../../project-details/variants/HarryPotterProjectsDetail";
import { HarryPotterAboutMe } from "../../about-me/variants/HarryPotterAboutMe";
import { HarryPotterContactMe } from "../../contact-me/variants/HarryPotterContactMe";
import { MuiSelectTheme } from "../../../components/MuiSelectTheme";

export const HarryPotterHome = () => {
  return (
    <Box>
      {/* <EntryPage></EntryPage> */}
      {/* <SpellsPage></SpellsPage> */}
      <NavBarHarryPotter></NavBarHarryPotter>
      <Box sx={{ gridArea: "theme", display: "flex" }}>
        <MuiSelectTheme />
      </Box>
      <HarryPotterWorkExperience></HarryPotterWorkExperience>
      <PotterProjects></PotterProjects>
      <HarryPotterProjectsDetail></HarryPotterProjectsDetail>
      <HarryPotterAboutMe></HarryPotterAboutMe>
      <HarryPotterContactMe></HarryPotterContactMe>
    </Box>
  );
};
