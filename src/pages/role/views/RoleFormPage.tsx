import { useLocation, useParams } from "react-router";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

export default function RoleFormPage() {
  const { id } = useParams();
  const location = useLocation();

  const isCreate = location.pathname.includes("/create");
  const isDelete = location.pathname.includes("/delete");
  const isUpdate = !isCreate && !isDelete; // OR check ID presence

  return (
    <Container
      style={{
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h1">
        {isCreate && "Create Role"}
        {isUpdate && `Update Role ${id}`}
        {isDelete && `Delete Role ${id}`}
      </Typography>
      <Typography variant="body1">Form content goes here...</Typography>
    </Container>
  );
}
