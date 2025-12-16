import { Outlet, useNavigate } from "react-router";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// import { BreadcrumbsCustom } from "@/components";
import { ROUTES } from "@/constants";

export const LayoutRole = () => {
  const navigate = useNavigate();

  const handleAddRole = () => {
    navigate(ROUTES.ROLE.CREATE);
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
        <Typography variant="h4">Layout Role</Typography>
        <Button variant="contained" onClick={handleAddRole}>
          Add Role
        </Button>
      </Stack>

      {/* <BreadcrumbsCustom /> */}

      <Box>
        <Outlet />
      </Box>
    </Container>
  );
};
