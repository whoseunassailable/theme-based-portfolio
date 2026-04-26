import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ghibliHome from "../../../../assets/home_theme.png";
import {
  ghibliHomeHeroButtonTypography,
  ghibliHomeHeroSubtitleTypography,
  ghibliHomeHeroTitleTypography,
  ghibliHomeScrollHintTypography,
} from "../../../../styles/ghibli-typography";

const ghibliButtonSx = {
  ...ghibliHomeHeroButtonTypography,
  backgroundColor: "rgba(222, 200, 160, 0.85)",
  border: "2px solid #b89a6a",
  borderRadius: "8px",
  px: 4,
  py: 1.2,
  "&:hover": {
    backgroundColor: "rgba(200, 175, 130, 0.95)",
  },
};

export const GhibliHomeBg = () => {
  const navigate = useNavigate();

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
          width: "100vw",
          aspectRatio: "12 / 9",
          backgroundImage: `url(${ghibliHome})`,
          backgroundSize: "100% 100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ ...ghibliHomeHeroTitleTypography, mt: "10vh" }}>
          Hi, I'm
        </Typography>
        <Typography sx={ghibliHomeHeroTitleTypography}>Rohan Bhande</Typography>
        <Typography sx={ghibliHomeHeroSubtitleTypography}>
          Full Stack Engineer, Dreamer, Storyteller
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            mt: "auto",
            mb: "12vh",
          }}
        >
          <Button sx={ghibliButtonSx} onClick={() => navigate("/work_experience")}>
            View My Work
          </Button>
          <Button sx={ghibliButtonSx} onClick={() => navigate("/about_me")}>
            About Me
          </Button>
        </Box>

        <Typography sx={{ ...ghibliHomeScrollHintTypography, mt: 0, mb: "4vh" }}>
          Scroll down to enter the story...
        </Typography>
      </Box>
    </Box>
  );
};
