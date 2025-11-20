import { Box, Typography } from "@mui/material";
import projectDetailsTheme from "../../../assets/project-details-theme.png";
import {
  potterProjectDetailsPageBodyText,
  potterProjectDetailsPageSubtitle,
  potterProjectDetailsPageTitle,
} from "../../../styles/potter-typography";

export const HarryPotterProjectsDetail = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "125vw",
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${projectDetailsTheme})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography sx={potterProjectDetailsPageTitle}>
          HarryPotterProjectsDetail
        </Typography>
        <Typography sx={potterProjectDetailsPageSubtitle}>
          Full Stack Book Recommendation App
        </Typography>
        <Typography sx={potterProjectDetailsPageBodyText}>
          Helped libraries stock smarter by analyzing trends <br /> Built
          cross-platform app for logging, rating & recommendations
        </Typography>
        <Typography sx={potterProjectDetailsPageBodyText}></Typography>
      </Box>
    </Box>
  );
};
