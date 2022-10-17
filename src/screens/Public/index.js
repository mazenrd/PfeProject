import PublicRoute from "shared/authorization/PublicRoute";
import { PATHS } from "utils/constants";

import Redirection from "./Auth/Redirection";
import Login from "./Login";
import Register from "./Register";

const routes = [
  {
    path: PATHS.PUBLIC.LOGIN,
    exact: true,
    component: Login,
  },
  {
    path: PATHS.PUBLIC.SIGN_IN_WITH_PROVIDER,
    exact: false,
    component: Redirection,
  },
  { path: PATHS.PUBLIC.REGISTER, exact: true, component: Register },
];

export default routes.map(({ component, ...rest }) => {
  return {
    component: () =>
      PublicRoute({
        component,
      }),
    ...rest,
  };
});
