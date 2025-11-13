import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../../theme/colors";
import { AboutMeAndContactStyles } from "../../../../../styles/AboutMeAndContactMeStyles";

interface ContainersAboutMeProps {
  heading: string;
  bodyText: string;
}

export const ContainersAboutMe = ({
  heading,
  bodyText,
}: ContainersAboutMeProps) => {
  return (
    <Box display={"grid"}>
      {/* Heading */}
      <Box
        width={"10vw"}
        border={`1px solid ${COLORS_NEO_EXTENDED.accent}`}
        sx={{
          fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
          textTransform: "uppercase",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
          placeSelf: "center",
          letterSpacing: "0.08em",
          fontWeight: 400,
          fontSize: "0.75rem",
        }}
      >
        {heading}
      </Box>

      {/* Body */}
      <Box
        border={`1px solid ${COLORS_NEO_EXTENDED.accent}`}
        height={"10vh"}
        width={"10vw"}
        sx={AboutMeAndContactStyles.monoText2}
      >
        {bodyText}
      </Box>
    </Box>
  );
};
