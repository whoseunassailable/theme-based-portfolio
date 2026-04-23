import { Box, Typography } from "@mui/material";
import ghibliWork from "../../../assets/ghibli-work-theme.png";
import ghibliWorkLeaflet from "../../../assets/leaf_divider_transparent.png";
import ghibliWorkLeafBranch from "../../../assets/ghibli-work-theme-leaf-branch-asset.png";
import { GhibliCardContainer } from "../components/studio-ghibli/GhibliCardContainer";
import {
  ghibliWorkSectionSubtitleTypography,
  ghibliWorkSectionTitleTypography,
} from "../../../styles/ghibli-typography";
import { workExperiences } from "../../../constants/ghibliWorkExperiences";

export const GhibliWorkExperience = () => {
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
          width: "100%",
          maxWidth: 1440,
          minHeight: "100vh",
          position: "relative",
          backgroundImage: `url(${ghibliWork})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pb: "8vh",
        }}
      >
        <Typography sx={ghibliWorkSectionTitleTypography}>My Work</Typography>
        <Typography sx={ghibliWorkSectionSubtitleTypography}>
          Where I have worked over the years
        </Typography>

        <Box
          component="img"
          src={ghibliWorkLeaflet}
          sx={{ height: "8vh", mt: "3vh" }}
        />

        <Box
          component="img"
          src={ghibliWorkLeafBranch}
          sx={{ height: "20vh", width: "80%", objectFit: "contain", mt: "4vh" }}
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 4,
            mt: 4,
            px: 4,
          }}
        >
          {workExperiences.map((exp) => (
            <GhibliCardContainer
              key={`${exp.company}-${exp.duration}`}
              experience={exp}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
