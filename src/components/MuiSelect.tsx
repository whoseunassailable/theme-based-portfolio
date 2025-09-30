import { TextField, Box, MenuItem } from "@mui/material";
import { useState } from "react";

export const MuiSelect = () => {
  const [countries, setCountries] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select your country"
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">United States of America</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
