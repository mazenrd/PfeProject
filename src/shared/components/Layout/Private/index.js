import React from "react";

import { Layout as LayoutBase } from "antd";
import "./styles.scss";
import Header from "shared/components/Layout/Private/Header";
const { Content } = LayoutBase;

const Component = (WrappedComponent) => {
  const Layout = () => {
    return (
      <LayoutBase className="layout-private-wrapper">
        <Content className="layout-private">
          <Header />
          <div className="container">
            <WrappedComponent />
          </div>
        </Content>
      </LayoutBase>
    );
  };
  return Layout;
};

export default Component;
