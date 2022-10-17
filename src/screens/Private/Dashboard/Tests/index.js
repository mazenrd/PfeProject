import React from "react";

import { FileDoneOutlined } from "@ant-design/icons";
import { Debug } from "assets";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Debug} className="icons" />
      <h1 className="title">Tests</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <p className="text-status">Is it what you are looking for ?</p>
    </div>
  );
};

const Footer = ({ done, warning, error }) => {
  return (
    <div className="fButton-container">
      <Button buttonIcon={<FileDoneOutlined />} buttonTitle={done} />
      <Button buttonIcon={<FileDoneOutlined />} buttonTitle={warning} />
      <Button buttonIcon={<FileDoneOutlined />} buttonTitle={error} />
    </div>
  );
};

const Tests = ({ done, warning, error }) => {
  return (
    <Card
      header={<Header />}
      body={<Body />}
      footer={<Footer done={done} warning={warning} error={error} />}
    />
  );
};

Tests.propTypes = {
  done: PropTypes.string,
  warning: PropTypes.string,
  error: PropTypes.string,
};

Footer.propTypes = {
  done: PropTypes.string,
  warning: PropTypes.string,
  error: PropTypes.string,
};

export default Tests;
