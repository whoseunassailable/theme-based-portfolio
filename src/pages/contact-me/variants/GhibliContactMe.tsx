import { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import ghibliContactMeTheme from "../../../assets/ ghibli-contact-me-theme.png";
import {
  ghibliContactTitleTypography,
  ghibliContactSubtitleTypography,
  ghibliContactLabelTypography,
  ghibliContactButtonTypography,
  ghibliBodyFontFamily,
} from "../../../styles/ghibli-typography";

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    backgroundColor: "rgba(255, 250, 235, 0.8)",
    fontFamily: ghibliBodyFontFamily,
    "& fieldset": {
      borderColor: "#c9b896",
    },
    "&:hover fieldset": {
      borderColor: "#a08050",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#8a5a24",
    },
  },
  mb: 2,
};

export const GhibliContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "#000",
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: 1440,
          minHeight: "100vh",
          position: "relative",
          backgroundImage: `url(${ghibliContactMeTheme})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: "8vh",
          px: "4vw",
        }}
      >
        {/* Title */}
        <Typography
          sx={{ ...ghibliContactTitleTypography, fontSize: "6vw", mb: 1 }}
        >
          Contact Me
        </Typography>
        <Typography sx={{ ...ghibliContactSubtitleTypography, mb: 4 }}>
          Let's connect and create something magical together.
        </Typography>

        {/* Form */}
        <Box
          sx={{
            width: "100%",
            maxWidth: 520,
            backgroundColor: "rgba(255, 250, 240, 0.6)",
            borderRadius: "16px",
            p: 4,
          }}
        >
          <Typography sx={{ ...ghibliContactLabelTypography, mb: 0.5 }}>
            Name
          </Typography>
          <TextField
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={inputSx}
          />

          <Typography sx={{ ...ghibliContactLabelTypography, mb: 0.5 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={inputSx}
          />

          <Typography sx={{ ...ghibliContactLabelTypography, mb: 0.5 }}>
            Message
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={inputSx}
          />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                ...ghibliContactButtonTypography,
                backgroundColor: "#dcc88c",
                border: "2px solid #b89a6a",
                borderRadius: "8px",
                px: 5,
                py: 1,
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#c9b06a",
                  boxShadow: "none",
                },
              }}
            >
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
