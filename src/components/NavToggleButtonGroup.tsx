import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { STACK_TYPOGRAPHY } from "../pages/projects/styles/stackTypography";
import { COLORS_NEO_EXTENDED } from "../theme/colors";
import { useState } from "react";

interface NavToggleButtonGroupProps {
  height?: number | string;
  navigatorValues: string[];
  onSelect?: (value: string) => void;
  value?: string | null;
}

export const NavToggleButtonGroup = ({
  height,
  navigatorValues,
  onSelect,
  value,
}: NavToggleButtonGroupProps) => {
  const [activeStack, setActiveStack] = useState<string | null>(null);
  const selectedValue = value ?? activeStack;

  return (
    <ToggleButtonGroup
      exclusive
      value={selectedValue}
      onChange={(_, v) => {
        setActiveStack(v);
        if (v) onSelect?.(v);
      }}
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
            background:
              "linear-gradient(180deg, rgba(45, 226, 230, 0.2), rgba(45, 226, 230, 0.08))",
            boxShadow:
              "inset 0 0 18px rgba(45, 226, 230, 0.18), 0 0 14px rgba(45, 226, 230, 0.12)",
            ...STACK_TYPOGRAPHY.active,
          },
          "&.Mui-selected:hover": {
            background:
              "linear-gradient(180deg, rgba(45, 226, 230, 0.24), rgba(45, 226, 230, 0.1))",
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
