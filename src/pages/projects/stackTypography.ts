import { COLORS_NEO_EXTENDED as C } from "../../theme/colors";

export const STACK_TYPOGRAPHY = {
  base: {
    fontFamily: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    fontWeight: 600, // sturdy, blueprint label vibe
    textTransform: "uppercase", // label/panel feel
    letterSpacing: "0.12em", // blueprint tracking
    lineHeight: 1.2,
    fontSize: { xs: 11, sm: 12, md: 12 }, // compact & consistent
    color: C.subheading, // soft cyan label
  },

  // when the pill/segment is selected
  active: {
    color: C.heading, // brighter cyan for emphasis
  },

  // hover/focus-visible states (keep it typographic)
  emphasis: {
    color: C.linkHover,
  },

  // muted/disabled state
  disabled: {
    color: C.textDisabled,
  },

  // optional tiny overline (e.g., "DATA SCIENCE / FULL STACK" captions)
  overline: {
    fontFamily: `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace`,
    fontWeight: 500,
    textTransform: "uppercase",
    letterSpacing: "0.16em",
    lineHeight: 1.15,
    fontSize: { xs: 10, sm: 10, md: 11 },
    color: C.neutral,
  },
} as const;
