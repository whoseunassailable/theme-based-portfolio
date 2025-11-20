import { Box } from "@mui/material";
import { MuiSelectTheme } from "../../../components/MuiSelectTheme";

export const PokemonHome = () => {
  return (
    <Box sx={{ gridArea: "theme", display: "flex" }}>
      <MuiSelectTheme />
    </Box>
  );
};
