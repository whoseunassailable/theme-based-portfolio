import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import { COLORS_NEO_EXTENDED } from "../../theme/colors";
import { stackNames } from "./constants/stackNames";
import { STACK_TYPOGRAPHY } from "./stackTypography";

export const SearchStack = () => {
  const [activeStack, setActiveStack] = useState<string | null>(null);

  return (
    <Box
      sx={{
        mt: { xs: 2, md: 5 },
        display: "grid",
        gridTemplateColumns: { md: "0.25fr 7fr " },
        gridTemplateAreas: `"space-left toggle-button-group "`,
      }}
    >
      <Box display={"flex"} gridArea="space-left"></Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          gap: 3,
          gridArea: "toggle-button-group",
        }}
      >
        <ToggleButtonGroup
          exclusive
          value={activeStack}
          onChange={(_, v) => setActiveStack(v)}
          sx={{
            border: `2px solid ${COLORS_NEO_EXTENDED.accent}`,
            borderRadius: 1,
            width: "100%",
            "& .MuiToggleButtonGroup-grouped": {
              border: "none",
              px: 2.25,
              py: 1,
              width: "20%",
              ...STACK_TYPOGRAPHY.base,
              color: STACK_TYPOGRAPHY.base?.color,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              "& + .MuiToggleButton-root": {
                borderLeft: `2px solid ${COLORS_NEO_EXTENDED.accent}`,
              },
              "&:hover": {
                backgroundColor: "transparent",
                ...STACK_TYPOGRAPHY.emphasis,
              },
              "&.Mui-selected": {
                backgroundColor: "transparent",
                ...STACK_TYPOGRAPHY.active,
                "&:hover": {
                  backgroundColor: "transparent",
                },
              },
            },
          }}
        >
          {stackNames.map((name) => (
            <ToggleButton key={name} value={name} disableRipple>
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
