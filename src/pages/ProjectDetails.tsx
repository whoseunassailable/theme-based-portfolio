import { useThemeController } from "../theme/ThemeProviderWrapper";
import { NeoProjectsDetail } from "./project-details/variants/NeoProjectsDetail";
import { CowboyProjectsDetail } from "./project-details/variants/CowboyProjectsDetail";
import { GhibliProjectDetails } from "./project-details/variants/GhibliProjectDetails";
import { HarryPotterProjectsDetail } from "./project-details/variants/HarryPotterProjectsDetail";

export const ProjectDetails = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <CowboyProjectsDetail />;
  if (themeName === "Studio Ghibli") return <GhibliProjectDetails />;
  if (themeName === "Harry Potter") return <HarryPotterProjectsDetail />;

  return <NeoProjectsDetail />;
};
