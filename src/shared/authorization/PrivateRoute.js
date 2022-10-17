import React from "react";

import PropTypes from "prop-types";
import { Redirect, Route } from "react-router-dom";
// import { StoreContext } from "shared/store";
import { useStore } from "shared/hooks/useStore";
import { PATHS } from "utils/constants";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { accessToken } = useStore();

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!accessToken) {
          return <Redirect to={PATHS.PUBLIC.LOGIN} />;
        }
        return <Component {...props} />;
      }}
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.node.isRequired,
};

export default PrivateRoute;
