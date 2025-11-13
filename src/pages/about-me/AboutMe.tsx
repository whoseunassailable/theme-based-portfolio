import { Box } from "@mui/material";
import { ABOUT_ME_ATTRIBUTES } from "../../constants/AboutMeAttributes";
import { COLORS_NEO_EXTENDED } from "../../theme/colors";
import { HeadingAndProfilePic } from "./components/variants/neo/HeadingAndProfilePic";
import { BodyTextParagraph } from "./components/variants/neo/BodyTextParagraph";
import { ContainersAboutMe } from "./components/variants/neo/ContainersAboutMe";
import { Timeline } from "@mui/icons-material";

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
