import { TextField, MenuItem } from "@mui/material";
import { themeOptions } from "../constants/themeOptions";
import { textFieldSx, menuPaperSx } from "../styles/textFieldNeoThemeStyle";
import { useThemeController } from "../theme/ThemeProviderWrapper";

export const MuiSelectTheme = () => {
  const { themeName, setThemeName } = useThemeController();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeName(event.target.value as any);
  };

  return (
    <TextField
      label="Themes"
      select
      value={themeName} // comes from global provider
      onChange={handleChange}
      fullWidth
      size="small"
      color="primary"
      helperText="Change Theme"
      sx={textFieldSx}
      SelectProps={{
        MenuProps: {
          PaperProps: { sx: menuPaperSx },
        },
      }}
    >
      {themeOptions.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};
