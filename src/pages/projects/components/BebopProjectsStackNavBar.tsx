import { Box } from "@mui/material";
import { stackNames } from "../constants/stackNames";
import { NavBarButton } from "../../../components/NavBarButton";
// import { NavToggleButtonGroup } from "../../../components/NavToggleButtonGroup";

interface BebopProjectsStackNavBarProps {
  gridName: string;
}

export const BebopProjectsStackNavBar = ({
  gridName,
}: BebopProjectsStackNavBarProps) => {
  return (
    <Box gridArea={gridName} justifyContent={"end"} alignItems={"end"}>
      {stackNames.map((name) => (
        <NavBarButton key={name}>{name}</NavBarButton>
      ))}
    </Box>
  );
};
