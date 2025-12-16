import { Outlet, useNavigate } from "react-router";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// import { BreadcrumbsCustom } from "@/components";
import { ROUTES } from "@/constants";

export const LayoutUser = () => {
  const navigate = useNavigate();

  const handleAddUser = () => {
    navigate(ROUTES.USER.CREATE);
  };
  return (
    <Container>
      <Stack
        direction="row"
        spacing={2}
        alignItems="center"
        justifyContent="space-between"
        mb={2}
      >
        <Typography variant="h4">Layout User</Typography>
        <Button variant="contained" onClick={handleAddUser}>
          Add User
        </Button>
      </Stack>

      {/* <BreadcrumbsCustom /> */}

      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
