import React, { Component } from "react";

import { Consumer } from "./Context";

const Store = (WrappedComponent) =>
  class StoreP extends Component {
    render() {
      return (
        <Consumer>
          {(value) => (
            <WrappedComponent {...this.props} {...{ store: value }} />
          )}
        </Consumer>
      );
    }
  };

export default Store;
