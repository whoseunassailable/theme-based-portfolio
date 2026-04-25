import { Box, Typography } from "@mui/material";
import { useProjectDetails } from "../../../../context/ProjectDetailsContext";
import {
  bebopProjectsDetailSectionBody,
  bebopProjectsDetailSectionHeader,
  bebopProjectsDetailSectionMetaLabel,
} from "../../../../styles/bebop-typography";

export const CowboyProjectDetailsInvestigationNotes = () => {
  const { currentProject } = useProjectDetails();
  const noteLines = [
    currentProject.flowSteps[0]
      ? `Entry point: ${currentProject.flowSteps[0].title}`
      : undefined,
    currentProject.flowSteps[1]
      ? `Core move: ${currentProject.flowSteps[1].title}`
      : undefined,
    currentProject.metrics[0]
      ? `${currentProject.metrics[0].label}: ${currentProject.metrics[0].value}`
      : undefined,
  ].filter(Boolean) as string[];

  return (
    <Box mt={"4vh"} ml={"10vw"}>
      <Typography sx={bebopProjectsDetailSectionHeader}>
        INVESTIGATION NOTES
      </Typography>
      <Box mt={"1.25vh"} display="grid" gap={"0.7vh"}>
        {noteLines.map((note) => (
          <Box
            key={note}
            display="flex"
            alignItems="baseline"
            gap={"0.9vw"}
            sx={{ maxWidth: "60vw" }}
          >
            <Typography
              sx={{
                ...bebopProjectsDetailSectionMetaLabel,
                color: "#C74435",
                minWidth: "fit-content",
              }}
            >
              //
            </Typography>
            <Typography
              sx={{
                ...bebopProjectsDetailSectionBody,
                fontSize: "2.1vh",
                lineHeight: 1.35,
                wordSpacing: "0.1em",
              }}
            >
              {note}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
