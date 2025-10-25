import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../theme/colors";
import { SectionHeading } from "../work-experience/components/SectionHeading";

export const ContactMe = () => {
  return (
    <Box
      m={0}
      gridArea="contact-me-section"
      // px={"5vw"}
      // pl={"5vh"}
      height={"100%vh"}
      border={`"1px solid ${COLORS_NEO_EXTENDED.accent}"`}
    >
      <SectionHeading title={"Let's Build something together"}></SectionHeading>
    </Box>
  );
};
