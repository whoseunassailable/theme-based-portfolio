import type { SxProps, Theme } from "@mui/material";

export const textFieldSx: SxProps<Theme> = {
  "& .MuiFormHelperText-root": {
    color: "#00bfff",
  },
  "& .MuiInputLabel-root": {
    color: "#00bfff",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#00bfff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#00bfff",
    },
    "&:hover fieldset": {
      borderColor: "#00bfff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#00bfff",
    },
  },
  "& .MuiSelect-icon": {
    color: "#00bfff",
  },
};

export const menuPaperSx: SxProps<Theme> = {
  backgroundColor: "transparent",
  backdropFilter: "blur(6px)",
  border: "1px solid #00bfff",
  "& .MuiMenuItem-root": {
    color: "#00bfff",
    borderBottom: "1px solid rgba(0,191,255,0.3)",
  },
  "& .MuiMenuItem-root:last-of-type": {
    borderBottom: "none",
  },
};
