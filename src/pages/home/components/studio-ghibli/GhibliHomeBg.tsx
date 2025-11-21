import { Box, Typography } from "@mui/material";
import ghibliHome from "../../../../assets/home_theme.png";

export const GhibliHomeBg = () => {
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
          backgroundImage: `url(${ghibliHome})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography>
          Hi, I'm <br /> Rohan Bhande
        </Typography>
        <Typography>Full Stack Engineer, Dreamer, Storyteller</Typography>
      </Box>
    </Box>
  );
};
