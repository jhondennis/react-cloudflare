import { Outlet, Link } from "react-router";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";

import { DashboardHeader } from "@/components";
import { useSessionStore } from "@/store";
import { listLinks } from "../listLinks";

const ButtonLink = ({ title, to }: { title: string; to: string }) => {
  return (
    <Button
      component={Link}
      to={to}
      sx={{ color: "inherit", textDecoration: "none" }}
    >
      {title}
    </Button>
  );
};

export const MainLayout: React.FC = () => {
  const { setSession } = useSessionStore();

  return (
    <>
      <DashboardHeader title="Dashboard Layout  asdasd(Private)">
        <>
          {listLinks.map(link => (
            <ButtonLink key={link.to} title={link.title} to={link.to} />
          ))}
          <IconButton onClick={() => setSession(false)}>
            <LogoutIcon />
          </IconButton>
        </>
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
