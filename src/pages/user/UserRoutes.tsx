import { lazy } from "react";
import { Route, Routes } from "react-router";

import { LayoutUser } from "./components";
import { PATHS } from "@/constants";
import { withSuspense } from "@/utils";

const UserPage = lazy(() => import("./views/UserPage"));
const UserFormPage = lazy(() => import("./views/UserFormPage"));

export default function UserRoutes() {
  return (
    <Routes>
      <Route element={<LayoutUser />}>
        <Route
          index
          element={withSuspense(UserPage)}
          handle={{ crumb: () => "Usuarios" }}
        />
        <Route
          path={PATHS.ID}
          element={withSuspense(UserFormPage)}
          handle={{ crumb: () => "Ver usuario" }}
        />
        <Route
          path={PATHS.CREATE}
          element={withSuspense(UserFormPage)}
          handle={{ crumb: () => "Nuevo usuario" }}
        />
        <Route
          path={`${PATHS.ID}/${PATHS.UPDATE}`}
          element={withSuspense(UserFormPage)}
          handle={{ crumb: () => "Editar usuario" }}
        />
        <Route
          path={`${PATHS.ID}/${PATHS.DELETE}`}
          element={withSuspense(UserFormPage)}
          handle={{ crumb: () => "Eliminar usuario" }}
        />
      </Route>
    </Routes>
  );
}
