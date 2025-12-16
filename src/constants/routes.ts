const path = (...segments: Array<string | number>) =>
  "/" + segments.filter(Boolean).join("/");

export const PATHS = {
  LOGIN: "login",
  REGISTER: "register",
  DASHBOARD: "dashboard",
  ACCESS_DENIED: "access-denied",

  USER: "user",
  ROLE: "role",

  CREATE: "create",
  UPDATE: "update",
  DELETE: "delete",

  // Params
  ID: ":id",
};

export const ROUTES = {
  HOME: "/",
  LOGIN: `/${PATHS.LOGIN}`,
  REGISTER: `/${PATHS.REGISTER}`,
  DASHBOARD: `/${PATHS.DASHBOARD}`,
  ACCESS_DENIED: `/${PATHS.ACCESS_DENIED}`,

  USER: {
    ROOT: `/${PATHS.USER}`,
    READ: (id: string) => path(PATHS.USER, id),
    CREATE: `/${PATHS.USER}/${PATHS.CREATE}`,
    UPDATE: (id: string) => path(PATHS.USER, id, PATHS.UPDATE),
    DELETE: (id: string) => path(PATHS.USER, id, PATHS.DELETE),
  },

  ROLE: {
    ROOT: `/${PATHS.ROLE}`,
    READ: (id: string) => path(PATHS.ROLE, id),
    CREATE: `/${PATHS.ROLE}/${PATHS.CREATE}`,
    UPDATE: (id: string) => path(PATHS.ROLE, id, PATHS.UPDATE),
    DELETE: (id: string) => path(PATHS.ROLE, id, PATHS.DELETE),
  },
};
