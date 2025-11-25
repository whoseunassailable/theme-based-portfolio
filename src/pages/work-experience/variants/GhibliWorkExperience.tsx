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
          height: "150vh",
          maxWidth: 1440,
          aspectRatio: "12 / 9",
          position: "relative",
          backgroundImage: `url(${ghibliWork})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
        }}
      >
        <Typography sx={ghibliWorkSectionTitleTypography}>My Work</Typography>
        <Typography sx={ghibliWorkSectionSubtitleTypography}>
          Where I have worked over the years
        </Typography>

        <Box
          component={"img"}
          src={ghibliWorkLeaflet}
          sx={{ placeSelf: "center", height: "10vh" }}
        />

        <Box
          height={"30vh"}
          width="100%"
          mt={"10vh"}
          component={"img"}
          src={ghibliWorkLeafBranch}
        />

        {/* 3 containers next to each other */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 4, // space between cards
            mt: "-2vh",
            ml: "50vh",
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
