export const RENDER_TYPE = {
  ANDROID: "Android",
  IOS: "IOS",
  MICROSOFT: "Microsoft",
  WEB_RESPONSIVE: "Web Responsive",
};
export const STORAGE_KEYS = {
  ACCESS_TOKEN: "access_token",
  REFRESH_TOKEN: "refresh_token",
  SOURCE: "source",
};
export const API_PATHS = {
  AUTH: {
    LINK_SIGN_IN: "/auth/link/sign-in",
    PROVIDER_SIGN_IN: "/auth/provider/sign-in",
    GET_PROVIDER_URL: "/auth/provider_url",
    SIGN_UP: "/auth/sign-up",
    SIGN_IN: "/auth/sign-in",
    FORGOT_PASSWORD: "/auth/password/forgot",
    RESET_PASSWORD: "/auth/password/reset",
    CHANGE_PASSWORD: "/auth/password/change",
  },
  API: {
    PROJECTS: {
      GET: "/projects",
      POST: "/projects",
    },
    SERVICES: {
      GET: "/services",
      POST: "/services",
    },
    DEPENDENCISES: {
      GET: "/dependencies",
      POST: "/dependencies",
    },
  },
};
export const PATHS = {
  PRIVATE: {
    DASHBOARD: "/dashboard",
    USERSTORY: "/user-story",
    RENDERS: "/renders",
    ADMIN: {
      PROJECTS: {
        CREATE: "/project/create",
        INITIATE: "/project/initiate",
        SERVICES: {
          CREATE: "/project/:id/service",
        },
      },
      DEPENDENCISES: {
        CREATE: "/project/:projectId/service/:serviceId/dependency",
      },
    },
  },
  PUBLIC: {
    LOGIN: "/",
    REGISTER: "/register",
    SIGN_IN_WITH_PROVIDER: "/auth/:provider",
  },
};
export const AUTH_STYLE = {
  button: {
    backgroundColor: "#112B75",
  },
  forgotPassword: {
    color: "#222",
  },
  subtitle: {
    color: "#777",
    REGISTER: "/register",
  },
};

export const STORY_STATUS = {
  COMPLETED: "Completed",
  REVIEW: "Review",
  READY: "Ready",
};

export const TASK_PRIORITY = {
  HIGH: "high",
  MEDIUM: "medium",
  LOW: "low",
};

export const PRIORITY_COLORS = {
  [TASK_PRIORITY.HIGH]: "#FF0000",
  [TASK_PRIORITY.MEDIUM]: "#FEC703",
  [TASK_PRIORITY.LOW]: "#00E2FF",
};
export const MENU_ITEMS = [
  {
    title: "Notification",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Settings",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "Call",
    url: "#",
    cName: "nav-links",
  },
  {
    title: "User",
    url: "#",
    cName: "nav-links",
  },
];
export const header = ["ASSIGNE", "DUE DATE", "PRIORITY"];

export const types = [
  { key: "monolith", value: "Monolith" },
  { key: "distributed", value: "Distributed" },
];
export const technologies = [
  { key: "nodejs", value: "Node Js" },
  { key: "reactjs", value: "React Js" },
];
export const sources = [
  { key: "template", value: "Template" },
  { key: "repository", value: "Repository" },
  { key: "image", value: "Image" },
];
