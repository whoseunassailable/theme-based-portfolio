import { Button, type ButtonProps } from "@mui/material";
import { type ReactNode } from "react";
import { COLORS_NEO_EXTENDED } from "../theme/colors";

interface NavBarButtonProps extends ButtonProps {
  children: ReactNode;
  underlineColor?: string;
}

export const NavBarButton = ({ children, ...props }: NavBarButtonProps) => {
  return (
    <Button
      {...props}
      disableRipple
      sx={{
        fontSize: "115%",
        fontWeight: 400,
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        lineHeight: 2,
        color: COLORS_NEO_EXTENDED.fg,
        position: "relative",
        transition: "all 0.2s ease-in-out",
        backgroundColor: "transparent",

        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 4,
          left: 0,
          width: "0%",
          height: "2px",
          backgroundColor: COLORS_NEO_EXTENDED.linkHover,
          transition: "width 0.3s ease-in-out",
        },

        "&:hover": {
          fontWeight: 500,
          "&::after": {
            width: "100%",
          },
        },
      }}
    >
      {children}
    </Button>
  );
};
