import { Box, Button, Typography } from "@mui/material";
import { projects } from "../../../projects/constants/projectCard";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";

export const CowboyProjectDetailsLink = () => {
  const { currentProject } = useProjectDetails();
  const currentProjectCard = projects.find(
    (project) => project.id === currentProject.id
  );
  const derivedGithubUrl =
    currentProject.sourceStatus === "repo-verified" &&
    currentProject.repoPath &&
    !currentProject.repoPath.includes("/company_projects/")
      ? `https://github.com/whoseunassailable/${currentProject.repoPath.split("/").filter(Boolean).pop()}`
      : undefined;
  const targetUrl = currentProjectCard?.externalUrl ?? derivedGithubUrl;

  return (
    <Box
      my="2vh"
      display="flex"
      justifyContent="center"
    >
      <Button
        variant="outlined"
        color="primary"
        component={targetUrl ? "a" : "button"}
        href={targetUrl}
        target={targetUrl ? "_blank" : undefined}
        rel={targetUrl ? "noopener noreferrer" : undefined}
        disabled={!targetUrl}
        sx={{
          minWidth: { xs: "16rem", md: "20rem" },
          height: "8vh",
          borderRadius: "16px",
        }}
      >
        <Typography fontSize={"3vh"} color="#C74435">
          VIEW PROJECT
        </Typography>
      </Button>
    </Box>
  );
};
