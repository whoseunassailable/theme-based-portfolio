// RowsOfContactChannel.tsx
import { Box } from "@mui/material";
import { cowboyBebopContactMeChannelsRow } from "../../../../styles/bebop-typography";
import { CowboyBebopContactChannelItem } from "./CowboyBebopContactChannelItem";
import { GetInTouchAttributes } from "../../constants/GetInTouchAttributes";

export const RowsOfContactChannel = () => {
  return (
    <Box sx={cowboyBebopContactMeChannelsRow}>
      {GetInTouchAttributes.map((item, index) => {
        const Icon = item.icon;

        return (
          <CowboyBebopContactChannelItem
            key={item.label}
            icon={<Icon sx={{ fontSize: "2.5vw", color: "#6CF1F0" }} />}
            label={item.label.toUpperCase()}
            number={String(index + 1).padStart(2, "0")}
            href={item.href}
          />
        );
      })}
    </Box>
  );
};
