import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../theme/colors";
import { SectionHeading } from "../work-experience/components/neo/SectionHeading";
import { ContactMeTitle } from "./components/neo/ContactMeTitle";
import { InputFormAndSocials } from "./components/neo/InputFormAndSocials";

export const NeoContactMe = () => {
  return (
    <Box
      display="grid"
      width={"90vw"}
      height={"95vh"}
      sx={{
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
      <SectionHeading
        placeCenter="center"
        mt="5vh"
        title={"Let's Build something together"}
      />
      <Box gridArea={"title"}>
        <hr />
        <ContactMeTitle />
        <hr />
      </Box>
      <InputFormAndSocials />
    </Box>
  );
};
