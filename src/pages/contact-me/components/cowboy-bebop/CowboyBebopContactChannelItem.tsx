// CowboyBebopContactChannelItem.tsx
import { Box, Typography } from "@mui/material";
import {
  cowboyBebopContactMeChannelItem,
  cowboyBebopContactMeChannelNumber,
} from "../../../../styles/bebop-typography";

interface ChannelItemProps {
  icon: React.ReactNode;
  label: string;
  number?: string;
}

export const CowboyBebopContactChannelItem = ({
  icon,
  label,
  number,
}: ChannelItemProps) => {
  return (
    <Box sx={cowboyBebopContactMeChannelItem}>
      {icon}

      <Typography sx={{ color: "#6CF1F0", letterSpacing: "0.15vw" }}>
        {label}
      </Typography>

      {number && (
        <Typography sx={cowboyBebopContactMeChannelNumber}>{number}</Typography>
      )}
    </Box>
  );
};
