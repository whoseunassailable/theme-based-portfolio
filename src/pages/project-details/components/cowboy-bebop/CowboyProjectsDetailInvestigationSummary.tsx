import { Typography } from "@mui/material";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";
import { bebopProjectsDetailSectionBody } from "../../../../styles/bebop-typography";

export const CowboyProjectsDetailInvestigationSummary = () => {
  const { currentProject } = useProjectDetails();

  return (
    <Typography
      width={"60vw"}
      mb={"2vh"}
      sx={{
        ...bebopProjectsDetailSectionBody,
        placeSelf: "center",
        fontSize: "2.45vh",
        lineHeight: 1.55,
        wordSpacing: "0.12em",
      }}
    >
      {currentProject.problem} {currentProject.approach}
    </Typography>
  );
};
