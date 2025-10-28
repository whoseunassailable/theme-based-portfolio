import { Box, Typography } from "@mui/material";
import { InputTextFields } from "./InputTextFields";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

export const InputFormAndSocials = () => {
  return (
    <Box
      gridArea={"input-form-and-socials"}
      display={"grid"}
      gridTemplateColumns={"7fr 0.01fr 3fr"}
      gridTemplateAreas={`"contact-form line socials"`}
    >
      <Box gridArea={"contact-form"} ml={"4vw"}>
        <InputTextFields name={"NAME"}></InputTextFields>
        <InputTextFields name={"EMAIL"}></InputTextFields>
        <InputTextFields name={"MESSAGE"}></InputTextFields>
      </Box>
      <Box
        sx={{
          gridArea: "line",
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
        }}
      />
      <Box gridArea={"socials"} ml={"4vw"}>
        <Typography>Get in Touch</Typography>
        <Typography>Email</Typography>
        <Typography>LinkedIn</Typography>
        <Typography>GitHub</Typography>
      </Box>
    </Box>
  );
};
