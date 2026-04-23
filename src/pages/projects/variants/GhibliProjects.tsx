import { Box, Typography } from "@mui/material";
import ghibliProjectsTheme from "../../../assets/ghibli-projects-theme.png";
import { SelectStack } from "../components/studio-ghibli/SelectStack";
import {
  ghibliProjectSectionSubtitleTypography,
  ghibliProjectSectionTitleTypography,
} from "../../../styles/ghibli-typography";
import ProjectsDialogBox from "../components/studio-ghibli/ProjectsDialogBox";

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
        <Typography sx={ghibliProjectSectionTitleTypography}>
          My Projects
        </Typography>
        <Typography sx={ghibliProjectSectionSubtitleTypography}>
          Each project, a chapter in my journey.
        </Typography>
        <SelectStack />
        <ProjectsDialogBox />
      </Box>
    </Box>
  );
};
