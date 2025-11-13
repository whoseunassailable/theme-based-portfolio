import { Box, Button, TextField, Typography } from "@mui/material";
import { cowboyBebopContactMeLabel } from "../../../styles/bebop-typography";

export const CowboyBebopContactMeInputForm = () => {
  return (
    <Box mt={"4vh"} border={`1px solid #6CF1F0`} borderRadius={"1vw"} p={"2vw"}>
      <TextFieldForCowboyBebopContactMeInputForm label="SENDER ID" />
      <TextFieldForCowboyBebopContactMeInputForm label="UPLINK ADDRESS" />
      <TextFieldForCowboyBebopContactMeInputForm label="MESSAGE PACKET" />
      <Button variant="outlined" sx={{ height: "8vh", width: "20vw" }}>
        <Typography fontSize={"4vh"} color="#c0392b">
          TRANSMIT
        </Typography>
      </Button>
    </Box>
  );
};

interface TextFieldForCowboyBebopContactMeInputFormProps {
  label: string;
}

export const TextFieldForCowboyBebopContactMeInputForm = ({
  label,
}: TextFieldForCowboyBebopContactMeInputFormProps) => {
  return (
    <Box sx={{ mb: "1.5vw" }}>
      <Typography sx={cowboyBebopContactMeLabel}>{label}</Typography>

      <TextField
        variant="outlined"
        fullWidth
        sx={{
          mt: "0.5vw",
          "& .MuiOutlinedInput-root": {
            color: "#F5F2EB",
            fontFamily: "'Courier Prime', monospace",
            borderRadius: "0.2vw",
            "& fieldset": {
              borderColor: "#6CF1F0",
            },
            "&:hover fieldset": {
              borderColor: "#97FFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#6CF1F0",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#6CF1F0",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#97FFFF",
          },
        }}
      />
    </Box>
  );
};
