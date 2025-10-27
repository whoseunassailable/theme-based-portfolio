import { Box } from "@mui/material";
import { BodyTextParagraph } from "./components/BodyTextParagraph";
import { HeadingAndProfilePic } from "./components/HeadingAndProfilePic";
import { ContainersAboutMe } from "./components/ContainersAboutMe";
import { TimelineAndFunNotes } from "./components/TimelineAndFunNotes";
import { ABOUT_ME_ATTRIBUTES } from "./constants/AboutMeAttributes";

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
            "timeline funnotes"
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
          mt: "-15vh",
        }}
      >
        {headingAndBodyText.map((data) => (
          <ContainersAboutMe heading={data.title} bodyText={data.description} />
        ))}
      </Box>

      {/* Row 4: Timeline + Fun Notes */}
      <Box sx={{ gridArea: "timeline" }}>
        <TimelineAndFunNotes />
      </Box>
      <Box sx={{ gridArea: "funnotes" }}>
        <TimelineAndFunNotes />
      </Box>
    </Box>
  );
};
