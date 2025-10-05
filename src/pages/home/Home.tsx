import { HomePageBody } from "./components/HomePageBody";
import { HomePageNavBar } from "./components/HomePageNavBar";
import { Container } from "@mui/material";
export const Home = () => {
  return (
    <Container maxWidth={false} sx={{ width: "100%" }} disableGutters>
      <HomePageNavBar></HomePageNavBar>
      <HomePageBody></HomePageBody>
    </Container>
  );
};

export default Home;
