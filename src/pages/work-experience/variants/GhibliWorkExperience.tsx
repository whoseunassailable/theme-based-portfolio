import { Box, Typography } from "@mui/material";
import ghibliWork from "../../../assets/ghibli-work-theme.png";
import ghibliWorkLeaflet from "../../../assets/leaf_divider_transparent.png";
import { GhibliCardContainer } from "../components/studio-ghibli/GhibliCardContainer";
import {
  ghibliBodyFontFamily,
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
          width: "100vw",
          minHeight: "100vh",
          position: "relative",
          backgroundImage: `url(${ghibliWork})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          px: { xs: 2.5, md: 5 },
          pt: { xs: 8, md: 10 },
          pb: { xs: 10, md: 12 },
        }}
      >
        <Typography sx={ghibliWorkSectionTitleTypography}>My Work</Typography>
        <Typography
          sx={{
            ...ghibliWorkSectionSubtitleTypography,
            maxWidth: 760,
            textAlign: "center",
            mt: 1,
          }}
        >
          Places where I learned to turn product thinking, engineering, and
          data into calm, reliable digital experiences.
        </Typography>

        <Box
          component="img"
          src={ghibliWorkLeaflet}
          alt=""
          sx={{ height: { xs: 34, md: 44 }, mt: { xs: 2.5, md: 3 } }}
        />

        <Typography
          sx={{
            fontFamily: ghibliBodyFontFamily,
            fontSize: { xs: "1rem", md: "1.12rem" },
            lineHeight: 1.55,
            color: "#5c4a3d",
            textAlign: "center",
            maxWidth: 680,
            mt: 1.2,
            mb: { xs: 4.5, md: 5.5 },
          }}
        >
          Four chapters so far: research-led healthcare, analytics, startup
          shipping, and early full-stack design work.
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1080,
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, minmax(0, 1fr))" },
            gap: { xs: 3.5, md: 4.5 },
            justifyItems: "center",
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
