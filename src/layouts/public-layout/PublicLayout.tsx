import { Outlet, Link } from "react-router";

import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { DashboardHeader } from "@/components";
import { useSessionStore } from "@/store";
import { listLinks, listPublicLinks } from "../listLinks";

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

export const PublicLayout: React.FC = () => {
  const { session } = useSessionStore();
  return (
    <>
      <DashboardHeader title="Public Layout (Public)">
        {session
          ? listLinks.map(link => (
              <ButtonLink key={link.to} title={link.title} to={link.to} />
            ))
          : listPublicLinks.map(link => (
              <ButtonLink key={link.to} title={link.title} to={link.to} />
            ))}
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
