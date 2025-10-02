// import { alpha } from "@mui/material/styles";
import LogoName from "../assets/logo_name.png";
import { Grid, Box, Button, IconButton } from "@mui/material";

export const MuiNavBar = () => {
  return (
    <Grid container spacing={2} direction="row">
      <Box>
        <Button>Home</Button>
        <Button>Work-experience</Button>
        <Button>Projects</Button>
        <Button>Contact</Button>
        <Button>About me</Button>
      </Box>

      <IconButton sx={{ p: 0, width: 40, height: 40 }}>
        <Box
          component="img"
          src={LogoName}
          alt="Logo"
          sx={{ width: "100%", height: "100%", objectFit: "contain" }}
        />
      </IconButton>
    </Grid>
  );
};
