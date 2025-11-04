import { Box, Typography } from "@mui/material";
import {
  bebopWorkExperience,
  bebopCase,
  bebopDivider,
  bebopMission,
  bebopDuration,
  bebopStatus,
  bebopOperationNotes,
} from "../../../../styles/bebop-typography";

interface BebopWorkExperienceProps {
  caseAndId: string;
  missionAndRole: string;
  duration: string;
  status: string;
  operationNotes: string;
}

export const BebopWorkExperience = ({
  caseAndId,
  missionAndRole,
  duration,
  status,
  operationNotes,
}: BebopWorkExperienceProps) => {
  return (
    <Box sx={bebopWorkExperience}>
      <Typography sx={bebopCase}>CASE : {caseAndId}</Typography>
      <Box sx={bebopDivider} />
      <Typography sx={bebopMission}>MISSION : {missionAndRole}</Typography>
      <Typography sx={bebopDuration}>DURATION : {duration}</Typography>
      <Typography sx={bebopStatus}>STATUS : {status}</Typography>
      <Typography sx={bebopOperationNotes}>
        OPERATION NOTES : <br /> {operationNotes}
      </Typography>
    </Box>
  );
};
