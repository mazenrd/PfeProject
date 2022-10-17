import { Col, Layout, Row } from "antd";
import Icon from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import useWindowSize from "utils/hooks/useWindowSize";
import Sider from "../Sider";

const { Content } = Layout;

export default ({ component, menus }) => {
  const WrappedComponent = component;
  return (props) => {
    const width = useWindowSize()[0];
    const [display, setDisplay] = useState(width <= 576 ? "none" : "block");

    useEffect(() => {
      if (width > 576) {
        return setDisplay("block");
      }
      return setDisplay("none");
    }, [width]);

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider display={display} menus={menus} />
        <Layout>
          <Content className="main__layout">
            <div
              style={{ cursor: "pointer", alignItems: "left", display: "flex" }}
              onClick={() => {
                if (display === "none") {
                  return setDisplay("block");
                }
                return setDisplay("none");
              }}>
              <Icon
                type={display === "none" ? "menu-unfold" : "menu-fold"}
                style={{
                  fontSize: "24px",
                  marginRight: 12,
                  display: width <= 576 ? "block" : "none",
                }}
              />
            </div>
            <Row>
              <Col xs={{ span: 24 }} sm={{ span: 24 }} xl={{ span: 22 }}>
                <WrappedComponent {...props} />
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    );
  };
};
