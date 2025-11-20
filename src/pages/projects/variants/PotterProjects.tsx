import { Box, Typography } from "@mui/material";
import projectsBasePage from "../../../assets/projects-base-page.jpeg";
import harryPotterProjectsContainer from "../../../assets/harry_potter_projects_container.png";
import viewSpellButton from "../../../assets/view_spell_transparent.png";

import {
  potterProjectsPageStylingContainerHeading,
  potterProjectsPageStylingContainerSubHeading,
  potterProjectsPageStylingSectionHeading,
  potterProjectsPageStylingSubtitle,
  potterProjectsPageStylingTitle,
} from "../../../styles/potter-typography";

export const PotterProjects = () => {
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
          width: "125vw",
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${projectsBasePage})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography mt={"30vh"} sx={potterProjectsPageStylingTitle}>
          Grimoire of <br />
          Enchanted Projects
        </Typography>
        <Typography sx={potterProjectsPageStylingSubtitle}>
          A collections of spells I have case in code -- <br /> from fluttering
          charms to data divinations.
        </Typography>
        <Box
          sx={{
            px: "20vw",
            display: "grid",
            gridTemplateAreas: `"line-1 typo line-2"`,
            gridTemplateColumns: "1fr auto 1fr",
            columnGap: "2vw",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              gridArea: "line-1",
              borderBottom: "1px solid brown",
              height: 0,
            }}
          />
          <Typography
            sx={{
              ...potterProjectsPageStylingSectionHeading,
              gridArea: "typo",
              textTransform: "uppercase",
              letterSpacing: 4,
            }}
          >
            Project Grimoires
          </Typography>
          <Box
            sx={{
              gridArea: "line-2",
              borderBottom: "1px solid brown",
              height: 0,
            }}
          />
        </Box>
        <Box
          sx={{
            height: "40vh",
            width: "22.5vw",
            backgroundImage: `url(${harryPotterProjectsContainer})`,
            backgroundSize: "100% 100%",
            justifySelf: "center",
          }}
        >
          <Typography sx={potterProjectsPageStylingContainerHeading}>
            Project Name
          </Typography>
          <Typography
            justifySelf={"center"}
            sx={potterProjectsPageStylingContainerSubHeading}
          >
            Project Type
          </Typography>
          <Box
            component={"img"}
            src={viewSpellButton}
            height={"15%"}
            justifySelf={"center"}
            sx={{ mt: "10vh" }}
          />
        </Box>
      </Box>
    </Box>
  );
};
