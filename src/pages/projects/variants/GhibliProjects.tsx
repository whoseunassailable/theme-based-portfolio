import { Box, Typography } from "@mui/material";
import ghibliProjectsTheme from "../../../assets/ghibli-projects-theme.png";
import ghibliWork from "../../../assets/ghibli-work-theme.png";

export const GhibliProjects = () => {
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
          backgroundImage: `url(${ghibliProjectsTheme})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography>My Work</Typography>
        <Typography>Each project, a chapter in my journey.</Typography>

        <Box
          sx={{
            height: "30vh",
            width: "10vw",
            position: "relative",
            backgroundImage: `url(${ghibliWork})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            overflow: "hidden",
          }}
        >
          cool
        </Box>
      </Box>
    </Box>
  );
};
