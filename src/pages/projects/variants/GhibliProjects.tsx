import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ghibliProjectsTheme from "../../../assets/ghibli-projects-theme.png";
import { SelectStack } from "../components/studio-ghibli/SelectStack";
import {
  ghibliProjectSectionSubtitleTypography,
  ghibliProjectSectionTitleTypography,
} from "../../../styles/ghibli-typography";
import ProjectsDialogBox from "../components/studio-ghibli/ProjectsDialogBox";

export const GhibliProjects = () => {
  const [selectedStack, setSelectedStack] = useState("All");

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
          position: "relative",
          backgroundImage: `url(${ghibliProjectsTheme})`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          pt: { xs: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            ...ghibliProjectSectionTitleTypography,
            mt: { xs: 1.5, md: 2 },
          }}
        >
          My Projects
        </Typography>
        <Typography
          sx={{
            ...ghibliProjectSectionSubtitleTypography,
            textAlign: "center",
            maxWidth: 760,
            mx: "auto",
            mt: 0.5,
            px: 2,
            fontSize: { xs: "0.92rem", md: "1.06rem" },
          }}
        >
          Each project is a different chapter, from mobile products and data
          systems to operational tools and experimental builds.
        </Typography>

        <SelectStack
          selectedStack={selectedStack}
          onSelectStack={setSelectedStack}
        />

        <ProjectsDialogBox selectedStack={selectedStack} />
      </Box>
    </Box>
  );
};
