import AppsIcon from "@mui/icons-material/Apps";
import CodeIcon from "@mui/icons-material/Code";
import DnsIcon from "@mui/icons-material/Dns";
import InsightsIcon from "@mui/icons-material/Insights";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { Box, Typography } from "@mui/material";
import { stackNames } from "../../constants/stackNames";

const stackIcons = {
  All: <AppsIcon sx={{ fontSize: "1rem" }} />,
  Frontend: <CodeIcon sx={{ fontSize: "1rem" }} />,
  Backend: <DnsIcon sx={{ fontSize: "1rem" }} />,
  "Data Science": <InsightsIcon sx={{ fontSize: "1rem" }} />,
  "Mobile Development": <PhoneIphoneIcon sx={{ fontSize: "1rem" }} />,
} as const;

interface BebopProjectsStackNavBarProps {
  gridName: string;
  selectedCategory: string;
  onSelect: (category: string) => void;
}

export const BebopProjectsStackNavBar = ({
  gridName,
  selectedCategory,
  onSelect,
}: BebopProjectsStackNavBarProps) => {
  return (
    <Box
      display="flex"
      gridArea={gridName}
      mt={"5vh"}
      justifyContent="flex-end"
      alignItems="flex-end"
      gap={"0.8vw"}
      flexWrap="wrap"
    >
      {stackNames.map((name) => (
        <Box
          key={name}
          onClick={() => onSelect(name)}
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 0.8,
            px: 1.35,
            py: 0.7,
            borderRadius: "999px",
            border:
              selectedCategory === name
                ? "1px solid rgba(219, 86, 62, 0.92)"
                : "1px solid rgba(230, 220, 197, 0.22)",
            color: selectedCategory === name ? "#ffcf9b" : "#f4e6c9",
            backgroundColor:
              selectedCategory === name
                ? "rgba(219, 86, 62, 0.12)"
                : "rgba(255,255,255,0.02)",
            cursor: "pointer",
            transition: "border-color 160ms ease, color 160ms ease, background-color 160ms ease",
            "&:hover": {
              borderColor: "rgba(219, 86, 62, 0.88)",
              color: "#ffcf9b",
              backgroundColor: "rgba(219, 86, 62, 0.08)",
            },
          }}
        >
          <Box
            sx={{
              display: "grid",
              placeItems: "center",
              color: "#db563e",
            }}
          >
            {stackIcons[name as keyof typeof stackIcons]}
          </Box>
          <Typography
            sx={{
              fontFamily: '"IBM Plex Mono","Roboto Mono",monospace',
              fontSize: "0.76rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              lineHeight: 1,
            }}
          >
            {name}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
