import { Box, TextField, Typography } from "@mui/material";
import { AboutMeAndContactStyles } from "../../../styles/AboutMeAndContactMeStyles";

interface InputTextFieldsProps {
  name: string;
}

export const InputTextFields = ({ name }: InputTextFieldsProps) => {
  return (
    <Box gridArea={"contact-form"}>
      <Typography height={"2.5vh"} sx={AboutMeAndContactStyles.labelSx}>
        {name}
      </Typography>
      <TextField sx={AboutMeAndContactStyles.inputSx}></TextField>
    </Box>
  );
};
