import { ROUTES } from "./routes";

export const ROLES = {
  ADMIN: "admin",
  ROL1: "rol1",
  ROL2: "rol2",
};

export const ROLE_PERMISSIONS = {
  [ROLES.ADMIN]: ["*"],
  [ROLES.ROL1]: [ROUTES.USER.CREATE, ROUTES.USER.ROOT],
  [ROLES.ROL2]: [ROUTES.USER.ROOT, ROUTES.ROLE.CREATE, ROUTES.ROLE.ROOT],
};
