import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
} from "@mui/material";
import { useState } from "react";

export const MuiRadioButton = () => {
  const [value, setValue] = useState("");
  console.log({ value });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-label-group">
          Years of Experience
        </FormLabel>
        <RadioGroup
          name="job-experience-group"
          aria-labelledby="job-experience-label-group"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio size="medium" color="secondary" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="3-5"
            value="3-5"
          />
          <FormControlLabel
            control={<Radio color="secondary" />}
            label="5-10"
            value="5-10"
          />
        </RadioGroup>{" "}
      </FormControl>
    </Box>
  );
};
