import { ROUTES } from "@/constants";

export const listLinks = [
  { title: "Dashboard", to: ROUTES.DASHBOARD },
  { title: "Users", to: ROUTES.USER.ROOT },
  { title: "Roles", to: ROUTES.ROLE.ROOT },
];

export const listPublicLinks = [
  { title: "Login", to: ROUTES.LOGIN },
  { title: "Register", to: ROUTES.REGISTER },
];
