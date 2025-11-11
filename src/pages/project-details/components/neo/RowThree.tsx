import { Box } from "@mui/material";
import readiculousApproach from "../../../../assets/readiculous_approach.png";
import readiculousApproachTwo from "../../../../assets/readiculous_approach_two.png";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

export const RowThree = () => {
  return (
    <Box
      display={"grid"}
      margin={0}
      p={0}
      sx={{
        gridTemplateColumns: {
          md: "6.5fr 0.2fr 6.5fr",
          xs: "1fr",
        },
        gridTemplateAreas: {
          xs: `"icon-container middle-line project-detail-container"`,
        },
      }}
    >
      <Box
        gridArea={"icon-container"}
        component={"img"}
        src={readiculousApproach}
        alt="A library shelf logo"
        sx={{ background: "transparent" }}
      />
      <Box
        sx={{
          gridArea: "middle-line",
          bgcolor: COLORS_NEO_EXTENDED.accent,
          width: "2px",
        }}
      />
      <Box
        gridArea={"project-detail-container"}
        component={"img"}
        src={readiculousApproachTwo}
        alt="A library shelf logo"
        sx={{ background: "transparent" }}
      />
    </Box>
  );
};
