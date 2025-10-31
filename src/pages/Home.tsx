import { useThemeController } from "../theme/ThemeProviderWrapper";
import { CowboyBebopHome } from "./home/variants/CowboyBebopHome";
import NeoHome from "./home/variants/NeoHome";

export const Home = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <CowboyBebopHome />;
  if (themeName === "Studio Ghibli") return <HomeGhibli />;
  if (themeName === "Cyberpunk") {
  }

  return <NeoHome />;
};

export default Home;
