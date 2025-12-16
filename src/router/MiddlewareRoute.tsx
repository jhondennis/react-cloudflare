import { Navigate, Outlet } from "react-router";

interface MiddlewareRouteProps {
  isAuth: boolean;
  redirect: string;
}

export const MiddlewareRoute = ({ isAuth, redirect }: MiddlewareRouteProps) => {
  return isAuth ? <Outlet /> : <Navigate to={redirect} />;
};
