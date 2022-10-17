/* eslint-disable react/display-name */
import React from "react";

import { Consumer } from "./Context";

const Store = (WrappedComponent) => (props) =>
  (
    <Consumer>
      {(value) => <WrappedComponent {...props} {...{ store: value }} />}
    </Consumer>
  );

export default Store;
