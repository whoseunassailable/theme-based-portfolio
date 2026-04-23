import { Box, Typography } from "@mui/material";
import ghibliProjectsBox from "../../../../assets/ghibli_projects_box.png";
import {
  ghibliProjectCardTitleTypography,
  ghibliProjectsCardSubtitleTypography,
  ghibliProjectsCardTagTypography,
} from "../../../../styles/ghibli-typography";
import { projects } from "../../constants/projectCard";

export default function ProjectsDialogBox() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        mt: "6vh",
        gap: "3vw",
        px: "5vw",
      }}
    >
      {projects.map((project) => (
        <Box
          key={project.id}
          sx={{
            backgroundImage: `url(${ghibliProjectsBox})`,
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            width: "28%",
            minWidth: 240,
            aspectRatio: "1",
            p: "3vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            cursor: "pointer",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
            },
          }}
        >
          <Box>
            <Typography sx={ghibliProjectCardTitleTypography}>
              {project.nameOfProject}
            </Typography>
            <Typography sx={{ ...ghibliProjectsCardSubtitleTypography, mt: 1 }}>
              {project.shortSummary}
            </Typography>
          </Box>
          <Typography sx={ghibliProjectsCardTagTypography}>
            {project.projectStack}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
