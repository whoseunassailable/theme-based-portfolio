import { Box } from "@mui/material";
import ghibliAboutMeTheme from "../../../assets/ghibli-about-me-theme.png";

export const GhibliAboutMe = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${ghibliAboutMeTheme})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      ></Box>
    </Box>
  );
};
