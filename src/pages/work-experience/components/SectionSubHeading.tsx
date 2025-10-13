import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

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
          variant="h5"
          sx={{
            lineHeight: 1.1,
            fontWeight: 800,
            color: COLORS_NEO_EXTENDED.heading,

            mt: { xs: 1, md: 0.5 },
          }}
        >
          {sub_title}
        </Typography>
      </Box>
    </Box>
  );
};
