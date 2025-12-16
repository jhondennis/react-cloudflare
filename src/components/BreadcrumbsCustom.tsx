import { useMatches, Link as RouterLink, Params } from "react-router";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export interface RouteHandle {
  crumb?: (data: Params) => React.ReactNode;
}

interface MatchWithHandle {
  id: string;
  pathname: string;
  params: Params;
  data: unknown;
  handle: RouteHandle;
}

export const BreadcrumbsCustom = () => {
  const matches = useMatches() as MatchWithHandle[];

  const crumbs = matches
    .filter(match => Boolean(match.handle?.crumb))
    .map(match => ({
      label: match.handle.crumb!(match.params),
      path: match.pathname,
    }));

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {crumbs.map((crumb, index) => {
        const isLast = index === crumbs.length - 1;

        return isLast ? (
          <Typography key={crumb.path} color="text.primary">
            {crumb.label}
          </Typography>
        ) : (
          <Link
            key={crumb.path}
            component={RouterLink}
            to={crumb.path}
            underline="hover"
            color="inherit"
          >
            {crumb.label}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
