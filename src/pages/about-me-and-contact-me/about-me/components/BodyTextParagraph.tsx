import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

export const BodyTextParagraph = () => {
  return (
    <Box
      gridArea="paragraph"
      sx={{
        ml: "5vw",
        maxWidth: "30vw", // was width: "30vw"
        border: `1px solid ${COLORS_NEO_EXTENDED.accent}`,
        px: "3vw",
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
      <Typography
        component="p"
        sx={{
          fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
          fontSize: "1rem",
          lineHeight: 1.3,
          letterSpacing: "0.05em",
          color: "#9BD2FF",
          textAlign: "justify",
        }}
      >
        I’m Rohan Bhande, a multi-disciplinary engineer blending frontend,
        backend, mobile, and data science. I build applications that are both
        technically precise and user-focused.
      </Typography>
    </Box>
  );
};
