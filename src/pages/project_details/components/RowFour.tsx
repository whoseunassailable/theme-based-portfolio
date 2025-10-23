import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import { NeoTypographyForProjectDetailsPage } from "../styles/NeoTypographyForProjectDetailsPage";

export const RowFour = () => {
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
      <Box gridArea={"icon-container"}>
        <Typography px={"5vw"} sx={NeoTypographyForProjectDetailsPage.bodyText}>
          The implementation of the Readiculous system significantly improved
          inventory efficiency across partnered libraries. By leveraging
          data-driven book recommendations, libraries were able to reduce
          underutilized shelf space and increase circulation of relevant titles.
          The optimized model allowed staff to make informed stocking decisions,
          leading to measurable improvements in operational performance.
        </Typography>
      </Box>
      <Box
        sx={{
          gridArea: "middle-line",
          bgcolor: COLORS_NEO_EXTENDED.accent,
          width: "2px",
        }}
      />
      <Box
        gridArea={"project-detail-container"}
        sx={{
          gridArea: "project-detail-container",
          placeSelf: "center",
        }}
      >
        <Box display={"flex"} gap={3}>
          <Box>
            <Typography sx={NeoTypographyForProjectDetailsPage.kpiLabel}>
              SHELF SPACE WASTE
            </Typography>
            <Typography sx={NeoTypographyForProjectDetailsPage.kpiValue}>
              25%↓
            </Typography>
          </Box>
          <Box>
            <Typography sx={NeoTypographyForProjectDetailsPage.kpiLabel}>
              RELEVANT INVENTORY
            </Typography>
            <Typography sx={NeoTypographyForProjectDetailsPage.kpiValue}>
              ↑15%
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
