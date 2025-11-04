import { Box } from "@mui/material";
import { BebopProjectsSubHeading } from "../components/BebopProjectsSubHeading";
import { BebopProjectsStackNavBar } from "../components/BebopProjectsStackNavBar";
import { BebopProjectsHeading } from "../components/BebopProjectsHeading";
import { BebopProjectsContainer } from "../components/BebopProjectsContainer";

export const BebopProjects = () => {
  return (
    <Box
      mt={"10vh"}
      width={"100vw"}
      display={"flex"}
      flexDirection={"column"}
      gridTemplateAreas={`"bebop-projects-heading bebop-projects-sub-heading bebop-projects-stack-nav-bar bebop-projects-container"`}
      // gridTemplateColumns={"1fr 1fr 0.7fr 7fr"}
      justifyContent={"center"}
    >
      <BebopProjectsHeading gridName={"bebop-projects-heading"} />
      <BebopProjectsSubHeading gridName={"bebop-projects-sub-heading"} />
      <BebopProjectsStackNavBar gridName={"bebop-projects-stack-nav-bar"} />
      <BebopProjectsContainer></BebopProjectsContainer>
    </Box>
  );
};
