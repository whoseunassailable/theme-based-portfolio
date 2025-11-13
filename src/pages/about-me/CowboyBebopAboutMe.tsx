import { Box } from "@mui/material";
import { BackgroundReportDetails } from "./components/cowboy-bebop/BackgroundReportDetails";
import { BebopStylePersonalDetailsContainer } from "./components/cowboy-bebop/BebopStylePersonalDetailsContainer";
import { CapabilitiesRow } from "./components/cowboy-bebop/CapabilitiesRow";
import { CommonTitleAboutMeSection } from "./components/cowboy-bebop/CommonTitleAboutMeSection";
import { CowboyBebopAboutMeSubTitle } from "./components/cowboy-bebop/CowboyBebopAboutMeSubTitle";
import { CowboyBebopAboutMeTitle } from "./components/cowboy-bebop/CowboyBebopAboutMeTitle";
import { MissionLogDetails } from "./components/cowboy-bebop/MissionLogDetails";

export const CowboyBebopAboutMe = () => {
  return (
    <Box
      p={"5vw"}
      width={"60vw"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ placeSelf: "center" }}
    >
      <CowboyBebopAboutMeTitle />
      <CowboyBebopAboutMeSubTitle />
      <hr />
      <BebopStylePersonalDetailsContainer />
      <CommonTitleAboutMeSection title={"BACKGROUND REPORT"} />
      <BackgroundReportDetails />
      <CommonTitleAboutMeSection title={"KNOWN CAPABILITIES"} />
      <CapabilitiesRow />
      <CommonTitleAboutMeSection title={"MISSION LOG"} />
      <MissionLogDetails />
    </Box>
  );
};
