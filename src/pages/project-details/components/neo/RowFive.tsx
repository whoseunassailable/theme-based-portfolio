import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { NeoTypographyForProjectDetailsPage } from "../../styles/NeoTypographyForProjectDetailsPage";

export const RowFive = () => {
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
          xs: `"outcome-copy" "outcome-metrics"`,
          md: `"outcome-copy middle-line outcome-metrics"`,
        },
        px: { xs: 1.1, md: 1.4 },
        pt: { xs: 1.6, md: 2 },
        pb: { xs: 1.8, md: 2.2 },
        rowGap: 1.1,
      }}
    >
      <Box
        gridArea={"outcome-copy"}
        sx={{
          pr: { md: 1.35 },
          pl: { xs: 0.1, md: 0.35 },
        }}
      >
        <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
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
          display: { xs: "none", md: "block" },
          justifySelf: "center",
          minHeight: "100%",
        }}
      />
      <Box
        gridArea={"outcome-metrics"}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(2, minmax(0, 1fr))",
          },
          gap: 0.95,
          alignSelf: "start",
          pl: { md: 1.35 },
          pr: { xs: 0.1, md: 0.35 },
        }}
      >
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
  );
};
