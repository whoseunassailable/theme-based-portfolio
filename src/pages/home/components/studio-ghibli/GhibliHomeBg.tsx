import { Box, Typography } from "@mui/material";
import ghibliHome from "../../../../assets/home_theme.png";
import {
  ghibliHomeHeroSubtitleTypography,
  ghibliHomeHeroTitleTypography,
  ghibliHomeScrollHintTypography,
} from "../../../../styles/ghibli-typography";

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
          backgroundImage: `url(${ghibliHome})`,
          backgroundSize: "100% 100%",
        }}
      >
        <Typography sx={{ ...ghibliHomeHeroTitleTypography, mt: "10vh" }}>
          Hi, I'm
        </Typography>
        <Typography sx={ghibliHomeHeroTitleTypography}>Rohan Bhande</Typography>
        <Typography sx={ghibliHomeHeroSubtitleTypography}>
          Full Stack Engineer, Dreamer, Storyteller
        </Typography>
        <Typography sx={ghibliHomeScrollHintTypography}>
          Scroll down to enter the story...
        </Typography>
      </Box>
    </Box>
  );
};
