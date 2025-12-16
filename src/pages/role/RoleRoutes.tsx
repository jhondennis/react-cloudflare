import { lazy } from "react";
import { Route, Routes } from "react-router";

import { LayoutRole } from "./components";
import { PATHS } from "@/constants";
import { withSuspense } from "@/utils";

const RolePage = lazy(() => import("./views/RolePage"));
const RoleFormPage = lazy(() => import("./views/RoleFormPage"));

export default function RoleRoutes() {
  return (
    <Routes>
      <Route element={<LayoutRole />}>
        <Route
          index
          element={withSuspense(RolePage)}
          handle={{ crumb: () => "Roles" }}
        />
        <Route
          path={PATHS.ID}
          element={withSuspense(RoleFormPage)}
          handle={{ crumb: () => "Ver role" }}
        />
        <Route
          path={PATHS.CREATE}
          element={withSuspense(RoleFormPage)}
          handle={{ crumb: () => "Nuevo role" }}
        />
        <Route
          path={`${PATHS.ID}/${PATHS.UPDATE}`}
          element={withSuspense(RoleFormPage)}
          handle={{ crumb: () => "Editar role" }}
        />
        <Route
          path={`${PATHS.ID}/${PATHS.DELETE}`}
          element={withSuspense(RoleFormPage)}
          handle={{ crumb: () => "Eliminar role" }}
        />
      </Route>
    </Routes>
  );
}
