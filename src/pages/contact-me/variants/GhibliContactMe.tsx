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

const defaultFormValues = {
  name: "",
  email: "",
  message: "",
};

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
  "& .MuiFormHelperText-root": {
    ml: 0,
    mt: 0.85,
    fontFamily: ghibliBodyFontFamily,
    fontSize: "0.92rem",
  },
  mb: 2,
};

const validateField = (
  fieldName: keyof typeof defaultFormValues,
  value: string
) => {
  const trimmedValue = value.trim();

  if (fieldName === "name") {
    if (!trimmedValue) return "Please enter your name.";
    if (trimmedValue.length < 2) return "Name must be at least 2 characters.";
    return "";
  }

  if (fieldName === "email") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }
    return "";
  }

  if (!trimmedValue) return "Please enter your message.";
  if (trimmedValue.length < 20) {
    return "Message must be at least 20 characters.";
  }
  return "";
};

export const GhibliContactMe = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [fieldErrors, setFieldErrors] = useState(defaultFormValues);
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleFieldChange = (
    fieldName: keyof typeof defaultFormValues,
    value: string
  ) => {
    setFormValues((previous) => ({
      ...previous,
      [fieldName]: value,
    }));

    if (touchedFields[fieldName]) {
      setFieldErrors((previous) => ({
        ...previous,
        [fieldName]: validateField(fieldName, value),
      }));
    }
  };

  const handleFieldBlur = (fieldName: keyof typeof defaultFormValues) => {
    setTouchedFields((previous) => ({
      ...previous,
      [fieldName]: true,
    }));

    setFieldErrors((previous) => ({
      ...previous,
      [fieldName]: validateField(fieldName, formValues[fieldName]),
    }));
  };

  const handleSubmit = () => {
    const nextErrors = {
      name: validateField("name", formValues.name),
      email: validateField("email", formValues.email),
      message: validateField("message", formValues.message),
    };

    setTouchedFields({
      name: true,
      email: true,
      message: true,
    });
    setFieldErrors(nextErrors);
  };

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
          width: "100vw",
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
        <Typography
          sx={{ ...ghibliContactTitleTypography, fontSize: "6vw", mb: 1 }}
        >
          Contact Me
        </Typography>
        <Typography sx={{ ...ghibliContactSubtitleTypography, mb: 4 }}>
          Let&apos;s connect and create something magical together.
        </Typography>

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
            value={formValues.name}
            onChange={(event) => handleFieldChange("name", event.target.value)}
            onBlur={() => handleFieldBlur("name")}
            error={touchedFields.name && Boolean(fieldErrors.name)}
            helperText={touchedFields.name ? fieldErrors.name : ""}
            sx={inputSx}
          />

          <Typography sx={{ ...ghibliContactLabelTypography, mb: 0.5 }}>
            Email
          </Typography>
          <TextField
            fullWidth
            value={formValues.email}
            onChange={(event) => handleFieldChange("email", event.target.value)}
            onBlur={() => handleFieldBlur("email")}
            error={touchedFields.email && Boolean(fieldErrors.email)}
            helperText={touchedFields.email ? fieldErrors.email : ""}
            sx={inputSx}
          />

          <Typography sx={{ ...ghibliContactLabelTypography, mb: 0.5 }}>
            Message
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={formValues.message}
            onChange={(event) => handleFieldChange("message", event.target.value)}
            onBlur={() => handleFieldBlur("message")}
            error={touchedFields.message && Boolean(fieldErrors.message)}
            helperText={touchedFields.message ? fieldErrors.message : ""}
            sx={inputSx}
          />

          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button
              variant="contained"
              onClick={handleSubmit}
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
