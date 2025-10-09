import { NavBarButton } from "../../../components/NavBarButton";
import { MuiSelectTheme } from "../../../components/MuiSelectTheme";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import LogoName from "../../../assets/logo_name.png";
import { Box, IconButton } from "@mui/material";
import { pageOptions } from "../../../constants/pageOptions";

export const HomePageNavBar = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: "2",
        gridTemplateColumns: { md: "7fr 1.5fr 1fr" },
        gridTemplateAreas: `"navbar theme logo"`,
      }}
    >
      <Box
        sx={{
          gridArea: "navbar",
          display: "flex",
          // flexWrap: { xs: "wrap", md: "nowrap" },
        }}
      >
        {pageOptions.map((name) => (
          <NavBarButton key={name}>{name}</NavBarButton>
        ))}
      </Box>
      <Box sx={{ gridArea: "theme", display: "flex" }}>
        <MuiSelectTheme></MuiSelectTheme>
      </Box>

      <IconButton
        disabled
        sx={{ p: 0, color: "primary", gridArea: "logo", display: "flex" }}
      >
        <Box
          component="img"
          src={LogoName}
          alt="Logo"
          sx={{
            height: "100%",
            width: "100%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 4px ${COLORS_NEO_EXTENDED.glowSoft})`,
          }}
        />
      </IconButton>
    </Box>
  );
};
