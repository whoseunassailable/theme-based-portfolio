import { Box, Typography } from "@mui/material";
import ghibliWork from "../../../assets/ghibli-work-theme.png";
import ghibliWorkLeaflet from "../../../assets/ghibli-work-theme-leaflet-asset.png";
import ghibliWorkLeafBranch from "../../../assets/ghibli-work-theme-leaf-branch-asset.png";
import { GhibliCardContainer } from "../components/studio-ghibli/GhibliCardContainer";

export const GhibliWorkExperience = () => {
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
          backgroundImage: `url(${ghibliWork})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography>My Work</Typography>
        <Typography>Where I have worked over the years</Typography>
        <GhibliCardContainer />
      </Box>
    </Box>
  );
};
