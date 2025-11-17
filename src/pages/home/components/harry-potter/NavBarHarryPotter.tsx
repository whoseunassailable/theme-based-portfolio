import { Box, Typography } from "@mui/material";
import navbarHarryPotter from "../../../../assets/navbar_harry_potter.png";
import homePageBackground from "../../../../assets/home_page_background.png";
import { pageOptions } from "../../../../constants/pageOptions";
import {
  potterHomePageStylingSubtitle,
  potterHomePageStylingTitle,
} from "../../../../styles/potter-typography";
import homeButton from "../../../../assets/home-button.png";
import { ListOfElementsForNavBar } from "./ListOfElementsForNavbar";
// import { RandomFireBackground } from "./RandomFIreBackground";

export const NavBarHarryPotter = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homePageBackground})`,
        backgroundSize: "fit",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Random GIFs in the background */}
      {/* <RandomFireBackground count={7} /> */}

      <Box
        position="relative"
        component={"img"}
        width={"80vw"}
        height={"30vh"}
        src={navbarHarryPotter}
        sx={{ placeSelf: "center" }}
      />
      {pageOptions.map((nameOfPage) => (
        <ListOfElementsForNavBar key={nameOfPage} navbarElement={nameOfPage} />
      ))}
      <Typography sx={potterHomePageStylingTitle}>Rohan Bhande</Typography>
      <Typography sx={potterHomePageStylingSubtitle}>
        Full Stack Wizard
      </Typography>
      <Box
        component="img"
        height="35vh"
        width="40vh"
        src={homeButton}
        sx={{ placeSelf: "center" }}
      />
    </Box>
  );
};
