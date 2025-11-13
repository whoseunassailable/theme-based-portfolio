import { Box, Typography } from "@mui/material";
import {
  cowboyBebopAboutMeCrewReferencesTitle,
  cowboyBebopAboutMeMissionEntry,
  cowboyBebopAboutMeQuoteAttribution,
  cowboyBebopAboutMeQuoteText,
} from "../../../../../styles/bebop-typography";

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
          justifyContent: "space-between",
        }}
      >
        <Typography sx={cowboyBebopAboutMeMissionEntry}>
          2024 Data Analyst Associate Intern
        </Typography>
        <Typography sx={cowboyBebopAboutMeMissionEntry}>
          2022 Software Developer
        </Typography>
        <Typography sx={cowboyBebopAboutMeMissionEntry}>
          2021 Full Stack Developer Intern
        </Typography>
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
