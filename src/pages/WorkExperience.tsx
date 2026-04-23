import { useThemeController } from "../theme/ThemeProviderWrapper";
import { NeoWorkExperience } from "./work-experience/variants/NeoWorkExperience";
import { BebopWorkExperience } from "./work-experience/variants/BebopWorkExperience";
import { GhibliWorkExperience } from "./work-experience/variants/GhibliWorkExperience";
import { HarryPotterWorkExperience } from "./work-experience/variants/HarryPotterWorkExperience";

export const WorkExperience = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <BebopWorkExperience />;
  if (themeName === "Studio Ghibli") return <GhibliWorkExperience />;
  if (themeName === "Harry Potter") return <HarryPotterWorkExperience />;

  return <NeoWorkExperience />;
};
