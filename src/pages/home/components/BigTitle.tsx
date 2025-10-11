import { Box, Typography } from "@mui/material";
import React from "react";
import { COLORS_NEO_EXTENDED } from "../../../theme/colors";

interface BigTitleProps {
  title: string;
  typographyAorB: boolean;
}

export const BigTitle: React.FC<BigTitleProps> = ({
  title,
  typographyAorB,
}) => {
  const typographyA = (
    <Typography
      component="h1"
      variant="h2"
      sx={{
        lineHeight: 1.1,
        fontWeight: 700,
        fontSize: {
          xs: "2.25rem",
          sm: "2.75rem",
          md: "3.5rem",
          lg: "4rem",
        },
        mt: { xs: 1, md: 3 },
      }}
    >
      {title}
    </Typography>
  );

  const typographyB = (
    <Typography
      component="h2"
      variant="h2"
      sx={{
        lineHeight: 1.1,
        fontWeight: 800,
        color: COLORS_NEO_EXTENDED.heading,
        fontSize: {
          xs: "2.25rem",
          sm: "2.75rem",
          md: "3.5rem",
          lg: "4rem",
        },
        mt: { xs: 1, md: 0.5 },
      }}
    >
      Frontend Developer
    </Typography>
  );

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { md: "1fr 5fr " },
        gridTemplateAreas: `"space-left big-title "`,
      }}
    >
      <Box
        sx={{
          gridArea: "space-left",
        }}
      />
      <Box
        sx={{
          gridArea: "big-title",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {typographyAorB === true ? typographyA : typographyB}
      </Box>
      {/* <Box
        sx={{
          gridArea: "space-right",
        }}
      /> */}
    </Box>
  );
};
