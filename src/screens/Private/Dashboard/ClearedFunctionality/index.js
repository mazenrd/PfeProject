import React from "react";

import { Progress } from "antd";
import { ResponsiveDesign } from "assets";
import PropTypes from "prop-types";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img src={ResponsiveDesign} className="icons" />
      <h1 className="title">Cleared functionality</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <p className="text-status">Follow all the deliveries of your team !</p>
    </div>
  );
};

const Footer = ({ count }) => {
  return (
    <div className="footer-container">
      <div className="desc-container">
        <p className="text-status"> Status </p>
        <p className="text-status">{count} functionality done</p>
      </div>
      <Progress percent={count} showInfo={false} className="progress-bar" />
    </div>
  );
};

const ClearedFunctionality = ({ count }) => {
  return (
    <Card
      header={<Header />}
      body={<Body />}
      footer={<Footer count={count} />}
    />
  );
};

ClearedFunctionality.propTypes = {
  count: PropTypes.string,
};

Footer.propTypes = {
  count: PropTypes.string,
};

export default ClearedFunctionality;
