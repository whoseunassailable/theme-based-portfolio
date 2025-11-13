// CapabilityBox.tsx
import React from "react";
import { Box, Typography } from "@mui/material";

type CapabilityBoxProps = {
  title: string;
  reward: string;
};

export const CapabilityBox: React.FC<CapabilityBoxProps> = ({
  title,
  reward,
}) => {
  return (
    <Box border={`1px solid #f3e0b8`}>
      <Box
        sx={{
          backgroundColor: "#f3e0b8", // beige-ish like the poster
          border: "1px solid #f3e0b8",
          boxShadow: "0 0 0 2px #050505", // dark outline
          py: 2,
          minWidth: 180,
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            placeSelf: "center",
            fontFamily: '"Courier New", monospace',
            fontSize: "1.5vw",
            letterSpacing: 2,
            fontWeight: 700,
            color: "#111",
            mb: 0.5,
          }}
        >
          {title.toUpperCase()}
        </Typography>
      </Box>
      <Box
        sx={{
          border: "1px solid #f3e0b8",
          boxShadow: "0 0 0 2px #050505", // dark outline
          py: 2,
          minWidth: 180,
        }}
      >
        <Typography sx={{ placeSelf: "center" }}> Reward : {reward}</Typography>
      </Box>
    </Box>
  );
};
