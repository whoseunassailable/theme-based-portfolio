import { Box, Typography } from "@mui/material";
import { projects } from "../../../projects/constants/projectCard";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";
import { bebopProjectsDetailSectionMetaValue } from "../../../../styles/bebop-typography";

export const CowboyProjectInfo = () => {
  const { currentProject, detailProjects } = useProjectDetails();
  const currentProjectCard = projects.find(
    (project) => project.id === currentProject.id
  );
  const projectIndex = detailProjects.findIndex(
    (project) => project.id === currentProject.id
  );
  const caseId = `2071-09-${String(projectIndex + 1).padStart(3, "0")}`;
  const visibilityLabel =
    currentProject.repoPath?.includes("/company_projects/") ||
    currentProject.id === "fullheart-mindfulness"
      ? "CONFIDENTIAL"
      : "PUBLIC";

  return (
    <Box
      mt={"5vh"}
      border={`1px solid #F5F1EA`}
      minHeight={"55vh"}
      width={"min(60vw, 920px)"}
      maxWidth={"100%"}
      display="grid"
      gridTemplateColumns={`minmax(0, 1.5fr) minmax(0, 1fr)`}
      gridTemplateAreas={`"column-1 column-2"`}
      sx={{ placeSelf: "center" }}
    >
      <Box gridArea={"column-1"}>
        <Box border={`2vh solid #F5F1EA`} height={"100%"} pl={"2vw"} pt={"2vw"}>
          {visibilityLabel}
          <Box
            border={"1px solid #F5F1EA"}
            height={"94%"}
            display="grid"
            sx={{
              placeItems: "center",
              "& .MuiSvgIcon-root": {
                fontSize: { xs: "3.4rem", md: "4.4rem" },
                color: "#F5F1EA",
              },
            }}
          >
            {currentProjectCard?.icon}
          </Box>
        </Box>
      </Box>
      <Box
        gridArea={"column-2"}
        p={"5vh"}
        sx={{
          ...bebopProjectsDetailSectionMetaValue,
          display: "grid",
          alignContent: "start",
          gap: 2,
          overflow: "hidden",
          minWidth: 0,
        }}
      >
        {[
          ["CASE ID", caseId],
          ["TARGET", currentProject.name.toUpperCase()],
          ["REWARD", currentProject.category.toUpperCase()],
          ["STATUS", visibilityLabel],
          ["SUMMARY", currentProject.oneLiner],
        ].map(([label, value]) => (
          <Box key={label} sx={{ minWidth: 0 }}>
            <Typography
              sx={{
                ...bebopProjectsDetailSectionMetaValue,
                fontSize: "1.6vh",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                opacity: 0.8,
              }}
            >
              {label}
            </Typography>
            <Typography
              sx={{
                ...bebopProjectsDetailSectionMetaValue,
                fontSize: { xs: "1rem", md: "1.05rem" },
                lineHeight: 1.35,
                overflowWrap: "anywhere",
                wordBreak: "break-word",
                minWidth: 0,
                ...(label === "SUMMARY"
                  ? {
                      display: "-webkit-box",
                      WebkitLineClamp: 4,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }
                  : {}),
              }}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
