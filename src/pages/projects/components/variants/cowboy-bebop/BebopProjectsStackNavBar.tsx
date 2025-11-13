import { Box } from "@mui/material";
import { NavBarButton } from "../../../../../components/NavBarButton";
import { stackNames } from "../../../constants/stackNames";
// import { NavToggleButtonGroup } from "../../../components/NavToggleButtonGroup";

interface BebopProjectsStackNavBarProps {
  gridName: string;
}

export const BebopProjectsStackNavBar = ({
  gridName,
}: BebopProjectsStackNavBarProps) => {
  return (
    <Box
      display="flex"
      gridArea={gridName}
      mt={"5vh"}
      justifyContent="flex-end"
      alignItems="flex-end"
    >
      {stackNames.map((name) => (
        <NavBarButton key={name}>{name}</NavBarButton>
      ))}
    </Box>
  );
};
