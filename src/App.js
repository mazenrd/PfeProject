import React from "react";

import { renderRoutes } from "react-router-config";
import { Switch, BrowserRouter } from "react-router-dom";
import screens from "screens";
// import MainLayout from "shared/components/Layout/Private/index-c";
import "./App.scss";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch> {renderRoutes(screens)}</Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
