import { useThemeController } from "../theme/ThemeProviderWrapper";
import { NeoAboutMe } from "./about-me/variants/AboutMe";
import { CowboyBebopAboutMe } from "./about-me/variants/CowboyBebopAboutMe";
import { GhibliAboutMe } from "./about-me/variants/GhibliAboutMe";
import { HarryPotterAboutMe } from "./about-me/variants/HarryPotterAboutMe";

export const AboutMe = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <CowboyBebopAboutMe />;
  if (themeName === "Studio Ghibli") return <GhibliAboutMe />;
  if (themeName === "Harry Potter") return <HarryPotterAboutMe />;

  return <NeoAboutMe />;
};
