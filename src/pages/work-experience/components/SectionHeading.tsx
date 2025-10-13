import { Box, Typography } from "@mui/material";

interface SectionHeadingProps {
  title: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ title }) => {
  return (
    <Box
      sx={{
        mt: { xs: 2, md: 12 },
        display: "grid",
        gridTemplateColumns: { md: "0.25fr 5fr " },
        gridTemplateAreas: `"space-left heading-title "`,
      }}
    >
      <Box gridArea={"space-left"}></Box>
      <Box gridArea={"heading-title"}>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            lineHeight: 1.1,
            fontWeight: 700,
            fontSize: {
              xs: "2.25rem",
              sm: "2.75rem",
              md: "3.5rem",
              lg: "4rem",
            },
            mt: { xs: 1, md: 3 },
          }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};
