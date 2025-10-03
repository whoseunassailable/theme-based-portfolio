import { TextField, Box, MenuItem } from "@mui/material";
import { useState } from "react";
import { themeOptions } from "../constants/themeOptions";
import { textFieldSx, menuPaperSx } from "../styles/textFieldNeoThemeStyle";

export const MuiSelectTheme = () => {
  const [theme, setTheme] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setTheme(value);
  };

  return (
    <Box mt={4}>
      <TextField
        label="Themes"
        select
        value={theme}
        onChange={handleChange}
        fullWidth
        size="small"
        color="primary"
        helperText="Change Theme"
        sx={textFieldSx}
        SelectProps={{
          MenuProps: {
            PaperProps: { menuPaperSx },
          },
        }}
      >
        {themeOptions.map((themeName) => (
          <MenuItem key={themeName} value={themeName}>
            {themeName}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
};
