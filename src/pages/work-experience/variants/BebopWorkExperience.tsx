import { Box } from "@mui/material";
import { Heading } from "../components/cowboy-bebop/Heading";
import { BebopSubHeading } from "../components/cowboy-bebop/BebopSubHeading";
import { BebopTimeline } from "../components/cowboy-bebop/BebopTimeline";
import { EndLog } from "../components/cowboy-bebop/EndLog";

export const BebopWorkExperience = () => {
  return (
    <Box
      width={"100vw"}
      mt={"10vh"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Heading></Heading>
      <BebopSubHeading></BebopSubHeading>
      <BebopTimeline></BebopTimeline>
      <EndLog></EndLog>
    </Box>
  );
};
