import { Box } from "@mui/material";
import { BebopWorkExperience } from "./BebopWorkExperience";
import { BebopConstants } from "../../../../constants/BebopConstants";

export const BebopTimeline = () => {
  return (
    <>
      {BebopConstants.MISSIONS.map((m, i) => (
        <Box
          height={"30vh"}
          width={"40vw"}
          border={`1px solid transparent`}
          borderRadius={"0.5vw"}
          mt={"4vh"}
          boxShadow={"0 10px 30px rgba(0,0,0,0.25)"}
          bgcolor="transparent"
        >
          <BebopWorkExperience
            key={i}
            caseAndId={m.caseId}
            missionAndRole={m.mission}
            duration={m.duration}
            status={m.status}
            operationNotes={m.operationNotes.join(" ")}
          />
        </Box>
      ))}
    </>
  );
};
