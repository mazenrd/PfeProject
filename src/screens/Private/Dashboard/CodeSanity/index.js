import React from "react";

import { Progress } from "antd";
import { Programming } from "assets";
import PropTypes from "prop-types";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Programming} className="icons" />
      <h1 className="title">Code Sanity</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <div className="text-status">
        We ensure your software is as solid as it can be.
        <br />
        Want to know more,<span className="actionText">click here!</span>
      </div>
    </div>
  );
};

const Footer = ({ percent }) => {
  return (
    <div className="footer-container">
      <div className="desc-container">
        <p className="text-status"> Quality Code </p>
        <p className="text-status">Solid </p>
      </div>
      <Progress percent={percent} showInfo={false} className="progress-bar" />
    </div>
  );
};

const CodeSanity = ({ percent }) => {
  return (
    <Card
      header={<Header />}
      body={<Body />}
      footer={<Footer percent={percent} />}
    />
  );
};

CodeSanity.propTypes = {
  percent: PropTypes.any,
};

Footer.propTypes = {
  percent: PropTypes.any,
};

export default CodeSanity;
