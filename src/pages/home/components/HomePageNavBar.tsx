import LogoName from "../../../assets/logo_name.png";
import { Grid, Box, IconButton } from "@mui/material";
import { MuiSelectTheme } from "../../../components/MuiSelectTheme";
import { NavBarButton } from "../../../components/NavBarButton";
import { pageOptions } from "../../../constants/pageOptions";
import { COLORS_NEO_EXTENDED } from "../../../theme/Colors";

export const HomePageNavBar = () => {
  return (
    <Grid
      container
      direction="row"
      width="100%"
      sx={{
        backgroundColor: COLORS_NEO_EXTENDED.bg,
        borderBottom: `1px solid ${COLORS_NEO_EXTENDED.gridStrong}`,
      }}
    >
      <Grid size={{ xs: 7 }}>
        <Box display="flex" ml={16} mt={4} gap={2}>
          {pageOptions.map((nameOfPage) => (
            <NavBarButton>{nameOfPage}</NavBarButton>
          ))}
        </Box>
      </Grid>
      <Grid size={{ xs: 2 }}></Grid>
      <Grid size={{ xs: 2 }}>
        <MuiSelectTheme></MuiSelectTheme>
      </Grid>
      <Grid size={{ xs: 1 }}>
        <IconButton disabled sx={{ p: 0, color: "primary" }}>
          <Box
            component="img"
            src={LogoName}
            alt="Logo"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              filter: `drop-shadow(0 0 4px ${COLORS_NEO_EXTENDED.glowSoft})`,
            }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
