import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { STACK_TYPOGRAPHY } from "../pages/projects/styles/stackTypography";
import { COLORS_NEO_EXTENDED } from "../theme/colors";
import { useState } from "react";

interface NavToggleButtonGroupProps {
  height?: number | string;
  navigatorValues: string[];
}

export const NavToggleButtonGroup = ({
  height,
  navigatorValues,
}: NavToggleButtonGroupProps) => {
  const [activeStack, setActiveStack] = useState<string | null>(null);

  return (
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
  );
};
