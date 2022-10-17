import PrivateRoute from "shared/authorization/PrivateRoute";
import Layout from "shared/components/Layout/Private";
import { PATHS } from "utils/constants";

import Create from "./Admin/Project/Create";
import Initiate from "./Admin/Project/Initiate";
import CreateService from "./Admin/Service/Create";
import Dashboard from "./Dashboard";
import Renders from "./Renders";
import UserStory from "./Userstory";

const routes = [
  {
    path: PATHS.PRIVATE.DASHBOARD,
    exact: true,
    component: Layout(Dashboard),
  },

  {
    path: PATHS.PRIVATE.USERSTORY,
    exact: true,
    component: Layout(UserStory),
  },
  {
    path: PATHS.PRIVATE.RENDERS,
    exact: true,
    component: Layout(Renders),
  },
  {
    path: PATHS.PRIVATE.ADMIN.PROJECTS.INITIATE,
    exact: true,
    component: Layout(Initiate),
  },
  {
    path: PATHS.PRIVATE.ADMIN.PROJECTS.CREATE,
    exact: true,
    component: Layout(Create),
  },
  {
    path: PATHS.PRIVATE.ADMIN.PROJECTS.SERVICES.CREATE,
    exact: true,
    component: Layout(CreateService),
  },
];

export default routes.map(({ component, ...rest }) => {
  return {
    component: () =>
      PrivateRoute({
        component,
      }),
    ...rest,
  };
});
