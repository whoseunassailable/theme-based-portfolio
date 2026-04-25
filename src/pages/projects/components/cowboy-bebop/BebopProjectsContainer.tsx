import { Box } from "@mui/material";
import { useMemo } from "react";
import { BebopProjectContainer } from "./BebopProjectContainer";
import { projects } from "../../constants/projectCard";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";

interface BebopProjectsContainerProps {
  gridName: string;
  selectedCategory: string;
}

export const BebopProjectsContainer = ({
  gridName,
  selectedCategory,
}: BebopProjectsContainerProps) => {
  const { selectProject } = useProjectDetails();
  const filteredProjects =
    useMemo(
      () =>
        selectedCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.categories.includes(selectedCategory)
        ),
      [selectedCategory]
    );

  return (
    <Box gridArea={gridName} mt={"8vh"}>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={{ xs: 2.5, md: 3 }}
        sx={{
          alignItems: "stretch",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {filteredProjects.map((project) => (
          <BebopProjectContainer
            key={project.id}
            name={project.nameOfProject}
            stack={project.projectStack}
            icon={project.icon}
            isActive={project.isActive ?? false}
            onSelect={() => {
              if (!project.detailEnabled) return;
              selectProject(project.id);
              document
                .getElementById("bebop-project-details-section")
                ?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
          />
        ))}
      </Box>
    </Box>
  );
};
