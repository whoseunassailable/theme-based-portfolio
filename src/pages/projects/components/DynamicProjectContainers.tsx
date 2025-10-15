import { Box } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { ProjectContainer } from "./ProjectContainer";

export const DynamicProjectRowContainers = () => {
  const accent = COLORS_NEO_EXTENDED.accent;
  const softGlow = COLORS_NEO_EXTENDED.glowSoft;
  const glow2 = COLORS_NEO_EXTENDED.glow2;
  return (
    <Box
      sx={{
        marginY: 10,
        display: "grid",
        gridTemplateColumns: { md: "0.5fr 3.5fr 2fr 3.5fr" },
        gridTemplateAreas: `"space-left container-1 center-space container-2"`,
      }}
    >
      <Box display="flex" gridArea="space-left" />
      <ProjectContainer
        projectStack={"Data Science"}
        nameOfProject={"Readiculous"}
        shortSummary={"Optimized library inventory"}
        icon={<AutoStoriesIcon sx={{ height: "12vw", width: "12vw" }} />}
        gridArea={"container-1"}
      />
      <Box display="flex" gridArea="center-space" />
      <ProjectContainer
        projectStack={"Data Science"}
        nameOfProject={"Uniquest"}
        shortSummary={"Admission Prediction accuracy 67%"}
        icon={<AccountBalanceIcon sx={{ height: "5vw", width: "5vw" }} />}
        gridArea={"container-2"}
      />
    </Box>
  );
};
