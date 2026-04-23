import { Box, Typography } from "@mui/material";
import ghibliProjectsStack from "../../../../assets/ghibli_projects_stack_bar.png";
import { ghibliFilterTabTypography } from "../../../../styles/ghibli-typography";
import { stackNames } from "../../constants/stackNames";

export const SelectStack = () => {
  return (
    <Box
      sx={{
        display: "flex",
        backgroundImage: `url(${ghibliProjectsStack})`,
        backgroundSize: "100% 100%",
        placeSelf: "center",
        justifyContent: "center",
        width: "60%",
        mt: "8vh",
      }}
    >
      {stackNames.map((nameOfStack) => (
        <Typography sx={ghibliFilterTabTypography}>{nameOfStack}</Typography>
      ))}
    </Box>
  );
};
