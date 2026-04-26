import ChevronLeftRoundedIcon from "@mui/icons-material/ChevronLeftRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import { Box, Button, IconButton, Typography } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import ghibliProjectsBox from "../../../../assets/ghibli_projects_box.png";
import { projectKnowledge } from "../../../../content/portfolioKnowledge";
import {
  ghibliProjectCardTitleTypography,
  ghibliProjectsCardSubtitleTypography,
  ghibliProjectsCardTagTypography,
} from "../../../../styles/ghibli-typography";
import { projects } from "../../constants/projectCard";

type Props = {
  selectedStack: string;
};

export default function ProjectsDialogBox({ selectedStack }: Props) {
  const pageSize = 6;
  const [pageIndex, setPageIndex] = useState(0);
  const projectKnowledgeById = useMemo(
    () => new Map(projectKnowledge.map((project) => [project.id, project])),
    []
  );

  const filteredProjects = useMemo(
    () =>
      selectedStack === "All"
        ? projects
        : projects.filter((project) => project.categories.includes(selectedStack)),
    [selectedStack]
  );

  const pages = useMemo(() => {
    const chunks = [];

    for (let index = 0; index < filteredProjects.length; index += pageSize) {
      chunks.push(filteredProjects.slice(index, index + pageSize));
    }

    return chunks;
  }, [filteredProjects]);

  useEffect(() => {
    setPageIndex(0);
  }, [selectedStack]);

  const currentProjects = pages[pageIndex] ?? [];
  const hasPreviousPage = pageIndex > 0;
  const hasNextPage = pageIndex < pages.length - 1;

  return (
    <Box
      sx={{
        width: "100%",
        mt: { xs: 2.4, md: 3.2 },
        px: { xs: 2.5, md: 7.5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(2, minmax(0, 1fr))",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: { xs: 1.5, md: 1.8 },
        }}
      >
        {currentProjects.map((project) => (
          (() => {
            const projectDetails = projectKnowledgeById.get(project.id);
            const derivedGithubUrl =
              projectDetails?.sourceStatus === "repo-verified" &&
              projectDetails.repoPath &&
              !projectDetails.repoPath.includes("/company_projects/")
                ? `https://github.com/whoseunassailable/${projectDetails.repoPath
                    .split("/")
                    .filter(Boolean)
                    .pop()}`
                : undefined;
            const targetUrl = project.externalUrl ?? derivedGithubUrl;

            return (
              <Box
                key={project.id}
                sx={{
                  backgroundImage: `url(${ghibliProjectsBox})`,
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  minHeight: { xs: 186, md: 220 },
                  p: { xs: 2.1, md: 2.35 },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  transition: "transform 220ms ease",
                  "&:hover": {
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      ...ghibliProjectsCardTagTypography,
                      fontSize: { xs: "0.64rem", md: "0.74rem" },
                      color: "#7b6249",
                      letterSpacing: "0.1em",
                    }}
                  >
                    {project.projectStack}
                  </Typography>
                  <Typography
                    sx={{
                      ...ghibliProjectCardTitleTypography,
                      mt: 0.7,
                      fontSize: { xs: "0.94rem", md: "1.12rem" },
                      lineHeight: 1.15,
                    }}
                  >
                    {project.nameOfProject}
                  </Typography>
                  <Typography
                    sx={{
                      ...ghibliProjectsCardSubtitleTypography,
                      mt: 0.7,
                      fontSize: { xs: "0.74rem", md: "0.84rem" },
                      lineHeight: 1.36,
                      display: "-webkit-box",
                      WebkitLineClamp: { xs: 3, md: 4 },
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {project.shortSummary}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    mt: 1.2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 1,
                  }}
                >
                  <Typography
                    sx={{
                      ...ghibliProjectsCardTagTypography,
                      color: "rgba(82, 62, 49, 0.8)",
                      fontSize: { xs: "0.62rem", md: "0.72rem" },
                    }}
                  >
                    {project.isActive ? "Active Project" : "Completed Project"}
                  </Typography>
                  <Button
                    component={targetUrl ? "a" : "button"}
                    href={targetUrl}
                    target={targetUrl ? "_blank" : undefined}
                    rel={targetUrl ? "noopener noreferrer" : undefined}
                    disabled={!targetUrl}
                    disableRipple
                    sx={{
                      minWidth: 0,
                      px: { xs: 1.1, md: 1.35 },
                      py: 0.45,
                      borderRadius: "999px",
                      border: "1px solid rgba(143, 111, 74, 0.52)",
                      backgroundColor: "rgba(248, 240, 220, 0.84)",
                      color: "#5a4435",
                      fontFamily: "'Crimson Text', 'Georgia', serif",
                      fontSize: { xs: "0.68rem", md: "0.76rem" },
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      "&:hover": {
                        backgroundColor: "rgba(252, 245, 228, 0.96)",
                      },
                      "&.Mui-disabled": {
                        color: "rgba(90, 68, 53, 0.42)",
                        borderColor: "rgba(143, 111, 74, 0.26)",
                        backgroundColor: "rgba(248, 240, 220, 0.5)",
                      },
                    }}
                  >
                    View Project
                  </Button>
                </Box>
              </Box>
            );
          })()
        ))}
      </Box>

      {pages.length > 1 && (
        <Box
          sx={{
            mt: { xs: 1.2, md: 1.5 },
            display: "flex",
            alignItems: "center",
            gap: 1.2,
          }}
        >
          <IconButton
            onClick={() => setPageIndex((current) => Math.max(current - 1, 0))}
            disabled={!hasPreviousPage}
            sx={{
              width: { xs: 40, md: 46 },
              height: { xs: 40, md: 46 },
              backgroundColor: "rgba(246, 237, 218, 0.82)",
              border: "1px solid rgba(145, 119, 84, 0.38)",
              color: "#5d4738",
              "&:hover": {
                backgroundColor: "rgba(250, 243, 228, 0.94)",
              },
              "&.Mui-disabled": {
                backgroundColor: "rgba(246, 237, 218, 0.42)",
                color: "rgba(93, 71, 56, 0.32)",
              },
            }}
          >
            <ChevronLeftRoundedIcon />
          </IconButton>

          <Typography
            sx={{
              ...ghibliProjectsCardTagTypography,
              color: "#5d4738",
              fontSize: { xs: "0.72rem", md: "0.8rem" },
            }}
          >
            Page {pageIndex + 1} of {pages.length}
          </Typography>

          <IconButton
            onClick={() =>
              setPageIndex((current) => Math.min(current + 1, pages.length - 1))
            }
            disabled={!hasNextPage}
            sx={{
              width: { xs: 40, md: 46 },
              height: { xs: 40, md: 46 },
              backgroundColor: "rgba(246, 237, 218, 0.82)",
              border: "1px solid rgba(145, 119, 84, 0.38)",
              color: "#5d4738",
              "&:hover": {
                backgroundColor: "rgba(250, 243, 228, 0.94)",
              },
              "&.Mui-disabled": {
                backgroundColor: "rgba(246, 237, 218, 0.42)",
                color: "rgba(93, 71, 56, 0.32)",
              },
            }}
          >
            <ChevronRightRoundedIcon />
          </IconButton>
        </Box>
      )}
    </Box>
  );
}
