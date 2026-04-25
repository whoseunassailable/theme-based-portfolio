import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { Box, IconButton, Typography } from "@mui/material";
import { CowboyProjectsDetailHeading } from "../components/cowboy-bebop/CowboyProjectsDetailHeading";
import { CowboyProjectDetailsFooter } from "../components/cowboy-bebop/CowboyProjectDetailsFooter";
import { CowboyProjectDetailsInvestigationNotes } from "../components/cowboy-bebop/CowboyProjectDetailsInvestigationNotes";
import { CowboyProjectDetailsLink } from "../components/cowboy-bebop/CowboyProjectDetailsLink";
import { CowboyProjectInfo } from "../components/cowboy-bebop/CowboyProjectInfo";
import { CowboyProjectsDetailInvestigationSummary } from "../components/cowboy-bebop/CowboyProjectsDetailInvestigationSummary";
import { CowboyProjectsDetailSubHeading } from "../components/cowboy-bebop/CowboyProjectsDetailSubHeading";
import { useProjectDetails } from "../../../context/ProjectDetailsContext";
import { bebopProjectsDetailSectionHeader } from "../../../styles/bebop-typography";

export const CowboyProjectsDetail = () => {
  const { selectPreviousProject, selectNextProject } = useProjectDetails();

  return (
    <Box
      m={"10vh"}
      width={"80vw"}
      sx={{ position: "relative", placeSelf: "center" }}
    >
      <IconButton
        aria-label="Previous project"
        onClick={selectPreviousProject}
        sx={{
          position: "absolute",
          left: { xs: "-0.5rem", md: "-2.5rem" },
          top: "34vh",
          zIndex: 2,
          color: "#f4e6c9",
          border: "1px solid rgba(245,241,234,0.26)",
          backgroundColor: "rgba(17, 12, 10, 0.82)",
          backdropFilter: "blur(4px)",
          borderRadius: "999px",
          "&:hover": {
            backgroundColor: "rgba(30, 17, 17, 0.94)",
          },
        }}
      >
        <ChevronLeftIcon />
      </IconButton>
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
      <IconButton
        aria-label="Next project"
        onClick={selectNextProject}
        sx={{
          position: "absolute",
          right: { xs: "-0.5rem", md: "-2.5rem" },
          top: "34vh",
          zIndex: 2,
          color: "#f4e6c9",
          border: "1px solid rgba(245,241,234,0.26)",
          backgroundColor: "rgba(17, 12, 10, 0.82)",
          backdropFilter: "blur(4px)",
          borderRadius: "999px",
          "&:hover": {
            backgroundColor: "rgba(30, 17, 17, 0.94)",
          },
        }}
      >
        <ChevronRightIcon />
      </IconButton>
    </Box>
  );
};
