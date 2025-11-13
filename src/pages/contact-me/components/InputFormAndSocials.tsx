import { Box, Button, Typography, Stack } from "@mui/material";
import { InputTextFields } from "./InputTextFields";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { contactMeInputAttributes } from "../constants/ContactMeInputAttributes";
import { AboutMeAndContactStyles } from "../../../styles/AboutMeAndContactMeStyles";
import { GetInTouchAttributes } from "../constants/GetInTouchAttributes";

export const InputFormAndSocials = () => {
  return (
    <Box
      gridArea="input-form-and-socials"
      display="grid"
      gridTemplateColumns="6fr 0.01fr 3fr"
      gridTemplateAreas={`"contact-form line socials"`}
      alignItems="flex-start"
    >
      {/* LEFT SIDE — Contact Form */}
      <Box gridArea="contact-form" m="4vw">
        {contactMeInputAttributes.map((fieldName) => (
          <InputTextFields key={fieldName} name={fieldName} />
        ))}
        <Button sx={AboutMeAndContactStyles.sendButtonSx}>Send</Button>
      </Box>

      {/* MIDDLE — Divider */}
      <Box
        sx={{
          gridArea: "line",
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          height: "100%",
          alignSelf: "stretch",
        }}
      />

      {/* RIGHT SIDE — Socials */}
      <Box gridArea="socials" ml="4vw">
        <Typography sx={AboutMeAndContactStyles.getInTouchTitleSx}>
          Get in Touch
        </Typography>

        {/* Stack social links vertically */}
        <Stack sx={AboutMeAndContactStyles.getInTouchListSx}>
          {GetInTouchAttributes.map(({ label, icon: Icon, href }) => (
            <Box
              key={label}
              component="a"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={AboutMeAndContactStyles.getInTouchRowSx}
            >
              <Box sx={AboutMeAndContactStyles.getInTouchIconWrapSx}>
                <Icon sx={AboutMeAndContactStyles.getInTouchIconSx} />
              </Box>
              <Typography sx={AboutMeAndContactStyles.getInTouchLabelSx}>
                {label}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
