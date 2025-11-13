// CapabilitiesRow.tsx
import React from "react";
import { Stack } from "@mui/material";
import { CapabilityBox } from "./ChipsForStack";

export const CapabilitiesRow: React.FC = () => {
  return (
    <Stack direction="row" spacing={2}>
      <CapabilityBox title="Frontend" reward="500w" />
      <CapabilityBox title="Backend" reward="4500w" />
      <CapabilityBox title="Data Science" reward="6000w" />
      <CapabilityBox title="Mobile" reward="4000w" />
    </Stack>
  );
};
