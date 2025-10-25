import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";

export const BodyTextParagraph = () => {
  return (
    <Box
      gridArea={"paragraph"}
      minHeight={"30vh"}
      width={"30vw"}
      border={`1px solid ${COLORS_NEO_EXTENDED.accent}`}
      sx={{
        gridTemplateColumns: { xs: "1fr", md: "1fr " },
        gridTemplateAreas: {
          xs: `"paragraph"`,
        },
      }}
    ></Box>
  );
};
