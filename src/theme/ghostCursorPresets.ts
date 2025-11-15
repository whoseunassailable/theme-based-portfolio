// ghostCursorPresets.ts (optional file)

export const harryPotterCursorPreset = {
  color: "#f3c979", // matches primary.main (candlelight gold)
  brightness: 2.35,
  bloomStrength: 1.0,
  bloomRadius: 1.4,
  bloomThreshold: 0.02,
  grainIntensity: 0.07,
  trailLength: 70,
  inertia: 0.6,
  edgeIntensity: 0.4,
  mixBlendMode: "screen" as const,
  zIndex: 1300, // above normal content, below modals if you like
};
