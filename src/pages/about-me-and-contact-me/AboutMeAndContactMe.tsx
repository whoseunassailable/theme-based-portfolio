import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../theme/colors";
import { AboutMe } from "./about-me/AboutMe";
import { ContactMe } from "./contact-me/ContactMe";

export const AboutMeAndContactMe = () => {
  return (
    <Box
      display="grid"
      width={"90vw"}
      height={"95vh"}
      m={"10vh"}
      sx={{
        border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
        placeSelf: "center",
        gridTemplateColumns: { md: "5fr 5fr " },
        gridTemplateAreas: `"about-me-section contact-me-section"`,
      }}
    >
      <AboutMe></AboutMe>
      <ContactMe></ContactMe>
    </Box>
  );
};
