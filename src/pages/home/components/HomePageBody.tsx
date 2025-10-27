import { Container } from "@mui/material";

export const HomePageBody = () => {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 8 } }}>
      <Grid container spacing={{ xs: 4, md: 6 }}>
        {/* Title + Subtitle */}
        <Grid item xs={12}>
          <Typography
            component="h1"
            variant="h2"
            sx={{
              lineHeight: 1.1,
              fontWeight: 700,
              // Mobile -> Desktop scale
              fontSize: {
                xs: "2.25rem",
                sm: "2.75rem",
                md: "3.5rem",
                lg: "4rem",
              },
              mt: { xs: 1, md: 3 },
            }}
          >
            I Build Experience As A
          </Typography>

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
        </Grid>

        {/* Sub-title */}
        <Grid item xs={12} md={10} lg={8}>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              opacity: 0.9,
              mb: { xs: 2, md: 3 },
            }}
          >
            Blending design thinking with engineering precision
            <br />
            to deliver world-class software.
          </Typography>
        </Grid>

        {/* Buttons */}
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 1.5, sm: 2 }}
            sx={{ width: "100%", maxWidth: 520 }}
          >
            <Button
              variant="outlined"
              size="large"
              fullWidth={{ xs: true, sm: false } as any}
              sx={{
                ...sxValueForButton,
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outlined"
              size="large"
              fullWidth={{ xs: true, sm: false } as any}
              sx={{
                ...sxValueForButton,
                py: { xs: 1.25, sm: 1.5 },
                fontSize: { xs: "0.95rem", md: "1rem" },
              }}
            >
              Explore Projects
            </Button>
          </Stack>
        </Grid>

        {/* Card grid */}
        <Grid item xs={12}>
          <Box
            sx={{
              mt: { xs: 1, md: 2 },
              px: { xs: 0.5, sm: 0 },
            }}
          >
            <CardGrid />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
