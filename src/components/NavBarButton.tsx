import { Button, type ButtonProps } from "@mui/material";
import { type ReactNode } from "react";

interface NavBarButtonProps extends ButtonProps {
  children: ReactNode;
}

export const NavBarButton = ({ children }: NavBarButtonProps) => {
  return (
    <Button
      sx={{
        fontSize: "115%",
        fontWeight: 400,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        lineHeight: 1,
        color: "white",
      }}
    >
      {children}
    </Button>
  );
};
