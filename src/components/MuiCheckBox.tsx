import {
  Box,
  FormControlLabel,
  Checkbox,
  FormLabel,
  FormGroup,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export const MuiCheckbox = () => {
  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log({ skills });
  console.log(acceptTnC);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAcceptTnC(event.target.checked);
  };

  const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(event.target.value);
    if (index === -1) {
      setSkills([...skills, event.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Accept terms and conditions"
          control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnC}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormLabel>Skills</FormLabel>
        <FormControl>
          {" "}
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              checked={skills.includes("html")}
              control={
                <Checkbox checked={acceptTnC} onChange={handleSkillChange} />
              }
            />
            <FormControlLabel
              label="CSS"
              checked={skills.includes("html")}
              control={
                <Checkbox checked={acceptTnC} onChange={handleSkillChange} />
              }
            />
            <FormControlLabel
              label="JavaScript"
              checked={skills.includes("html")}
              control={
                <Checkbox checked={acceptTnC} onChange={handleSkillChange} />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
