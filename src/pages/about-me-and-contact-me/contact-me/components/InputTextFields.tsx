import { TextField, Typography } from "@mui/material";
import { AboutMeAndContactStyles } from "../../styles/AboutMeAndContactMeStyles";

interface InputTextFieldsProps {
  name: string;
}

export const InputTextFields = ({ name }: InputTextFieldsProps) => {
  return (
    <>
      <Typography height={"2.5vh"} sx={AboutMeAndContactStyles.labelSx}>
        {name}
      </Typography>
      <TextField sx={AboutMeAndContactStyles.inputSx}></TextField>
    </>
  );
};
