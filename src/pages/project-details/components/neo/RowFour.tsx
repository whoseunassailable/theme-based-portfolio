import { Box, Typography } from "@mui/material";
import { COLORS_NEO_EXTENDED } from "../../../../theme/colors";
import { NeoTypographyForProjectDetailsPage } from "../../styles/NeoTypographyForProjectDetailsPage";

export const RowFour = () => {
  return (
    <Box
      display={"grid"}
      margin={0}
      p={0}
      sx={{
        gridTemplateColumns: { xs: "1fr", md: "4.9fr 0.2fr 5.1fr" },
        gridTemplateAreas: {
          xs: `"architecture-copy" "architecture-visual" "architecture-blocks"`,
          md: `"architecture-copy middle-line architecture-visual" "architecture-blocks architecture-blocks architecture-blocks"`,
        },
        px: { xs: 1.1, md: 1.4 },
        pt: { xs: 1.6, md: 2 },
        pb: { xs: 1.8, md: 2.2 },
        rowGap: 1.1,
      }}
    >
      <Box
        gridArea={"architecture-copy"}
        sx={{
          pr: { md: 1.35 },
          pl: { xs: 0.1, md: 0.35 },
        }}
      >
        <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
          The system is split into a Flutter client for readers and librarians,
          a Node.js plus MySQL backend for operational data and APIs, and a
          Python Flask ML microservice that blends XGBoost, TF-IDF cosine
          similarity, and Surprise SVD over a 100k-book recommendation dataset.
        </Typography>
      </Box>
      <Box
        sx={{
          gridArea: "middle-line",
          bgcolor: COLORS_NEO_EXTENDED.accent,
          width: "2px",
          display: { xs: "none", md: "block" },
          justifySelf: "center",
          minHeight: "100%",
        }}
      />
      <Box
        gridArea={"architecture-visual"}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(4, minmax(0, 1fr))",
          },
          alignItems: "center",
          gap: { xs: 0.75, md: 0.55 },
          pl: { md: 1.35 },
          pr: { xs: 0.1, md: 0.35 },
        }}
      >
        {["FLUTTER CLIENT", "ML SERVICE", "NODE API", "MYSQL DATA"].map(
          (node, index, array) => (
            <Box
              key={node}
              sx={{
                display: "grid",
                gridTemplateColumns: {
                  xs: "1fr",
                  md: index < array.length - 1 ? "1fr auto" : "1fr",
                },
                alignItems: "center",
                gap: { md: 0.5 },
              }}
            >
              <Box
                sx={{
                  border: "2px solid rgba(0, 191, 255, 0.62)",
                  minHeight: { xs: 54, md: 92 },
                  display: "grid",
                  placeItems: "center",
                  px: 1.15,
                  py: 1,
                  textAlign: "center",
                  background:
                    "linear-gradient(180deg, rgba(6, 26, 45, 0.36), rgba(6, 20, 34, 0.14))",
                }}
              >
                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.kpiLabel,
                    letterSpacing: "0.08em",
                  }}
                >
                  {node}
                </Typography>
              </Box>
              {index < array.length - 1 && (
                <Typography
                  sx={{
                    ...NeoTypographyForProjectDetailsPage.kpiValue,
                    fontSize: { md: "1rem" },
                    display: { xs: "none", md: "block" },
                  }}
                >
                  →
                </Typography>
              )}
            </Box>
          )
        )}
      </Box>
      <Box
        gridArea={"architecture-blocks"}
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            md: "repeat(3, minmax(0, 1fr))",
          },
          gap: 0.9,
          pt: 0.2,
        }}
      >
        <Box
          sx={{
            p: { xs: 1.45, md: 1.65 },
            minHeight: 132,
            border: "1px solid rgba(107,163,200,0.32)",
            borderRadius: "0px",
            background:
              "linear-gradient(180deg, rgba(5, 23, 40, 0.46), rgba(4, 18, 34, 0.3))",
            boxShadow: "inset 0 0 0 1px rgba(45, 226, 230, 0.06)",
          }}
        >
          <Typography sx={NeoTypographyForProjectDetailsPage.kpiLabel}>
            FLUTTER CLIENT
          </Typography>
          <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
            Role-based reader and librarian flows built with Riverpod,
            go_router, Dio, and Retrofit.
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.45, md: 1.65 },
            minHeight: 132,
            border: "1px solid rgba(107,163,200,0.32)",
            borderRadius: "0px",
            background:
              "linear-gradient(180deg, rgba(5, 23, 40, 0.46), rgba(4, 18, 34, 0.3))",
            boxShadow: "inset 0 0 0 1px rgba(45, 226, 230, 0.06)",
          }}
        >
          <Typography sx={NeoTypographyForProjectDetailsPage.kpiLabel}>
            OPERATIONAL API
          </Typography>
          <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
            Node.js and MySQL services handle users, books, libraries, reads,
            and recommendation lifecycle data.
          </Typography>
        </Box>
        <Box
          sx={{
            p: { xs: 1.45, md: 1.65 },
            minHeight: 132,
            border: "1px solid rgba(107,163,200,0.32)",
            borderRadius: "0px",
            background:
              "linear-gradient(180deg, rgba(5, 23, 40, 0.46), rgba(4, 18, 34, 0.3))",
            boxShadow: "inset 0 0 0 1px rgba(45, 226, 230, 0.06)",
          }}
        >
          <Typography sx={NeoTypographyForProjectDetailsPage.kpiLabel}>
            ML SERVICE
          </Typography>
          <Typography sx={NeoTypographyForProjectDetailsPage.bodyText}>
            Python and Flask scoring combines XGBoost, TF-IDF similarity, and
            SVD across a 100k-book training set.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
