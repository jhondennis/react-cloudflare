import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { useSessionStore } from "@/store";

export default function RegisterPage() {
  const { setSession } = useSessionStore();

  const handleLogin = () => {
    setSession(true);
  };

  return (
    <Container>
      <Typography variant="h1">Register Page</Typography>
      <Button variant="contained" onClick={handleLogin}>
        Register
      </Button>
    </Container>
  );
}
