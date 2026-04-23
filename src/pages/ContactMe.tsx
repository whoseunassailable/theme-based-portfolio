import { useThemeController } from "../theme/ThemeProviderWrapper";
import { NeoContactMe } from "./contact-me/NeoContactMe";
import { CowboyBebopContactMe } from "./contact-me/CowboyBebopContactMe";
import { GhibliContactMe } from "./contact-me/variants/GhibliContactMe";
import { HarryPotterContactMe } from "./contact-me/variants/HarryPotterContactMe";

export const ContactMe = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <CowboyBebopContactMe />;
  if (themeName === "Studio Ghibli") return <GhibliContactMe />;
  if (themeName === "Harry Potter") return <HarryPotterContactMe />;

  return <NeoContactMe />;
};
