// import { alpha } from "@mui/material/styles";
import LogoName from "../assets/logo_name.png";
import { Grid, Box, IconButton } from "@mui/material";
import { MuiSelectTheme } from "./MuiSelectTheme";
import { NavBarButton } from "./NavBarButton";
import { pageOptions } from "../constants/pageOptions";

export const MuiNavBar = () => {
  return (
    <Grid container direction="row" width="100%">
      <Grid size={{ xs: 6 }}>
        <Box display="flex" ml={16} mt={4} gap={3}>
          {pageOptions.map((nameOfPage) => (
            <NavBarButton>{nameOfPage}</NavBarButton>
          ))}
        </Box>
      </Grid>
      <Grid size={{ xs: 3 }}></Grid>
      <Grid size={{ xs: 2 }}>
        <MuiSelectTheme></MuiSelectTheme>
      </Grid>
      <Grid size={{ xs: 1 }}>
        <IconButton sx={{ p: 0, color: "primary" }}>
          <Box
            component="img"
            src={LogoName}
            alt="Logo"
            sx={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </IconButton>
      </Grid>
    </Grid>
  );
};
