import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { AboutMeAndContactStyles } from "../../about-me-and-contact-me/styles/AboutMeAndContactMeStyles";

export const ContactMeTitle = () => {
  return (
    <Box
      margin={0}
      gridArea={"title"}
      display={"flex "}
      sx={{ placeSelf: "center" }}
    >
      <Box
        sx={{
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          bgcolor: COLORS_NEO_EXTENDED.accent,
        }}
      />
      <Typography sx={AboutMeAndContactStyles.contactTitleSx}>
        Contact Me
      </Typography>
      <Box
        sx={{
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          bgcolor: COLORS_NEO_EXTENDED.accent,
        }}
      />
    </Box>
  );
};
