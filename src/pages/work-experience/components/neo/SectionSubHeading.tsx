import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

interface SectionSubHeadingProps {
  sub_title: string;
}

export const SectionSubHeading: React.FC<SectionSubHeadingProps> = ({
  sub_title,
}) => {
  return (
    <Box
      sx={{
        mt: { xs: 1, md: 3 },
        mb: { xs: 2, md: 3 },
        display: "grid",
        gridTemplateColumns: { md: "0.25fr 5fr " },
        gridTemplateAreas: `"space-left sub-heading-title "`,
      }}
    >
      <Box gridArea={"space-left"}></Box>
      <Box gridArea={"sub-heading-title "}>
        <Typography
          component="p"
          variant="h5"
          sx={{
            color: COLORS_NEO_EXTENDED.heading,
            mt: { xs: 1, md: 0.5 },
            maxWidth: 920,
            fontFamily:
              "'Inter', 'SF Pro Text', system-ui, -apple-system, Arial",
            fontWeight: 500,
            letterSpacing: { xs: "0.04em", md: "0.06em" },
            lineHeight: 1.5,
            fontSize: { xs: 13.5, sm: 15, md: 17 },
            textShadow: "0 0 6px rgba(0,160,255,.15)",
          }}
        >
          {sub_title}
        </Typography>
      </Box>
    </Box>
  );
};
