import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router";

// import { RouteValidation } from "./RouteValidation";
import { AccessDeniedPage } from "../pages/AccessDeniedPage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ROUTES, PATHS } from "../constants/routes";
import { MiddlewareRoute } from "./MiddlewareRoute";
import { withSuspense } from "../utils";
import { useSessionStore } from "@/store";
import { MainLayout, PublicLayout } from "@/layouts";

const DashboardRoutes = lazy(() => import("@/pages/dashboard/DashboardRoutes"));
const HomePage = lazy(() => import("@/pages/HomePage"));
const AuthRoutes = lazy(() => import("@/pages/auth/AuthRoutes"));
const UserRoutes = lazy(() => import("@/pages/user/UserRoutes"));
const RoleRoutes = lazy(() => import("@/pages/role/RoleRoutes"));

export const ReactRouterProvider = () => {
  const { session } = useSessionStore();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path={ROUTES.HOME} element={withSuspense(HomePage)} />
          <Route path={ROUTES.ACCESS_DENIED} element={<AccessDeniedPage />} />

          <Route
            element={
              <MiddlewareRoute isAuth={!session} redirect={ROUTES.DASHBOARD} />
            }
          >
            <Route path="/*" element={<AuthRoutes />} />
          </Route>
        </Route>

        <Route
          element={<MiddlewareRoute isAuth={session} redirect={ROUTES.LOGIN} />}
        >
          <Route element={<MainLayout />}>
            {/* <Route element={<RouteValidation />}> */}
            <Route
              path={`${ROUTES.DASHBOARD}/*`}
              element={<DashboardRoutes />}
            />

            <Route path={`${PATHS.USER}/*`} element={<UserRoutes />} />
            <Route path={`${PATHS.ROLE}/*`} element={<RoleRoutes />} />

            {/* </Route> */}
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};
