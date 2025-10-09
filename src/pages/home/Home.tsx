import { Container } from "@mui/material";
import { HomePageNavBar } from "./components/HomePageNavBar";

export const Home = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ px: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <HomePageNavBar></HomePageNavBar>
    </Container>
  );
};

export default Home;
