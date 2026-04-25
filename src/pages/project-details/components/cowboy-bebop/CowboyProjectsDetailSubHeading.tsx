import { Typography } from "@mui/material";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";
import { bebopProjectsDetailSectionCaseSubhead } from "../../../../styles/bebop-typography";

export const CowboyProjectsDetailSubHeading = () => {
  const { currentProject, detailProjects } = useProjectDetails();
  const projectIndex = detailProjects.findIndex(
    (project) => project.id === currentProject.id
  );
  const caseNumber = String(projectIndex + 1).padStart(3, "0");

  return (
    <Typography sx={bebopProjectsDetailSectionCaseSubhead}>
      ISS PBR DATABASE // ENTRY 09.17.{caseNumber}
    </Typography>
  );
};
