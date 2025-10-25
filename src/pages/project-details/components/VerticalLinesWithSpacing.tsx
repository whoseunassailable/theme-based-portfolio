import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

interface VerticalLinesWithSpacingProps {
  gridAreaNames: string[];
}

export const VerticalLinesWithSpacing = ({
  gridAreaNames,
}: VerticalLinesWithSpacingProps) => {
  return (
    <>
      <Box
        sx={{ gridArea: gridAreaNames[0], bgcolor: COLORS_NEO_EXTENDED.accent }}
      />
      <Box sx={{ gridArea: gridAreaNames[1] }} />
      <Box
        sx={{ gridArea: gridAreaNames[2], bgcolor: COLORS_NEO_EXTENDED.accent }}
      />
    </>
  );
};
