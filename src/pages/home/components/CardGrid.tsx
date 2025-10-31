import { Box } from "@mui/material";
import { NeonCard } from "./NeonCard";
import { neonCards } from "../constants/neonCards";

export const NeoCardGrid = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gap: 2,
        gridTemplateColumns: { xs: "1fr", md: "1fr 1.66fr 1.66fr 1.67fr" },
        gridTemplateAreas: {
          xs: `"card-1" "card-2" "card-3"`,
          md: `"left-space card-1 card-2 card-3"`,
        },
        alignItems: "stretch",
      }}
    >
      <Box sx={{ gridArea: "left-space" }} />
      {neonCards.map((card, index) => (
        <NeonCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          stat={card.stat}
          gridArea={card.gridArea}
          sx={{ minHeight: 140 }}
          icon={card.icon}
        />
      ))}
    </Box>
  );
};
