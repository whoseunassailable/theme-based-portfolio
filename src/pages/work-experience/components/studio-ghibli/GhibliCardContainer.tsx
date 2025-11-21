import { Paper } from "@mui/material";

type GhibliCardContainerProps = {
  children?: React.ReactNode;
};

export const GhibliCardContainer: React.FC<GhibliCardContainerProps> = ({
  children,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        position: "relative",
        p: 2.5,
        borderRadius: 3, // ~24px
        // base cream color
        bgcolor: "#f5e1b8",
        // subtle border like the illustration
        border: "1px solid #d3b58d",
        // soft drop shadow
        boxShadow: "0 4px 0 rgba(0,0,0,0.08)",
        // “watercolor” feel via gradient + texture-ish noise
        backgroundImage:
          "linear-gradient(180deg, rgba(255,255,255,0.4), transparent)",
      }}
    >
      {children}
    </Paper>
  );
};
