import { useThemeController } from "../theme/ThemeProviderWrapper";
import { CowboyBebopHome } from "./home/variants/CowboyBebopHome";
import { GhibliHome } from "./home/variants/GhibliHome";
import { HarryPotterHome } from "./home/variants/HarryPotterHome";
import NeoHome from "./home/variants/NeoHome";
import { PokemonHome } from "./home/variants/PokemonHome";
import { RenaissanceHome } from "./home/variants/RenaissanceHome";

export const Home = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <CowboyBebopHome />;
  if (themeName === "Studio Ghibli") return <GhibliHome />;
  if (themeName === "Renaissance") return <RenaissanceHome />;
  if (themeName === "Harry Potter") return <HarryPotterHome />;
  if (themeName === "Pokemon") return <PokemonHome />;

  return <NeoHome />;
};

export default Home;
