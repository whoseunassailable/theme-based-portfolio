import { Send } from "@mui/icons-material";
import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import React, { useState } from "react"; // or: import { useState } from "react";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

export const MuiButton = () => {
  const [formats, setFormats] = useState<string[]>([]);
  console.log({
    formats,
  });

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormats: string[]
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={2} direction="column">
      <hr />
      <p>Button Variants:</p>
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="text" color="primary">
          primary
        </Button>
        <Button variant="text" color="secondary">
          secondary
        </Button>
        <Button variant="text" color="error">
          error
        </Button>
        <Button variant="text" color="warning">
          warning
        </Button>
        <Button variant="text" color="info">
          info
        </Button>
        <Button variant="text" color="success">
          success
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="outlined" color="primary">
          primary
        </Button>
        <Button variant="outlined" color="secondary">
          secondary
        </Button>
        <Button variant="outlined" color="error">
          error
        </Button>
        <Button variant="outlined" color="warning">
          warning
        </Button>
        <Button variant="outlined" color="info">
          info
        </Button>
        <Button variant="outlined" color="success">
          success
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          primary
        </Button>
        <Button variant="contained" color="secondary">
          secondary
        </Button>
        <Button variant="contained" color="error">
          error
        </Button>
        <Button variant="contained" color="warning">
          warning
        </Button>
        <Button variant="contained" color="info">
          info
        </Button>
        <Button variant="contained" color="success">
          success
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" size="small">
          primary
        </Button>
        <Button variant="contained" color="secondary" size="small">
          secondary
        </Button>
        <Button variant="contained" color="error" size="small">
          error
        </Button>
        <Button variant="contained" color="warning" size="small">
          warning
        </Button>
        <Button variant="contained" color="info" size="small">
          info
        </Button>
        <Button variant="contained" color="success" size="small">
          success
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" size="medium">
          primary
        </Button>
        <Button variant="contained" color="secondary" size="medium">
          secondary
        </Button>
        <Button variant="contained" color="error" size="medium">
          error
        </Button>
        <Button variant="contained" color="warning" size="medium">
          warning
        </Button>
        <Button variant="contained" color="info" size="medium">
          info
        </Button>
        <Button variant="contained" color="success" size="medium">
          success
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary" size="large">
          primary
        </Button>
        <Button variant="contained" color="secondary" size="large">
          secondary
        </Button>
        <Button variant="contained" color="error" size="large">
          error
        </Button>
        <Button variant="contained" color="warning" size="large">
          warning
        </Button>
        <Button variant="contained" color="info" size="large">
          info
        </Button>
        <Button variant="contained" color="success" size="large">
          success
        </Button>
      </Stack>
      <hr />
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<Send />}
          onClick={() => alert("Clicked me!")}
        >
          Send
        </Button>
        <Button
          variant="contained"
          startIcon={<Send />}
          disableRipple
          disableElevation
        >
          Send
        </Button>
        <IconButton>
          <Send />
        </IconButton>
      </Stack>
      <Stack direction={"row"}>
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left Clicked!")}>Left</Button>
          <Button onClick={() => alert("Center Clicked!")}>Center</Button>
          <Button onClick={() => alert("Right Clicked")}>Right</Button>
        </ButtonGroup>
      </Stack>
      <Stack>
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon></FormatBoldIcon>
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon></FormatItalicIcon>
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon></FormatUnderlinedIcon>
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
