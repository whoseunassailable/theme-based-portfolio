import { Box } from "@mui/material";
import { CowboyBebopAboutMeTitle } from "./components/variants/cowboy-bebop/CowboyBebopAboutMeTitle";
import { CowboyBebopAboutMeSubTitle } from "./components/variants/cowboy-bebop/CowboyBebopAboutMeSubTitle";
import { BebopStylePersonalDetailsContainer } from "./components/variants/cowboy-bebop/BebopStylePersonalDetailsContainer";
import { BackgroundReportDetails } from "./components/variants/cowboy-bebop/BackgroundReportDetails";
import { CommonTitleAboutMeSection } from "./components/variants/cowboy-bebop/CommonTitleAboutMeSection";
import { CapabilityBox } from "./components/variants/cowboy-bebop/ChipsForStack";
import { CapabilitiesRow } from "./components/variants/cowboy-bebop/CapabilitiesRow";
import { MissionLogDetails } from "./components/variants/cowboy-bebop/MissionLogDetails";

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
