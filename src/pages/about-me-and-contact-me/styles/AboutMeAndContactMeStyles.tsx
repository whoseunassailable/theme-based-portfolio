import { Height } from "@mui/icons-material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

// styles.ts
export class AboutMeAndContactStyles {
  static monoText = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "0.80rem",
    lineHeight: 1,
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "justify",
  };

  static monoText2 = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "0.70rem",
    lineHeight: 1,
    p: "2vh",
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "center",
  };

  static monoText3 = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "0.70rem",
    lineHeight: 1,
    p: "2vh",
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "start",
  };

  static containerTextHeading = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "0.08em",
    fontWeight: 400,
    fontSize: "0.65rem",
  };

  static heading = {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#FFFFFF",
  };

  static labelSx = {
    fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    fontSize: 12,
    letterSpacing: 2,
    textTransform: "uppercase",
    color: COLORS_NEO_EXTENDED.heading, // or .accent for brighter
    mb: 0.75,
  };

  static inputSx = {
    mb: 2,
    height: "5vh",
    width: "20vw",
    input: {
      color: COLORS_NEO_EXTENDED.fg,
      fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    },
    textarea: {
      color: COLORS_NEO_EXTENDED.fg,
      fontFamily: "'Share Tech Mono','Roboto Mono',monospace",
    },
    "& .MuiInputBase-root": {
      height: "100%",
      width: "100%",
    },
    "& .MuiOutlinedInput-root": {
      backgroundColor: COLORS_NEO_EXTENDED.inputBg,
      "& fieldset": {
        borderColor: COLORS_NEO_EXTENDED.inputBorder,
      },
      "&:hover fieldset": {
        borderColor: COLORS_NEO_EXTENDED.linkHover,
      },
      "&.Mui-focused fieldset": {
        borderColor: COLORS_NEO_EXTENDED.accent,
        boxShadow: `0 0 0 3px ${COLORS_NEO_EXTENDED.glowSoft}`,
      },
    },
    "& .MuiFormHelperText-root": {
      color: COLORS_NEO_EXTENDED.error,
    },
  };
}
