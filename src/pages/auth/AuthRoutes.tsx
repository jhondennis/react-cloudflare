import { lazy } from "react";
import { Route, Routes } from "react-router";

import { withSuspense } from "@/utils";
import { ROUTES } from "@/constants";

const LoginPage = lazy(() => import("./views/LoginPage"));
const RegisterPage = lazy(() => import("./views/RegisterPage"));

export default function AuthRoutes() {
  return (
    <Routes>
      <Route
        path={ROUTES.LOGIN}
        element={withSuspense(LoginPage)}
        handle={{ crumb: () => "Login" }}
      />
      <Route
        path={ROUTES.REGISTER}
        element={withSuspense(RegisterPage)}
        handle={{ crumb: () => "Register" }}
      />
    </Routes>
  );
}
