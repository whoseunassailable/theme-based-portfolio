import { Box } from "@mui/material";
import { BodyTextParagraph } from "./components/BodyTextParagraph";
import { HeadingAndProfilePic } from "./components/HeadingAndProfilePic";
import { ContainersAboutMe } from "./components/ContainersAboutMe";
import { ABOUT_ME_ATTRIBUTES } from "./constants/AboutMeAttributes";
import { Timeline } from "./components/Timeline";
import { COLORS_NEO_EXTENDED } from "../../theme/colors";

export const NeoAboutMe = () => {
  const headingAndBodyText = ABOUT_ME_ATTRIBUTES;

  return (
    <Box
      m={"10vh"}
      display="grid"
      sx={{
        height: "90vh",
        width: "80vw",
        border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
        borderRadius: "12vw",
        placeSelf: "center",
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
          ml: "10vw",
        }}
      >
        {headingAndBodyText.map((data) => (
          <ContainersAboutMe heading={data.title} bodyText={data.description} />
        ))}
      </Box>

      <Box sx={{ ml: "7vw", display: "grid", gridArea: "timelineAndFunNotes" }}>
        <Timeline />
      </Box>
    </Box>
  );
};
