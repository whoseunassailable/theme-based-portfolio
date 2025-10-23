import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import { useState } from "react";
import { COLORS_NEO_EXTENDED } from "../theme/colors";
import { STACK_TYPOGRAPHY } from "../pages/projects/styles/stackTypography";

interface HeadNavigatorProps {
  navigatorValues: string[];
  mt?: number;
  useSpaceLeft: boolean;
  height?: string | number;
}

export const HeadNavigator = ({
  navigatorValues,
  mt,
  useSpaceLeft,
  height,
}: HeadNavigatorProps) => {
  const [activeStack, setActiveStack] = useState<string | null>(null);

  return (
    <Box
      sx={{
        mt: mt ?? { xs: 2, md: 5 },
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: useSpaceLeft ? "0.25fr 7fr" : "1fr",
        },
        gridTemplateAreas: {
          xs: `"toggle-button-group"`,
          md: useSpaceLeft
            ? `"space-left toggle-button-group"`
            : `"toggle-button-group"`,
        },
      }}
    >
      {/* Only render the left spacer when requested */}
      {useSpaceLeft && <Box gridArea="space-left" />}

      <Box
        sx={{
          display: "flex",
          alignItems: "start",
          justifyContent: "start",
          gap: 3,
          gridArea: "toggle-button-group",
          // If you prefer to keep two columns but let the group span both when false:
          // gridColumn: useSpaceLeft ? "auto" : "1 / -1",
        }}
      >
        <ToggleButtonGroup
          exclusive
          value={activeStack}
          onChange={(_, v) => setActiveStack(v)}
          sx={{
            height: height,
            border: `2px solid ${COLORS_NEO_EXTENDED.accent}`,
            borderRadius: 1,
            width: "100%",
            "& .MuiToggleButtonGroup-grouped": {
              border: "none",
              px: 2.25,
              py: 1,
              // Consider flex: 1 instead of fixed width so any count fits:
              flex: 1,
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
              },
            },
          }}
        >
          {navigatorValues.map((name) => (
            <ToggleButton key={name} value={name} disableRipple>
              {name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
};
