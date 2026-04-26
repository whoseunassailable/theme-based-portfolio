import { Box } from "@mui/material";
import { useState } from "react";
import { EntryPage } from "../components/harry-potter/EntryPage";
import { SpellsPage } from "../components/harry-potter/SpellsPage";
import { NavBarHarryPotter } from "../components/harry-potter/NavBarHarryPotter";
import { HarryPotterFloatingThemeButton } from "../components/harry-potter/HarryPotterFloatingThemeButton";
import { HarryPotterWorkExperience } from "../../work-experience/variants/HarryPotterWorkExperience";
import { PotterProjects } from "../../projects/variants/PotterProjects";
import { HarryPotterProjectsDetail } from "../../project-details/variants/HarryPotterProjectsDetail";
import { HarryPotterAboutMe } from "../../about-me/variants/HarryPotterAboutMe";
import { HarryPotterContactMe } from "../../contact-me/variants/HarryPotterContactMe";

export const HarryPotterHome = () => {
  const [showExplicitHint, setShowExplicitHint] = useState(false);
  const [entryStep, setEntryStep] = useState<"entry" | "spell" | "portfolio">(
    "entry"
  );

  if (entryStep === "entry") {
    return (
      <EntryPage
        onWizardSelect={() => {
          setShowExplicitHint(false);
          setEntryStep("spell");
        }}
        onMuggleSelect={() => {
          setShowExplicitHint(true);
          setEntryStep("spell");
        }}
      />
    );
  }

  if (entryStep === "spell") {
    return (
      <SpellsPage
        onUnlock={() => setEntryStep("portfolio")}
        onBack={() => setEntryStep("entry")}
        showExplicitHint={showExplicitHint}
      />
    );
  }

  const sectionShellSx = {
    width: "min(1440px, 100vw)",
    mx: "auto",
    backgroundColor: "#000",
  } as const;

  return (
    <Box component="main" id="main" sx={{ backgroundColor: "#000" }}>
      <HarryPotterFloatingThemeButton />
      <NavBarHarryPotter />
      <Box id="potter-work-section" sx={sectionShellSx}>
        <HarryPotterWorkExperience />
      </Box>
      <Box id="potter-projects-section" sx={sectionShellSx}>
        <PotterProjects />
      </Box>
      <Box id="potter-project-details-section" sx={sectionShellSx}>
        <HarryPotterProjectsDetail />
      </Box>
      <Box id="potter-about-section" sx={sectionShellSx}>
        <HarryPotterAboutMe />
      </Box>
      <Box id="potter-contact-section" sx={sectionShellSx}>
        <HarryPotterContactMe />
      </Box>
    </Box>
  );
};
