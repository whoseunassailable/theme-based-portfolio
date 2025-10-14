import { Box, Typography, Chip, Divider } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import labelNames from "../constants/labelNames";

interface ExperiencedCardProps {
  heading: string;
  role: string;
  summary: string;
  metricNumber: number;
  metricInfo: string;
  upOrDownIcon: boolean;
  sx?: SxProps<Theme>;
}

export const ExperienceCard: React.FC<ExperiencedCardProps> = ({
  heading,
  role,
  summary,
  metricNumber,
  metricInfo,
  upOrDownIcon,
  sx,
}) => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "3fr 1fr",
        border: "1px solid rgba(107,163,200,0.6)",
        borderRadius: "8px",
        p: 2,
        mb: 3,
        color: "#BFE4FF",
        background: "rgba(10,20,40,0.3)",
        backdropFilter: "blur(2px)",
        gap: 2,
        alignItems: "center",
        maxWidth: "100%",
        ...sx,
      }}
    >
      {/* LEFT COLUMN */}
      <Box sx={{ display: "grid", gridTemplateRows: "auto auto", rowGap: 1 }}>
        <Box>
          <Typography
            variant="h6"
            sx={{ color: "#9BD2FF", letterSpacing: 1, fontWeight: 600 }}
          >
            {heading}
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ opacity: 0.9, fontWeight: 400, mb: 1 }}
          >
            {role}
          </Typography>
        </Box>

        <Divider />

        <Box>
          <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
            {summary}
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexWrap: "wrap",
              rowGap: 1,
            }}
          >
            {labelNames.map((nameOfLabel) => (
              <Chip
                key={nameOfLabel}
                label={nameOfLabel}
                size="small"
                sx={{ color: "#9BD2FF", border: "1px solid #6BA3C8" }}
              />
            ))}
          </Box>
        </Box>
      </Box>

      {/* RIGHT COLUMN */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderLeft: "1px solid rgba(107,163,200,0.5)",
          pl: 2,
          minHeight: "100%",
        }}
      >
        <Typography variant="h5" sx={{ color: "#9BD2FF", fontWeight: 600 }}>
          {metricNumber}%
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "#79B0D9", letterSpacing: 1 }}
        >
          {metricInfo}
        </Typography>
        {upOrDownIcon ? (
          <TrendingUpIcon sx={{ mt: 1, color: "#6BA3C8", fontSize: 32 }} />
        ) : (
          <TrendingDownIcon sx={{ mt: 1, color: "#6BA3C8", fontSize: 32 }} />
        )}
      </Box>
    </Box>
  );
};
