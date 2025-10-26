// styles.ts
export class AboutMeAndContactStyles {
  static monoText = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    fontSize: "1rem",
    lineHeight: 1,
    letterSpacing: "0.05em",
    color: "#9BD2FF",
    textAlign: "justify",
  };

  static containerTextHeading = {
    fontFamily: `"IBM Plex Mono", ui-monospace, SFMono-Regular, Menlo, monospace`,
    textTransform: "uppercase",
    textAlign: "center",
    letterSpacing: "0.08em", // tighter blueprint look
    fontWeight: 400,
    fontSize: "0.95rem",
  };

  static heading = {
    fontFamily: `"Poppins", sans-serif`,
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#FFFFFF",
  };
}
