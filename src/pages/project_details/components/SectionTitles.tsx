// SectionTitles.tsx
import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { NeoTypographyForProjectDetailsPage } from "../styles/NeoTypographyForProjectDetailsPage";

interface SectionTitlesProp {
  title: string;
  leftOffset?: string | number; // e.g., "10%" or 24
}

export const SectionTitles = ({
  title,
  leftOffset = "5%",
}: SectionTitlesProp) => {
  return (
    <Box
      sx={{
        position: "relative",
        height: 56, // the gap between the two lines
        my: 4, // vertical spacing around the block
        "::before": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: 2,
          bgcolor: COLORS_NEO_EXTENDED.accent,
        },
        "::after": {
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 2,
          bgcolor: COLORS_NEO_EXTENDED.accent,
        },
      }}
    >
      <Typography
        sx={{
          ...NeoTypographyForProjectDetailsPage.sectionTitle,
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: leftOffset, // “a bit left”
          px: 2, // keeps text from touching lines
        }}
      >
        {title.toUpperCase()}
      </Typography>
    </Box>
  );
};
