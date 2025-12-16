import { Outlet } from "react-router";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";

import { DashboardHeader } from "@/components";
import { useSessionStore } from "@/store";

export const MainLayout: React.FC = () => {
  const { setSession } = useSessionStore();

  return (
    <>
      <DashboardHeader title="Dashboard Layout (Private)">
        <Button onClick={() => setSession(false)}>Logout</Button>
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
