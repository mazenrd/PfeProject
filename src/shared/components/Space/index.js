import React from "react";

import { Row, Space } from "antd";
import PropTypes from "prop-types";
import "./style.scss";

const Space = () => <Space align="baseline">{items}</Space>;

Space.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Index.defaultProps = {
  title: "",
  children: <></>,
};
export default Index;
