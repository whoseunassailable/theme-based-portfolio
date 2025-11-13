import { Box } from "@mui/material";
import { BebopProjectContainer } from "./BebopProjectContainer";
import { projects } from "../../../constants/projectCard";

interface BebopProjectsContainerProps {
  gridName: string;
}

export const BebopProjectsContainer = ({
  gridName,
}: BebopProjectsContainerProps) => {
  return (
    <Box
      display={"grid"}
      gridTemplateColumns="repeat(auto-fit, minmax(20vw, 1fr))"
      gridArea={gridName}
    >
      {projects.map((project) => (
        <BebopProjectContainer
          key={project.id}
          name={project.nameOfProject}
          stack={project.projectStack}
          // icon={project.icon}
        />
      ))}
    </Box>
  );
};
