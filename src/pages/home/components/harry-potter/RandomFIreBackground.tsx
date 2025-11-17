import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import harryPotterFire from "./../../../../assets/burning_fire.gif";

type FirePosition = {
  top: string; // e.g. "20%"
  left: string; // e.g. "65%"
  size: string; // e.g. "120px"
};

const createRandomFirePositions = (count: number): FirePosition[] =>
  Array.from({ length: count }, () => ({
    top: `${10 + Math.random() * 70}%`, // keep inside viewport a bit
    left: `${5 + Math.random() * 90}%`,
    size: `${60 + Math.random() * 80}px`,
  }));

export const RandomFireBackground = ({ count = 6 }: { count?: number }) => {
  const [fires, setFires] = useState<FirePosition[]>([]);

  useEffect(() => {
    setFires(createRandomFirePositions(count));
  }, [count]);

  return (
    <>
      {fires.map((fire, index) => (
        <Box
          key={index}
          component="img"
          src={harryPotterFire}
          sx={{
            position: "absolute",
            top: fire.top,
            left: fire.left,
            width: fire.size,
            height: "auto",
            pointerEvents: "none",
            zIndex: 0, // behind main content
          }}
        />
      ))}
    </>
  );
};
