import { Container } from "@mui/material";
import { CowboyBebopNavbar } from "../components/cowboy-bebop/CowboyBebopNavbar";
import { MainContainer } from "../components/cowboy-bebop/MainContainer";

export const CowboyBebopHome = () => {
  return (
    <Container
      component="main"
      id="main"
      maxWidth={false}
      disableGutters
      sx={{ p: { sm: 2, md: 3, lg: 4, xl: 5 } }}
    >
      <CowboyBebopNavbar></CowboyBebopNavbar>
      <MainContainer></MainContainer>
    </Container>
  );
};
