import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { cowboyBebopContactMeLabel } from "../../../../styles/bebop-typography";

const defaultFormValues = {
  senderId: "",
  uplinkAddress: "",
  messagePacket: "",
};

const validateField = (
  fieldName: keyof typeof defaultFormValues,
  value: string
) => {
  const trimmedValue = value.trim();

  if (fieldName === "senderId") {
    if (!trimmedValue) return "Please enter your sender ID.";
    if (trimmedValue.length < 2) {
      return "Sender ID must be at least 2 characters.";
    }
    return "";
  }

  if (fieldName === "uplinkAddress") {
    if (!trimmedValue) return "Please enter your uplink address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid uplink address.";
    }
    return "";
  }

  if (!trimmedValue) return "Please enter your message packet.";
  if (trimmedValue.length < 20) {
    return "Message packet must be at least 20 characters.";
  }
  return "";
};

export const CowboyBebopContactMeInputForm = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [fieldErrors, setFieldErrors] = useState(defaultFormValues);
  const [touchedFields, setTouchedFields] = useState({
    senderId: false,
    uplinkAddress: false,
    messagePacket: false,
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
      senderId: validateField("senderId", formValues.senderId),
      uplinkAddress: validateField("uplinkAddress", formValues.uplinkAddress),
      messagePacket: validateField("messagePacket", formValues.messagePacket),
    };

    setTouchedFields({
      senderId: true,
      uplinkAddress: true,
      messagePacket: true,
    });
    setFieldErrors(nextErrors);
  };

  return (
    <Box mt={"4vh"} border={`1px solid #6CF1F0`} borderRadius={"1vw"} p={"2vw"}>
      <TextFieldForCowboyBebopContactMeInputForm
        label="SENDER ID"
        value={formValues.senderId}
        onChange={(value) => handleFieldChange("senderId", value)}
        onBlur={() => handleFieldBlur("senderId")}
        error={touchedFields.senderId && Boolean(fieldErrors.senderId)}
        helperText={touchedFields.senderId ? fieldErrors.senderId : ""}
      />
      <TextFieldForCowboyBebopContactMeInputForm
        label="UPLINK ADDRESS"
        value={formValues.uplinkAddress}
        onChange={(value) => handleFieldChange("uplinkAddress", value)}
        onBlur={() => handleFieldBlur("uplinkAddress")}
        error={
          touchedFields.uplinkAddress && Boolean(fieldErrors.uplinkAddress)
        }
        helperText={touchedFields.uplinkAddress ? fieldErrors.uplinkAddress : ""}
      />
      <TextFieldForCowboyBebopContactMeInputForm
        label="MESSAGE PACKET"
        value={formValues.messagePacket}
        onChange={(value) => handleFieldChange("messagePacket", value)}
        onBlur={() => handleFieldBlur("messagePacket")}
        error={touchedFields.messagePacket && Boolean(fieldErrors.messagePacket)}
        helperText={touchedFields.messagePacket ? fieldErrors.messagePacket : ""}
        multiline
        minRows={5}
      />
      <Button
        variant="outlined"
        onClick={handleSubmit}
        sx={{ height: "8vh", width: "20vw", borderRadius: "16px" }}
      >
        <Typography fontSize={"4vh"} color="#c0392b">
          TRANSMIT
        </Typography>
      </Button>
    </Box>
  );
};

interface TextFieldForCowboyBebopContactMeInputFormProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error: boolean;
  helperText: string;
  multiline?: boolean;
  minRows?: number;
}

export const TextFieldForCowboyBebopContactMeInputForm = ({
  label,
  value,
  onChange,
  onBlur,
  error,
  helperText,
  multiline = false,
  minRows,
}: TextFieldForCowboyBebopContactMeInputFormProps) => {
  return (
    <Box sx={{ mb: "1.5vw" }}>
      <Typography sx={cowboyBebopContactMeLabel}>{label}</Typography>

      <TextField
        variant="outlined"
        fullWidth
        value={value}
        onChange={(event) => onChange(event.target.value)}
        onBlur={onBlur}
        error={error}
        helperText={helperText}
        multiline={multiline}
        minRows={minRows}
        sx={{
          mt: "0.5vw",
          "& .MuiOutlinedInput-root": {
            color: "#F5F2EB",
            fontFamily: "'Courier Prime', monospace",
            borderRadius: "14px",
            alignItems: multiline ? "flex-start" : "center",
            "& fieldset": {
              borderColor: error ? "#C74435" : "#6CF1F0",
            },
            "&:hover fieldset": {
              borderColor: error ? "#E2685B" : "#97FFFF",
            },
            "&.Mui-focused fieldset": {
              borderColor: error ? "#E2685B" : "#6CF1F0",
            },
          },
          "& .MuiInputBase-input": {
            color: "#F5F2EB",
          },
          "& .MuiFormHelperText-root": {
            ml: 0,
            mt: "0.5vw",
            fontFamily: "'Courier Prime', monospace",
            color: error ? "#F08D80" : "#97FFFF",
            letterSpacing: "0.02em",
          },
        }}
      />
    </Box>
  );
};
