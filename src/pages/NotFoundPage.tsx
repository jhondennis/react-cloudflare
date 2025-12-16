import { Link } from "react-router";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { ROUTES } from "@/constants";

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack spacing={4} direction="column" sx={{ textAlign: "center" }}>
        <h1>😫 404 🚧</h1>
        <h4>
          The page you&apos;re looking for was not found or under construction.
        </h4>
        <Button variant="contained" component={Link} to={ROUTES.HOME}>
          Regresar
        </Button>
      </Stack>
    </div>
  );
};
