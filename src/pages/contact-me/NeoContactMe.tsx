import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import RamenDiningOutlinedIcon from "@mui/icons-material/RamenDiningOutlined";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const monoTextSx = {
  fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
  color: "#9BD2FF",
  letterSpacing: "0.03em",
};

const inputNames = ["NAME", "EMAIL", "MESSAGE"];
const defaultFormValues = {
  NAME: "",
  EMAIL: "",
  MESSAGE: "",
};

const getInTouchItems = [
  {
    label: "rohanbhandeworks@gmail.com",
    href: "mailto:rohanbhandeworks@gmail.com",
    icon: EmailOutlinedIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rohan-bhande-08091a169/",
    icon: LinkedInIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/whoseunassailable/",
    icon: GitHubIcon,
  },
];

const funNotes = [
  {
    label: "Gym enthusiast",
    icon: LocalFloristOutlinedIcon,
  },
  {
    label: "Loves exploring new cuisines",
    icon: RamenDiningOutlinedIcon,
  },
];

const validateField = (fieldName: keyof typeof defaultFormValues, value: string) => {
  const trimmedValue = value.trim();

  if (fieldName === "NAME") {
    if (!trimmedValue) return "Please enter your name.";
    if (trimmedValue.length < 2) return "Name must be at least 2 characters.";
    return "";
  }

  if (fieldName === "EMAIL") {
    if (!trimmedValue) return "Please enter your email address.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedValue)) {
      return "Please enter a valid email address.";
    }
    return "";
  }

  if (!trimmedValue) return "Please enter your message.";
  if (trimmedValue.length < 20) return "Message must be at least 20 characters.";
  return "";
};

export const NeoContactMe = () => {
  const [formValues, setFormValues] = useState(defaultFormValues);
  const [fieldErrors, setFieldErrors] = useState(defaultFormValues);
  const [touchedFields, setTouchedFields] = useState<Record<keyof typeof defaultFormValues, boolean>>({
    NAME: false,
    EMAIL: false,
    MESSAGE: false,
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
      NAME: validateField("NAME", formValues.NAME),
      EMAIL: validateField("EMAIL", formValues.EMAIL),
      MESSAGE: validateField("MESSAGE", formValues.MESSAGE),
    };

    setTouchedFields({
      NAME: true,
      EMAIL: true,
      MESSAGE: true,
    });
    setFieldErrors(nextErrors);
  };

  return (
    <Box
      id="contact-section"
      sx={{
        width: "min(1180px, 92vw)",
        minHeight: "100vh",
        mx: "auto",
        my: { xs: "12vh", md: "16vh" },
        px: { xs: 2, md: 3 },
        py: { xs: 2, md: 3 },
        position: "relative",
        display: "grid",
        rowGap: { xs: 2.5, md: 3 },
        backgroundImage: `
          linear-gradient(rgba(120, 180, 220, 0.06) 1px, transparent 1px),
          linear-gradient(90deg, rgba(120, 180, 220, 0.06) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
        backgroundColor: "#081726",
        borderLeft: "1px solid rgba(45, 226, 230, 0.58)",
        borderRight: "1px solid rgba(45, 226, 230, 0.58)",
        "::before": {
          content: '""',
          position: "absolute",
          top: 28,
          left: 0,
          right: 0,
          height: "1px",
          bgcolor: "rgba(45, 226, 230, 0.58)",
        },
        "::after": {
          content: '""',
          position: "absolute",
          bottom: 26,
          left: 0,
          right: 0,
          height: "1px",
          bgcolor: "rgba(45, 226, 230, 0.58)",
        },
      }}
    >
      <Typography
        sx={{
          fontFamily: '"IBM Plex Sans","Inter",sans-serif',
          fontSize: { xs: "2.9rem", sm: "4rem", md: "5.55rem" },
          lineHeight: 0.94,
          textTransform: "uppercase",
          letterSpacing: "0.035em",
          fontWeight: 700,
          textAlign: "center",
          color: "transparent",
          WebkitTextStroke: "1.5px rgba(100, 195, 255, 0.92)",
          textShadow: "0 0 12px rgba(0, 191, 255, 0.08)",
          pt: { xs: 2.5, md: 4 },
          pb: { xs: 0.5, md: 1 },
          zIndex: 1,
        }}
      >
        Let&apos;s Build Something
        <br />
        Together
      </Typography>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1fr auto 1fr" },
          alignItems: "stretch",
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            borderTop: { xs: "none", md: "1px solid rgba(45, 226, 230, 0.58)" },
          }}
        />
        <Box
          sx={{
            minWidth: { xs: "auto", md: 440 },
            px: { xs: 2.5, md: 4 },
            py: { xs: 1.1, md: 1.3 },
            border: "1px solid rgba(45, 226, 230, 0.58)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Typography
            sx={{
              ...monoTextSx,
              fontSize: { xs: "2.2rem", md: "3.25rem" },
              lineHeight: 1,
              letterSpacing: "0.045em",
              textTransform: "uppercase",
            }}
          >
            Contact Me
          </Typography>
        </Box>
        <Box
          sx={{
            borderTop: { xs: "none", md: "1px solid rgba(45, 226, 230, 0.58)" },
          }}
        />
      </Box>

      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.45fr 2px 0.9fr" },
          alignItems: "start",
          minHeight: { md: 560 },
          zIndex: 1,
        }}
      >
        <Box
          sx={{
            px: { xs: 1.5, md: 3.5 },
            pt: { xs: 2, md: 2.4 },
            pb: { xs: 2.2, md: 1.6 },
          }}
        >
          <Box display="grid" gap={2.3}>
            {inputNames.map((name) => {
              const isMessage = name === "MESSAGE";
              const fieldName = name as keyof typeof defaultFormValues;
              const showError = touchedFields[fieldName] && Boolean(fieldErrors[fieldName]);

              return (
                <Box key={name}>
                  <Typography
                    sx={{
                      ...monoTextSx,
                      fontSize: { xs: "0.95rem", md: "1rem" },
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      mb: 0.7,
                    }}
                  >
                    {name}
                  </Typography>
                  <TextField
                    fullWidth
                    multiline={isMessage}
                    minRows={isMessage ? 5 : 1}
                    variant="outlined"
                    value={formValues[fieldName]}
                    onChange={(event) =>
                      handleFieldChange(fieldName, event.target.value)
                    }
                    onBlur={() => handleFieldBlur(fieldName)}
                    error={showError}
                    sx={{
                      "& .MuiInputBase-root": {
                        ...monoTextSx,
                        fontSize: "1rem",
                        borderRadius: 0,
                        backgroundColor: "rgba(7, 24, 38, 0.22)",
                        alignItems: isMessage ? "flex-start" : "center",
                      },
                      "& .MuiOutlinedInput-input": {
                        px: 1.6,
                        py: isMessage ? 1.35 : 1.1,
                      },
                      "& .MuiOutlinedInput-root textarea": {
                        px: 0,
                        py: 0,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: showError
                          ? "rgba(255, 140, 122, 0.95)"
                          : "rgba(45, 226, 230, 0.72)",
                      },
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: showError
                            ? "rgba(255, 140, 122, 0.95)"
                            : "rgba(45, 226, 230, 0.9)",
                        },
                      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: showError
                            ? "rgba(255, 140, 122, 0.98)"
                            : "rgba(45, 226, 230, 0.95)",
                        },
                    }}
                  />
                  {showError && (
                    <Typography
                      sx={{
                        ...monoTextSx,
                        color: "#ffb2a7",
                        fontSize: { xs: "0.88rem", md: "0.92rem" },
                        mt: 0.85,
                      }}
                    >
                      + {fieldErrors[fieldName]}
                    </Typography>
                  )}
                </Box>
              );
            })}
          </Box>

          <Box
            sx={{
              display: "grid",
              justifyItems: "center",
              mt: { xs: 2.2, md: 2.8 },
            }}
          >
            <Button
              onClick={handleSubmit}
              sx={{
                ...monoTextSx,
                minWidth: 146,
                borderRadius: 0,
                textTransform: "uppercase",
                letterSpacing: "0.16em",
                border: "1px solid rgba(45, 226, 230, 0.72)",
                px: 3.8,
                py: 1,
              }}
            >
              Send
            </Button>
          </Box>

          <Typography
            sx={{
              ...monoTextSx,
              fontSize: { xs: "0.88rem", md: "0.94rem" },
              mt: { xs: 2.4, md: 3.2 },
              letterSpacing: "0.06em",
            }}
          >
            * ◊ ↓ ↘ ↔ ↩
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "none", md: "block" },
            bgcolor: "rgba(45, 226, 230, 0.58)",
            minHeight: "100%",
          }}
        />

        <Box
          sx={{
            px: { xs: 1.5, md: 3.2 },
            pt: { xs: 1, md: 3 },
            pb: { xs: 2.2, md: 1.6 },
          }}
        >
          <Typography
            sx={{
              ...monoTextSx,
              fontSize: { xs: "1.1rem", md: "1.18rem" },
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              mb: 0.55,
            }}
          >
            Get In Touch
          </Typography>
          <Box
            sx={{
              width: 172,
              height: "1px",
              bgcolor: "rgba(45, 226, 230, 0.58)",
              mb: 2.8,
            }}
          />

          <Box display="grid" gap={3.2}>
            {getInTouchItems.map(({ label, href, icon: Icon }) => (
              <Box
                key={label}
                component="a"
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 1.5,
                  alignItems: "center",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    display: "grid",
                    placeItems: "center",
                    border: "1px solid rgba(45, 226, 230, 0.72)",
                    color: "#9BD2FF",
                  }}
                >
                  <Icon sx={{ fontSize: "1.7rem" }} />
                </Box>
                <Typography
                  sx={{
                    ...monoTextSx,
                    fontSize: { xs: "1rem", md: "1rem" },
                    lineHeight: 1.35,
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box
            sx={{
              display: "grid",
              gap: 1.35,
              mt: { xs: 3, md: 4.3 },
            }}
          >
            {funNotes.map(({ label, icon: Icon }) => (
              <Box
                key={label}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "auto 1fr",
                  gap: 1.2,
                  alignItems: "start",
                }}
              >
                <Box sx={{ color: "#9BD2FF", pt: 0.1 }}>
                  <Icon sx={{ fontSize: "1.55rem" }} />
                </Box>
                <Typography
                  sx={{
                    ...monoTextSx,
                    fontSize: { xs: "1rem", md: "1rem" },
                    lineHeight: 1.45,
                    maxWidth: "15ch",
                  }}
                >
                  {label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

    </Box>
  );
};
