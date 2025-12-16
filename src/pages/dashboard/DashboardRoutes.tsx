import { lazy } from "react";
import { Route, Routes } from "react-router";

import { withSuspense } from "@/utils";

const DashboardPage = lazy(() => import("./views/DashboardPage"));

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route
        index
        element={withSuspense(DashboardPage)}
        handle={{ crumb: () => "Dashboard" }}
      />
      <Route
        path="settings"
        element={withSuspense(DashboardPage)}
        handle={{ crumb: () => "Settings" }}
      />
    </Routes>
  );
}
