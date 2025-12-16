import { Outlet } from "react-router";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { DashboardHeader } from "@/components";
import { useSessionStore } from "@/store";

export const PublicLayout: React.FC = () => {
  const { setSession } = useSessionStore();
  return (
    <>
      <DashboardHeader title="Dashboard Layout (Private)">
        <Button onClick={() => setSession(true)}>Login</Button>
      </DashboardHeader>

      <Toolbar sx={{ displayPrint: "none" }} />

      <Fade in={true} timeout={800}>
        <Box component="main">
          <Outlet />
        </Box>
      </Fade>
    </>
  );
};
