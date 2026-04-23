import { useThemeController } from "../theme/ThemeProviderWrapper";
import { NeoProjects } from "./projects/variants/NeoProjects";
import { BebopProjects } from "./projects/variants/BebopProjects";
import { GhibliProjects } from "./projects/variants/GhibliProjects";
import { PotterProjects } from "./projects/variants/PotterProjects";

export const Projects = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <BebopProjects />;
  if (themeName === "Studio Ghibli") return <GhibliProjects />;
  if (themeName === "Harry Potter") return <PotterProjects />;

  return <NeoProjects />;
};
