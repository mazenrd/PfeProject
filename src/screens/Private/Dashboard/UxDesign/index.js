import React from "react";

import { Progress } from "antd";
import { Innovation } from "assets";
import PropTypes from "prop-types";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Innovation} className="icons" />
      <h1 className="title">UX Design</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <p className="text-status">
        Waiting for your OK vefore developing your UX brief
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

const UxDesign = ({ count, maxCount }) => {
  return (
    <Card
      header={<Header />}
      body={<Body />}
      footer={<Footer count={count} maxCount={maxCount} />}
    />
  );
};

UxDesign.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  count: PropTypes.string,
  maxCount: PropTypes.string,
};

Footer.propTypes = {
  count: PropTypes.string,
  maxCount: PropTypes.string,
};

export default UxDesign;
