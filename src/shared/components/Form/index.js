import React from "react";

import { Row } from "antd";
import PropTypes from "prop-types";
import "./style.scss";

const Index = ({ title, children }) => (
  <div className={"form-container"}>
    <p className={"title"}>{title}</p>
    <Row gutter={[16, 24]}>{children}</Row>
  </div>
);

Index.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Index.defaultProps = {
  title: "",
  children: <></>,
};
export default Index;
