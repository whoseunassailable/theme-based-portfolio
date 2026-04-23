import { TextField, MenuItem } from "@mui/material";
import { themeOptions, type ThemeName } from "../constants/themeOptions";
import { textFieldSx, menuPaperSx } from "../styles/textFieldNeoThemeStyle";
import { useThemeController } from "../theme/ThemeProviderWrapper";

export const MuiSelectTheme = () => {
  const { themeName, setThemeName } = useThemeController();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThemeName(event.target.value as ThemeName);
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
      helperText="Neo is live. Other themes are in progress."
      sx={textFieldSx}
      SelectProps={{
        MenuProps: {
          PaperProps: { sx: menuPaperSx },
        },
      }}
    >
      {themeOptions.map(({ value, label, inProgress }) => (
        <MenuItem key={value} value={value} disabled={inProgress}>
          {label}
        </MenuItem>
      ))}
    </TextField>
  );
};
