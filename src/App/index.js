import React from "react";
import { renderRoutes } from "react-router-config";
import { Switch, withRouter } from "react-router-dom";
import screens from "screens";
import { SWRConfig } from "swr";
import axiosInstance from "utils/fetcher/axiosInstance";

const App = () => {
  return (
    <SWRConfig
      value={{
        fetcher: (url) =>
          axiosInstance()
            .get(url)
            .then((res) => res.data),
      }}
    >
      <Switch>{renderRoutes(screens)}</Switch>
    </SWRConfig>
  );
};

export default withRouter(App);
