import { Box } from "@mui/material";
import { BodyTextParagraph } from "./components/BodyTextParagraph";
import { HeadingAndProfilePic } from "./components/HeadingAndProfilePic";
import { ContainersAboutMe } from "./components/ContainersAboutMe";
import { ABOUT_ME_ATTRIBUTES } from "./constants/AboutMeAttributes";
import { TimelineAndFunNotes } from "./components/TimelineAndFunNotes";

export const AboutMe = () => {
  const headingAndBodyText = ABOUT_ME_ATTRIBUTES;

  return (
    <Box
      display="grid"
      m={0}
      gridArea="about-me-section"
      sx={{
        height: "100vh",
        width: "100%",
        rowGap: 4,
        gridTemplateAreas: {
          xs: `
            "header"
            "paragraph"
            "attributes"
            "timeline"
            "funnotes"
          `,
          md: `
            "header"
            "paragraph"
            "attributes"
            "timelineAndFunNotes"
          `,
        },
      }}
    >
      {/* Row 1: Heading and Profile Pic */}
      <Box sx={{ gridArea: "header" }}>
        <HeadingAndProfilePic />
      </Box>

      {/* Row 2: Paragraph */}
      <Box sx={{ gridArea: "paragraph" }}>
        <BodyTextParagraph />
      </Box>

      {/* Row 3: Attributes / Containers */}
      <Box
        sx={{
          gridArea: "attributes",
          display: "flex",
          gap: "1vw",
          ml: "2.5vw",
        }}
      >
        {headingAndBodyText.map((data) => (
          <ContainersAboutMe heading={data.title} bodyText={data.description} />
        ))}
      </Box>

      <Box sx={{ display: "grid", gridArea: "timelineAndFunNotes" }}>
        <TimelineAndFunNotes />
      </Box>
    </Box>
  );
};
