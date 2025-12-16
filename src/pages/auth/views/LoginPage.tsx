import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import { useSessionStore } from "@/store";

export default function LoginPage() {
  const { setSession } = useSessionStore();

  const handleLogin = () => {
    setSession(true);
  };

  return (
    <Container>
      <Box
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          width: "100%",
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h2">Login Page</Typography>
            <Button variant="contained" onClick={handleLogin}>
              Login
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
