import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

// interface ContactMeTitleProps {
//   gridAreaNames: string[];
// }

export const ContactMeTitle = () => {
  return (
    <Box display={"flex "} sx={{ placeSelf: "center" }}>
      <Box
        sx={{
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          bgcolor: COLORS_NEO_EXTENDED.accent,
        }}
      />
      <Typography>Contact Me</Typography>
      <Box
        sx={{
          border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
          bgcolor: COLORS_NEO_EXTENDED.accent,
        }}
      />
    </Box>
  );
};
