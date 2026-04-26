import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, IconButton, Typography } from "@mui/material";
import ghibliProjectDetails from "../../../assets/ghibli-project-details-theme.png";
import { useProjectDetails } from "../../../context/ProjectDetailsContext";
import {
  ghibliProjectDetailsBodyTypography,
  ghibliProjectDetailsColumnHeadingTypography,
  ghibliProjectDetailsMetaLabelTypography,
  ghibliProjectDetailsMetaValueTypography,
  ghibliProjectDetailsSubsectionTitleTypography,
  ghibliProjectDetailsSubtitleTypography,
  ghibliProjectDetailsTitleTypography,
} from "../../../styles/ghibli-typography";
import { projects } from "../../projects/constants/projectCard";

const detailCardSx = {
  width: "100%",
  maxWidth: 920,
  backgroundColor: "rgba(255, 249, 234, 0.62)",
  borderRadius: "18px",
  border: "1px solid rgba(146, 120, 89, 0.18)",
  p: { xs: 2.8, md: 4 },
  boxShadow: "0 18px 34px rgba(119, 94, 58, 0.08)",
} as const;

export const GhibliProjectDetails = () => {
  const { currentProject, selectPreviousProject, selectNextProject } =
    useProjectDetails();
  const currentProjectCard = projects.find(
    (project) => project.id === currentProject.id
  );

  const projectMeta = [
    {
      label: "Category",
      value: currentProject.category,
    },
    {
      label: "Stack",
      value: currentProjectCard?.projectStack ?? "Product Build",
    },
    {
      label: "Source",
      value:
        currentProject.sourceStatus === "repo-verified"
          ? "Repo Verified"
          : "Resume Backed",
    },
  ];

  const challenges = currentProject.flowSteps.slice(0, 2).map((step) => ({
    title: step.title,
    detail: step.detail,
  }));

  const learnings = currentProject.architectureBlocks.slice(0, 2).map((block) => ({
    title: block.title,
    detail: block.detail,
  }));

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
          minHeight: "100vh",
          position: "relative",
          backgroundImage: `url(${ghibliProjectDetails})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 3, md: "8vw" },
          py: { xs: 7, md: "8vh" },
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            px: { xs: 1, md: 2 },
            pointerEvents: "none",
            zIndex: 2,
          }}
        >
          <IconButton
            aria-label="Previous project"
            onClick={selectPreviousProject}
            sx={{
              pointerEvents: "auto",
              width: { xs: 42, md: 48 },
              height: { xs: 42, md: 48 },
              backgroundColor: "rgba(250, 243, 225, 0.84)",
              border: "1px solid rgba(145, 119, 84, 0.28)",
              color: "#5a4435",
              "&:hover": {
                backgroundColor: "rgba(254, 248, 235, 0.96)",
              },
            }}
          >
            <ChevronLeftRoundedIcon />
          </IconButton>

          <IconButton
            aria-label="Next project"
            onClick={selectNextProject}
            sx={{
              pointerEvents: "auto",
              width: { xs: 42, md: 48 },
              height: { xs: 42, md: 48 },
              backgroundColor: "rgba(250, 243, 225, 0.84)",
              border: "1px solid rgba(145, 119, 84, 0.28)",
              color: "#5a4435",
              "&:hover": {
                backgroundColor: "rgba(254, 248, 235, 0.96)",
              },
            }}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Box>

        <Typography
          sx={{
            ...ghibliProjectDetailsTitleTypography,
            fontSize: "5vw",
            mb: 0.5,
          }}
        >
          {currentProject.name}
        </Typography>
        <Typography sx={{ ...ghibliProjectDetailsSubtitleTypography, mb: 2 }}>
          {currentProject.oneLiner}
        </Typography>

        <Typography
          sx={{
            ...ghibliProjectDetailsBodyTypography,
            textAlign: "center",
            maxWidth: "72%",
            mb: 3,
          }}
        >
          {currentProject.approach}
        </Typography>

        <Box
          sx={{
            display: "flex",
            gap: 4,
            mb: 4,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {projectMeta.map((meta) => (
            <Box key={meta.label} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography sx={ghibliProjectDetailsMetaLabelTypography}>
                {meta.label}
              </Typography>
              <Typography sx={ghibliProjectDetailsMetaValueTypography}>
                {meta.value}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box sx={{ ...detailCardSx, mb: 4 }}>
          <Typography sx={{ ...ghibliProjectDetailsSubsectionTitleTypography, mb: 2 }}>
            About
          </Typography>
          <Typography sx={ghibliProjectDetailsBodyTypography}>
            {currentProject.problem}
          </Typography>
        </Box>

        <Box sx={detailCardSx}>
          <Typography
            sx={{
              ...ghibliProjectDetailsSubsectionTitleTypography,
              textAlign: "center",
              mb: 3,
            }}
          >
            Challenges & Learnings
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
              gap: { xs: 2.2, md: 3 },
            }}
          >
            <Box
              sx={{
                backgroundColor: "rgba(255, 246, 228, 0.66)",
                borderRadius: "14px",
                p: { xs: 2, md: 2.4 },
              }}
            >
              <Typography
                sx={{
                  ...ghibliProjectDetailsColumnHeadingTypography,
                  color: "#9b5b2a",
                  mb: 1.2,
                }}
              >
                Challenges
              </Typography>
              {challenges.map((challenge) => (
                <Box key={challenge.title} sx={{ mb: 1.3 }}>
                  <Typography
                    sx={{
                      ...ghibliProjectDetailsMetaLabelTypography,
                      color: "#6a4d39",
                      mb: 0.2,
                    }}
                  >
                    {challenge.title}
                  </Typography>
                  <Typography sx={ghibliProjectDetailsBodyTypography}>
                    {challenge.detail}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box
              sx={{
                backgroundColor: "rgba(243, 249, 235, 0.64)",
                borderRadius: "14px",
                p: { xs: 2, md: 2.4 },
              }}
            >
              <Typography
                sx={{
                  ...ghibliProjectDetailsColumnHeadingTypography,
                  color: "#3f7a54",
                  mb: 1.2,
                }}
              >
                Learnings
              </Typography>
              {learnings.map((learning) => (
                <Box key={learning.title} sx={{ mb: 1.3 }}>
                  <Typography
                    sx={{
                      ...ghibliProjectDetailsMetaLabelTypography,
                      color: "#52644c",
                      mb: 0.2,
                    }}
                  >
                    {learning.title}
                  </Typography>
                  <Typography sx={ghibliProjectDetailsBodyTypography}>
                    {learning.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
