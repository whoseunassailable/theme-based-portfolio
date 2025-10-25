import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { BodyTextParagraph } from "./components/BodyTextParagraph";
import { HeadingAndProfilePic } from "./components/HeadingAndProfilePic";
import { ContainersAboutMe } from "./components/ContainersAboutMe";
import { TimelineAndFunNotes } from "./components/TimelineAndFunNotes";

export const AboutMe = () => {
  return (
    <Box
      display="grid"
      m={0}
      gridArea="about-me-section"
      sx={{
        height: "100vh",
        rowGap: 4,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
        gridTemplateRows: { md: "auto auto auto auto" }, // 4 content-sized rows
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
            "paragraph paragraph"
            "attributes attributes"
            "timeline funnotes"
          `,
        },
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        <HeadingAndProfilePic />
      </Box>

      {/* Row 2: Paragraph */}
      <Box sx={{ gridArea: "paragraph" }}>
        <BodyTextParagraph />
      </Box>

      {/* Row 3: Attributes / Containers */}
      <Box sx={{ gridArea: "attributes" }}>
        <ContainersAboutMe />
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
