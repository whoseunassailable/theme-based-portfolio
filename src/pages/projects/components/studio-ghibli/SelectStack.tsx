import { Box, Button } from "@mui/material";
import ghibliProjectsStack from "../../../../assets/ghibli_projects_stack_bar.png";
import { ghibliFilterTabTypography } from "../../../../styles/ghibli-typography";
import { stackNames } from "../../constants/stackNames";

type Props = {
  selectedStack: string;
  onSelectStack: (stackName: string) => void;
};

export const SelectStack = ({ selectedStack, onSelectStack }: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${ghibliProjectsStack})`,
        backgroundSize: "100% 100%",
        backgroundRepeat: "no-repeat",
        width: { xs: "min(94vw, 760px)", md: "min(72vw, 840px)" },
        minHeight: { xs: 58, md: 70 },
        mt: { xs: 2.2, md: 3 },
        mx: "auto",
        px: { xs: 1.4, md: 2.1 },
      }}
    >
      {stackNames.map((nameOfStack) => {
        const isSelected = nameOfStack === selectedStack;

        return (
          <Button
            key={nameOfStack}
            onClick={() => onSelectStack(nameOfStack)}
            disableRipple
            sx={{
              ...ghibliFilterTabTypography,
              flex: 1,
              minWidth: 0,
              px: { xs: 0.5, md: 1 },
              py: 0.8,
              borderRadius: 0,
              color: isSelected ? "#3f3027" : "rgba(82, 62, 49, 0.72)",
              backgroundColor: "transparent",
              boxShadow: "none",
              justifyContent: "center",
              textAlign: "center",
              "&::after": isSelected
                ? {
                    content: '""',
                    position: "absolute",
                    left: "22%",
                    right: "22%",
                    bottom: 6,
                    height: "1px",
                    backgroundColor: "rgba(97, 73, 51, 0.8)",
                  }
                : {},
              "&:hover": {
                backgroundColor: "transparent",
              },
              "&:focus": {
                outline: "none",
              },
              "&:focus-visible": {
                outline: "none",
              },
            }}
          >
            {nameOfStack}
          </Button>
        );
      })}
    </Box>
  );
};
