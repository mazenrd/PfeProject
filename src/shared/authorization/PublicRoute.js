import React from "react";

import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
// import { StoreContext } from "shared/store";
import { useStore } from "shared/hooks/useStore";
import { PATHS } from "utils/constants";

const authRoutes = Object.values(PATHS.PUBLIC);
const PublicRoute = ({ component: Component, ...rest }) => {
  const { accessToken } = useStore();
  return (
    <Route
      {...rest}
      render={(props) => {
        const {
          // eslint-disable-next-line react/prop-types
          match: { path },
        } = props;
        if (accessToken && authRoutes.includes(path)) {
          return <Redirect to={PATHS.PRIVATE.DASHBOARD} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

PublicRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PublicRoute;
