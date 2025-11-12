import { Box, Typography } from "@mui/material";
import { CowboyProjectsDetailHeading } from "../components/cowboy-bebop/CowboyProjectsDetailHeading";
import { CowboyProjectDetailsFooter } from "../components/cowboy-bebop/CowboyProjectDetailsFooter";
import { CowboyProjectDetailsInvestigationNotes } from "../components/cowboy-bebop/CowboyProjectDetailsInvestigationNotes";
import { CowboyProjectDetailsLink } from "../components/cowboy-bebop/CowboyProjectDetailsLink";
import { CowboyProjectInfo } from "../components/cowboy-bebop/CowboyProjectInfo";
import { CowboyProjectsDetailInvestigationSummary } from "../components/cowboy-bebop/CowboyProjectsDetailInvestigationSummary";
import { CowboyProjectsDetailSubHeading } from "../components/cowboy-bebop/CowboyProjectsDetailSubHeading";
import { bebopProjectsDetailSectionHeader } from "../../../styles/bebop-typography";

export const CowboyProjectsDetail = () => {
  return (
    <Box m={"10vh"} width={"80vw"}>
      <CowboyProjectsDetailHeading />
      <CowboyProjectsDetailSubHeading />
      <CowboyProjectInfo />
      <CowboyProjectDetailsInvestigationNotes />
      <CowboyProjectsDetailInvestigationSummary />
      <hr />
      <Typography sx={bebopProjectsDetailSectionHeader}>
        EVIDENCE LOCKER
      </Typography>
      <CowboyProjectDetailsLink />
      <CowboyProjectDetailsFooter />
    </Box>
  );
};
