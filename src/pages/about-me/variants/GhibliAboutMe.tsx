import { Box, Typography } from "@mui/material";
import ghibliAboutMeTheme from "../../../assets/ghibli-about-me-theme.png";
import {
  ghibliAboutTitleTypography,
  ghibliAboutBodyTypography,
  ghibliAboutTimelineYearTypography,
  ghibliAboutTimelineHeadingTypography,
  ghibliAboutHobbiesTitleTypography,
  ghibliAboutHobbiesLabelTypography,
} from "../../../styles/ghibli-typography";
import { TimelineAttributes } from "../../../constants/TimelineAttributes";

const bioText = `I'm a full-stack engineer with a curiosity that's led me down all sorts of paths. After starting out in computer science, I found myself enchanted by the creative possibilities of code, from building dynamic web applications to bringing artful projects to life.`;

const bioText2 = `When I'm not coding, you'll find me absorbed in a good story, exploring nature, or sketching out ideas for the next project.`;

const hobbies = ["Reading", "Coffee", "Gaming", "Nature"];

export const GhibliAboutMe = () => {
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
          backgroundImage: `url(${ghibliAboutMeTheme})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          px: "8vw",
          py: "8vh",
        }}
      >
        {/* Title */}
        <Typography sx={{ ...ghibliAboutTitleTypography, fontSize: "7vw", mb: 2 }}>
          About Me
        </Typography>

        {/* Bio section */}
        <Box sx={{ maxWidth: "55%", alignSelf: "flex-end", mb: 4 }}>
          <Typography sx={ghibliAboutBodyTypography}>{bioText}</Typography>
          <Typography sx={{ ...ghibliAboutBodyTypography, mt: 2 }}>
            {bioText2}
          </Typography>
        </Box>

        {/* Timeline */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mb: 4 }}>
          {TimelineAttributes.map((item, index) => (
            <Box
              key={item.year}
              sx={{
                display: "flex",
                alignItems: "flex-start",
                gap: 2,
                ml: `${index * 8}vw`,
              }}
            >
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  borderRadius: "50%",
                  backgroundColor: "#8a5a24",
                  mt: 0.5,
                  flexShrink: 0,
                }}
              />
              <Box>
                <Typography sx={ghibliAboutTimelineYearTypography}>
                  {item.year}
                </Typography>
                <Typography sx={ghibliAboutTimelineHeadingTypography}>
                  {item.title}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Hobbies */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mt: "auto" }}>
          <Typography sx={ghibliAboutHobbiesTitleTypography}>
            My Hobbies:
          </Typography>
          {hobbies.map((hobby) => (
            <Typography key={hobby} sx={ghibliAboutHobbiesLabelTypography}>
              {hobby}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
