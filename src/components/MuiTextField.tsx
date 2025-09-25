import { InputAdornment, Stack, TextField } from "@mui/material";
import { useState } from "react";

export const MuiTextField = () => {
  const [value, setValue] = useState("");

  return (
    <Stack spacing={2}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="standard"></TextField>
        <TextField label="Name" variant="outlined"></TextField>
        <TextField label="Name" variant="filled"></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Small TextField"
          size="small"
          color="secondary"
          variant="outlined"
        ></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          helperText={!value ? "Required" : "Input state value is valid"}
          error={!value}
        ></TextField>
        <TextField label="Password" required type="password"></TextField>
        <TextField
          label="Read only"
          slotProps={{
            input: {
              readOnly: true,
            },
          }}
        ></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            },
          }}
        ></TextField>
        <TextField
          label="Weight"
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="start">kgs</InputAdornment>
              ),
            },
          }}
        ></TextField>
      </Stack>
    </Stack>
  );
};
