import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { AboutMeAndContactStyles } from "../../styles/AboutMeAndContactMeStyles";

export const BodyTextParagraph = () => {
  return (
    <Box
      mt={"-30vh"}
      gridArea="paragraph"
      sx={{
        ml: "2.5vw",
        height: "20vh",
        width: "25vw",
        border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
        px: "1.5vw",
        py: "2vh",
        position: "relative",

        "&::before, &::after": {
          content: '""',
          position: "absolute",
          width: 14,
          height: 14,
          borderColor: COLORS_NEO_EXTENDED.accent,
        },
        "&::before": {
          top: -6,
          left: -6,
          borderTop: "1px solid",
          borderLeft: "1px solid",
        },
        "&::after": {
          bottom: -6,
          right: -6,
          borderBottom: "1px solid",
          borderRight: "1px solid",
        },
      }}
    >
      <Typography component="p" sx={AboutMeAndContactStyles.monoText}>
        I’m Rohan Bhande, a multi-disciplinary engineer blending frontend,
        backend, mobile, and data science. I build applications that are both
        technically precise and user-focused.
      </Typography>
    </Box>
  );
};
