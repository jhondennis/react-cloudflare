import { Link } from "react-router";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { ROUTES } from "@/constants";
import { darkModeStore } from "@/store";

const ButtonLink = ({ title, to }: { title: string; to: string }) => {
  return (
    <Button variant="contained" color="primary" component={Link} to={to}>
      {title}
    </Button>
  );
};

export default function HomePage() {
  const { darkMode, setDarkMode } = darkModeStore();

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid size={12}>
          <Typography variant="h4" gutterBottom>
            Home Page
          </Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant="body1" gutterBottom>
            Welcome to the public home page.
          </Typography>
        </Grid>
        <Grid size={12}>
          <ButtonLink title="Go to Login" to={ROUTES.LOGIN} />
        </Grid>
        <Grid size={12}>
          <ButtonLink title="Go to Dashboard (Private)" to={ROUTES.DASHBOARD} />
        </Grid>
        <Grid size={12}>
          <ButtonLink title="Go to Users (Private)" to={ROUTES.USER.ROOT} />
        </Grid>
        <Grid size={12}>
          <ButtonLink title="Go to Roles (Private)" to={ROUTES.ROLE.ROOT} />
        </Grid>
        <Grid size={12}>
          <Button variant="contained" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? "Disable Dark Mode" : "Enable Dark Mode"}
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
