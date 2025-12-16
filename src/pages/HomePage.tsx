import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HomePage() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography variant="h3" gutterBottom>
          Bienvenido
        </Typography>

        <Typography variant="body1" sx={{ mb: 3 }}>
          Esta es una home page sencilla hecha con React y MUI.
        </Typography>
      </Box>
    </Container>
  );
}
