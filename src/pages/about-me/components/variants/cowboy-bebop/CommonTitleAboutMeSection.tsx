import { Box, Typography } from "@mui/material";
import { cowboyBebopAboutMeSectionTitle } from "../../../../../styles/bebop-typography";

interface CommonTitleAboutMeSectionProps {
  title: string;
}

export const CommonTitleAboutMeSection = ({
  title,
}: CommonTitleAboutMeSectionProps) => {
  return (
    <Box
      display="grid"
      gridTemplateColumns="auto 1fr"
      alignItems="center"
      columnGap={2}
    >
      <Typography sx={cowboyBebopAboutMeSectionTitle}>{title}</Typography>

      <Box
        sx={{
          height: "2px",
          width: "100%",
          backgroundColor: "currentColor", // Matches text color
          opacity: 0.6, // Optional: similar to Bebop aesthetic
        }}
      />
    </Box>
  );
};
