import { useThemeController } from "../theme/ThemeProviderWrapper";
import { HomeCowboyBebop } from "./home/variants/HomeCowboyBebop";
import HomeNeo from "./home/variants/HomeNeo";

export const Home = () => {
  const { themeName } = useThemeController();

  if (themeName === "Cowboy Bebop") return <HomeCowboyBebop />;
  if (themeName === "Studio Ghibli") return <HomeGhibli />;
  if (themeName === "Cyberpunk") {
  }

  return <HomeNeo />;
};

export default Home;
