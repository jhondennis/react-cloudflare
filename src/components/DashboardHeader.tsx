import { Link } from "react-router";

import AppBar, { AppBarTypeMap } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import { ThemeSwitcher } from "@/components";
import { ROUTES } from "@/constants";

interface DashboardHeaderProps extends React.PropsWithChildren {
  title?: string;
  color?: AppBarTypeMap["props"]["color"];
}

export const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title,
  children,
  color = "primary",
}) => {
  return (
    <AppBar color={color} position="fixed">
      <Toolbar sx={{ mx: { xs: 1, sm: 3 } }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            flexWrap: "wrap",
            width: "100%",
          }}
        >
          <Stack direction="row" alignItems="center">
            {title && (
              <Stack direction="row" alignItems="center">
                <Typography
                  component={Link}
                  to={ROUTES.HOME}
                  sx={{ textDecoration: "none", color: "inherit" }}
                  variant="h6"
                >
                  {title}
                </Typography>
              </Stack>
            )}
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={1}
            sx={{ marginLeft: "auto" }}
          >
            {children}
            <ThemeSwitcher />
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
