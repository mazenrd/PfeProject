import React from "react";

import { Progress } from "antd";
import { Group } from "assets";
import PropTypes from "prop-types";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Group} className="icons" />
      <h1 className="title">Brief</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <p className="text-status">
        Tell us everything, especially what you need!
      </p>
    </div>
  );
};

const Footer = ({ count, maxCount }) => {
  const progress = (count / maxCount) * 100;
  return (
    <div className="footer-container">
      <div className="desc-container">
        <p className="text-status"> Status </p>
        <p className="text-status">{`${count}/${maxCount}`}</p>
      </div>
      <Progress percent={progress} showInfo={false} className="progress-bar" />
    </div>
  );
};

const Brief = ({ count, maxCount }) => {
  return (
    <Card
      header={<Header />}
      body={<Body />}
      footer={<Footer count={count} maxCount={maxCount} />}
    />
  );
};

Brief.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.string,
  maxCount: PropTypes.string,
};

Footer.propTypes = {
  count: PropTypes.string,
  maxCount: PropTypes.string,
};

export default Brief;
