import { Navigate, Outlet, useLocation, matchPath } from "react-router";

import { ROLE_PERMISSIONS, ROLES, ROUTES } from "@/constants";

export const RouteValidation: React.FC = () => {
  const location = useLocation();
  const userStr = localStorage.getItem("user");

  if (!userStr) {
    return <Navigate to={ROUTES.LOGIN} replace />;
  }

  const startUser = JSON.parse(userStr);
  const user = startUser || { roles: [] };
  const userRoles: string[] = user.roles || [];

  // Check if Admin
  if (userRoles.includes(ROLES.ADMIN)) {
    return <Outlet />;
  }

  const currentPath = location.pathname;

  // Check permissions
  const hasAccess = userRoles.some((role: string) => {
    const permissions = ROLE_PERMISSIONS[role] || [];
    return permissions.some((pattern: string) => {
      if (pattern === "*") return true;
      return matchPath({ path: pattern, end: true }, currentPath);
    });
  });

  return hasAccess ? (
    <Outlet />
  ) : (
    <Navigate to={ROUTES.ACCESS_DENIED} replace />
  );
};
