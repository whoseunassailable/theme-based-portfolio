import { Box, Typography } from "@mui/material";
import navbarHarryPotter from "../../../../assets/navbar_harry_potter.png";
import homePageBackground from "../../../../assets/home_page_background.png";
import { pageOptions } from "../../../../constants/pageOptions";
import {
  potterHomePageStylingSubtitle,
  potterHomePageStylingTitle,
} from "../../../../styles/potter-typography";
import homeButton from "../../../../assets/home-button.png";

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
        component={"img"}
        height={"35vh"}
        width={"40vh"}
        src={homeButton}
        sx={{ placeSelf: "center" }}
      />
    </Box>
  );
};

interface ListOfElementsForNavBarProps {
  navbarElement: string;
}

export const ListOfElementsForNavBar = ({
  navbarElement,
}: ListOfElementsForNavBarProps) => {
  return (
    <Typography
      sx={{
        position: "absolute",
        top: "13.5vh",
        left: "50%",
        transform: "translateX(-50%)",
        color: "white",
        fontWeight: 500,
      }}
    >
      {navbarElement}
    </Typography>
  );
};
