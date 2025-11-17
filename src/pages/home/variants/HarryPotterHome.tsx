import { Box } from "@mui/material";
// import { EntryPage } from "../components/harry-potter/EntryPage";
// import { SpellsPage } from "../components/harry-potter/SpellsPage";
import GhostCursor from "../../../components/GhostCursor";
import { NavBarHarryPotter } from "../components/harry-potter/NavBarHarryPotter";
import { HarryPotterWorkExperience } from "../../work-experience/variants/HarryPotterWorkExperience";

export const HarryPotterHome = () => {
  return (
    <Box>
      {/* <EntryPage></EntryPage> */}
      {/* <SpellsPage></SpellsPage> */}
      <NavBarHarryPotter></NavBarHarryPotter>
      <HarryPotterWorkExperience></HarryPotterWorkExperience>
    </Box>
  );
};
