import { Typography } from "@mui/material";

interface ListOfElementsForNavBarProps {
  navbarElement: string;
}

export const ListOfElementsForNavBar = ({
  navbarElement,
}: ListOfElementsForNavBarProps) => {
  return (
    <Typography
      sx={{
        position: "absolute",
        top: "13.5vh",
        left: "50%",
        transform: "translateX(-50%)",
        color: "white",
        fontWeight: 500,
      }}
    >
      {navbarElement}
    </Typography>
  );
};
