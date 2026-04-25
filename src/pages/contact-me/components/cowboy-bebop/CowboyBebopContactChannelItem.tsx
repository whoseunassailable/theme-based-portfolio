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
  href: string;
}

export const CowboyBebopContactChannelItem = ({
  icon,
  label,
  number,
  href,
}: ChannelItemProps) => {
  return (
    <Box
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        ...cowboyBebopContactMeChannelItem,
        textDecoration: "none",
      }}
    >
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
