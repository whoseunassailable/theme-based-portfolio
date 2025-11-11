import { Chip, type SxProps, type Theme } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import labelNames from "../../../work-experience/constants/labelNames";

interface ProjectNameAndDetailsProps {
  title: string;
  subtitle: string;
  titleStyle: SxProps<Theme>;
  subTitleStyle: SxProps<Theme>;
  projectChipIcons: boolean;
}

export const ProjectNameAndDetails = ({
  title,
  titleStyle,
  subtitle,
  subTitleStyle,
  projectChipIcons,
}: ProjectNameAndDetailsProps) => {
  return (
    <Box
      display={"grid"}
      sx={{
        gridArea: "project-detail-container",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography sx={titleStyle}>{title}</Typography>
      <Typography sx={subTitleStyle} pr={"5vw"} pb={"5vw"}>
        {subtitle}
      </Typography>
      {projectChipIcons && (
        <Box
          sx={{
            width: "50%",
            display: "flex",
            gap: 1, // spacing between rows
            maxWidth: 520, // adjust as you like (remove the 10vw clamp)
          }}
        >
          {labelNames.map((label) => (
            <Chip
              key={label}
              label={label}
              size="small"
              sx={{
                width: "50%", // expand across the container
                borderRadius: "9999px", // pill shape
                border: "1px solid #6BA3C8",
                color: "#9BD2FF",
                justifyContent: "center", // center the label text
              }}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
