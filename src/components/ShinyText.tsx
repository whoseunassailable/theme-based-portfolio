import * as React from "react";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";

interface ShinyTextProps {
  text: string;
  disabled?: boolean;
  speed?: number; // seconds
  className?: string;
}

const shine = keyframes`
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
`;

const ShinyText: React.FC<ShinyTextProps> = ({
  text,
  disabled = false,
  speed = 1,
  className = "",
}) => {
  return (
    <Box
      component="span"
      className={className}
      sx={{
        display: "inline-block",
        WebkitTextFillColor: "transparent",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        backgroundImage:
          "linear-gradient(120deg, rgba(45, 226, 230,1) 20%,  rgba(255,255,255,0.85) 40%)",
        backgroundSize: "200% 100%",
        animation: disabled ? "none" : `${shine} ${speed}s linear infinite`,
        lineHeight: 1.2,
      }}
    >
      {text}
    </Box>
  );
};

export default ShinyText;
