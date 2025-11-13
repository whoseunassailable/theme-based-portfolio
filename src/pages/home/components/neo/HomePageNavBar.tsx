import { NavBarButton } from "../../../../components/NavBarButton";
import { MuiSelectTheme } from "../../../../components/MuiSelectTheme";
// import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
// import LogoName from "../../../assets/logo_name.png";
import { Box } from "@mui/material";
import { pageOptions } from "../../../../constants/pageOptions";
import CircularText from "./CircularText";

<CircularText
  text="REACT*BITS*COMPONENTS*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>;
export const HomeNeoPageNavBar = () => {
  return (
    <Box
      gap={5}
      alignItems="start"
      sx={{
        mt: { xs: 2, md: 5 },
        display: "grid",
        gridTemplateColumns: { md: "0.4fr 7fr 1.5fr 1fr" },
        gridTemplateAreas: `"space-left navbar theme logo"`,
      }}
    >
      <Box
        sx={{
          gridArea: "space-left",
        }}
      />
      <Box
        sx={{
          gridArea: "navbar",
          display: "flex",
          gap: 1,
        }}
      >
        {pageOptions.map((name) => (
          <NavBarButton key={name}>{name}</NavBarButton>
        ))}
      </Box>
      <Box sx={{ gridArea: "theme", display: "flex" }}>
        <MuiSelectTheme />
      </Box>
      <Box
        sx={{
          gridArea: "logo",
          display: "flex",
          gap: 1,
          height: "80%",
          width: "80%",
        }}
      >
        <CircularText
          text="*ROHAN* *BHANDE*"
          onHover="speedUp"
          spinDuration={20}
          className="custom-class"
        />
      </Box>
      {/* <IconButton
        disabled
        sx={{
          p: 0,
          color: "primary",
          gridArea: "logo",
          display: "flex",
        }}
      >
        <Box
          component="img"
          src={LogoName}
          alt="Logo"
          sx={{
            background: "transparent",
            height: "80%",
            width: "80%",
            objectFit: "contain",
            filter: `drop-shadow(0 0 4px ${COLORS_NEO_EXTENDED.glowSoft})`,
          }}
        />
      </IconButton> */}
    </Box>
  );
};
