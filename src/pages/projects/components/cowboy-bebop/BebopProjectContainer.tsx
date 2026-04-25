import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import {
  bebopProjectSectionHeader,
  bebopProjectSectionMetaLabel,
  bebopProjectSectionStatus,
  bebopProjectSectionTag,
} from "../../../../styles/bebop-typography";

interface BebopProjectContainerProps {
  name: string;
  stack: string;
  icon: ReactNode;
  isActive: boolean;
  onSelect: () => void;
}

export const BebopProjectContainer = ({
  name,
  stack,
  icon,
  isActive,
  onSelect,
}: BebopProjectContainerProps) => {
  return (
    <Box
      onClick={onSelect}
      display={"flex"}
      flexDirection={"column"}
      flex={"0 0 clamp(240px, 28vw, 310px)"}
      minWidth={0}
      height={"clamp(300px, 42vh, 380px)"}
      bgcolor={"#99907C"}
      p={{ xs: "1.1rem", md: "1.35rem" }}
      sx={{
        cursor: "pointer",
        scrollSnapAlign: "start",
        overflow: "hidden",
      }}
    >
      <Typography
        sx={{
          ...bebopProjectSectionHeader,
          fontSize: "clamp(1.15rem, 2.15vw, 1.6rem)",
          lineHeight: 1.12,
          minHeight: "2.24em",
          maxHeight: "2.24em",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          overflowWrap: "anywhere",
        }}
      >
        {name}
      </Typography>
      <Box
        mt={{ xs: "0.85rem", md: "1rem" }}
        height={"40%"}
        width={"95%"}
        display="grid"
        sx={{
          alignItems: "start",
          justifyItems: "center",
          pt: "0.5vh",
          "& .MuiSvgIcon-root": {
            fontSize: "4.8rem",
            color: "#1E1111",
            opacity: 0.92,
            filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))",
          },
        }}
      >
        {icon}
      </Box>
      <Typography mt={{ xs: "0.85rem", md: "1rem" }} sx={bebopProjectSectionMetaLabel}>
        REWARD : 5000#
      </Typography>
      <Typography
        mt={{ xs: "0.4rem", md: "0.55rem" }}
        sx={{
          ...bebopProjectSectionTag,
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
        }}
      >
        {stack}
      </Typography>
      <Typography mt={"auto"} pt={{ xs: "1rem", md: "1.2rem" }} sx={bebopProjectSectionStatus}>
        {isActive ? "ACTIVE CASE" : "CLOSED CASE"}
      </Typography>
    </Box>
  );
};
