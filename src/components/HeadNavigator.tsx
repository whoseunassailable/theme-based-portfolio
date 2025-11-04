import { Box } from "@mui/material";
import { NavToggleButtonGroup } from "./NavToggleButtonGroup";

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
        <NavToggleButtonGroup
          height={height}
          navigatorValues={navigatorValues}
        />
      </Box>
    </Box>
  );
};
