import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { DisplayEducationAndWorkTimeline } from "./DisplayEducationAndWorkTimeline";
import { TimelineAttributes } from "../constants/TimelineAttributes";
export const TimelineAndFunNotes = () => {
  return (
    <Box height={"40vh"} width={"20vw"} ml={"2.5vw"}>
      <fieldset
        style={{
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          borderRadius: "8px",
          padding: "1rem",
        }}
      >
        <legend style={{ padding: "0 8px", fontWeight: "bold" }}>
          Timeline
        </legend>
        {TimelineAttributes.map((nameAndTitle) => (
          <DisplayEducationAndWorkTimeline
            year={nameAndTitle.year}
            title={nameAndTitle.title}
          />
        ))}
      </fieldset>
    </Box>
  );
};
