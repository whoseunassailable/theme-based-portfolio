import { Box } from "@mui/material";
import { SectionHeading } from "../../work-experience/components/SectionHeading";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { ContactMeTitle } from "./components/ContactMeTitle";
import { InputFormAndSocials } from "./components/InputFormAndSocials";

export const ContactMe = () => {
  return (
    <Box
      display="grid"
      width={"90vw"}
      height={"95vh"}
      m={"10vh"}
      sx={{
        height: "100vh",
        width: "100%",
        rowGap: 4,
        border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
        placeSelf: "center",
        gridTemplateAreas: {
          xs: `
            "header"
            "paragraph"
            "attributes"
            "timeline"
            "funnotes"
          `,
          md: `
            "heading"
            "title"
            "input-form-and-socials"
          `,
        },
      }}
    >
      <SectionHeading title={"Let's Build something together"} />
      <Box gridArea={"title"}>
        <hr />
        <ContactMeTitle />
        <hr />
      </Box>
      <InputFormAndSocials />
    </Box>
  );
};
