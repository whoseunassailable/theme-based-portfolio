import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { AboutMeAndContactStyles } from "../../styles/AboutMeAndContactMeStyles";

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
        width={"14vw"}
        border={`1px solid ${COLORS_NEO_EXTENDED.accent}`}
        sx={AboutMeAndContactStyles.containerTextHeading}
      >
        {heading}
      </Box>

      {/* Body */}
      <Box
        border={`1px solid ${COLORS_NEO_EXTENDED.accent}`}
        height={"10vh"}
        width={"14vw"}
        sx={{
          p: "2vh",
          textAlign: "center",
          letterSpacing: "0.015em",
          lineHeight: 1.3,
          fontSize: "0.95rem",
          mx: "auto",
        }}
      >
        {bodyText}
      </Box>
    </Box>
  );
};
