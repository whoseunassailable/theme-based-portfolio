import { Typography } from "@mui/material";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";
import { bebopProjectsDetailSectionCaseTitle } from "../../../../styles/bebop-typography";

export const CowboyProjectsDetailHeading = () => {
  const { currentProject } = useProjectDetails();

  return (
    <Typography sx={bebopProjectsDetailSectionCaseTitle}>
      CASE FILE: {currentProject.name.toUpperCase()}
    </Typography>
  );
};
