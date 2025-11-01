import { Box, Typography } from "@mui/material";
import { pageOptions } from "../../../../constants/pageOptions";

export const CowboyBebopNavbar = () => {
  return (
    <Box
      height={"10vh"}
      width={"90vw"}
      gap={"2vw"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      {pageOptions.map((pageName) => (
        <Typography
          variant="h5"
          className=".bebop-nav"
          sx={{ fontWeight: 700 }}
        >
          {pageName}
        </Typography>
      ))}
    </Box>
  );
};
