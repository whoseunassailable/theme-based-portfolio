import { Box } from "@mui/material";
import { BebopProjectsHeading } from "../components/cowboy-bebop/BebopProjectsHeading";
import { BebopProjectsSubHeading } from "../components/cowboy-bebop/BebopProjectsSubHeading";
import { BebopProjectsStackNavBar } from "../components/cowboy-bebop/BebopProjectsStackNavBar";
import { BebopProjectsContainer } from "../components/cowboy-bebop/BebopProjectsContainer";

export const BebopProjects = () => {
  return (
    <Box
      mt={"10vh"}
      width={"70vw"}
      display={"flex"}
      flexDirection={"column"}
      gridTemplateAreas={`"bebop-projects-heading bebop-projects-sub-heading bebop-projects-stack-nav-bar bebop-projects-container"`}
      sx={{ placeSelf: "center" }}
    >
      <BebopProjectsHeading gridName={"bebop-projects-heading"} />
      <BebopProjectsSubHeading gridName={"bebop-projects-sub-heading"} />
      <BebopProjectsStackNavBar gridName={"bebop-projects-stack-nav-bar"} />
      <BebopProjectsContainer gridName={"bebop-projects-container"} />
    </Box>
  );
};
