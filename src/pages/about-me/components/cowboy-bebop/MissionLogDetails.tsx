import { Box, Typography } from "@mui/material";
import { TimelineAttributes } from "../../../../constants/TimelineAttributes";
import {
  cowboyBebopAboutMeMissionEntry,
  cowboyBebopAboutMeCrewReferencesTitle,
  cowboyBebopAboutMeQuoteText,
  cowboyBebopAboutMeQuoteAttribution,
} from "../../../../styles/bebop-typography";

export const MissionLogDetails = () => {
  return (
    <Box
      display={"grid"}
      gridTemplateAreas={`"column-1 column-2"`}
      gridTemplateColumns={"1fr 1fr"}
      rowGap={"2vw"}
    >
      <Box
        gridArea={"column-1"}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1.25vw",
        }}
      >
        {TimelineAttributes.map((item) => (
          <Typography
            key={`${item.year}-${item.title}`}
            sx={{
              ...cowboyBebopAboutMeMissionEntry,
              maxWidth: "32ch",
            }}
          >
            {item.year}
            <br />
            {item.title}
          </Typography>
        ))}
      </Box>
      <Box p={"2vw"} border={`1px solid #C2B096`} gridArea={"column-2"}>
        <Typography sx={cowboyBebopAboutMeCrewReferencesTitle}>
          CREW REFERENCES
        </Typography>
        <Typography sx={cowboyBebopAboutMeQuoteText}>
          "Reliable operator. Always delivers before the bounty expires.
        </Typography>
        <Typography
          sx={{ ...cowboyBebopAboutMeQuoteAttribution, placeSelf: "end" }}
        >
          --Jet Black
        </Typography>
      </Box>
    </Box>
  );
};
