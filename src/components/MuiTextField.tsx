import { Stack, TextField } from "@mui/material";
import { readonly } from "vue";

export const MuiTextField = () => {
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
          variant="filled"
        ></TextField>
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField label="Form Input" required></TextField>
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
        <TextField label="Amount"></TextField>
        <TextField label="Weight"></TextField>
      </Stack>
    </Stack>
  );
};
