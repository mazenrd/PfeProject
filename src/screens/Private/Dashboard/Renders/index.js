import React from "react";

import { Android, Apple, Innovation, Microsoft } from "assets";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="header-container">
      <img src={Innovation} className="icons" />
      <h1 className="title">Renders</h1>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <p className="text-status">Discover all the feedbacks from your team.</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="fButton-container">
      <Button
        buttonIcon={<img src={Android} className="footerIcons" />}
        buttonTitle="Android"
      />
      <Button
        buttonIcon={<img src={Apple} className="footerIcons" />}
        buttonTitle="IOS"
      />
      <Button
        buttonIcon={<img src={Microsoft} className="footerIcons" />}
        buttonTitle="Microsoft"
      />
      <Button
        buttonIcon={<img src={Microsoft} className="footerIcons" />}
        buttonTitle="Web"
      />
    </div>
  );
};

const Renders = ({ link }) => {
  return (
    <Card link={link} header={<Header />} body={<Body />} footer={<Footer />} />
  );
};

Renders.propTypes = {
  link: PropTypes.string,
};

Footer.propTypes = {
  count: PropTypes.string,
  maxCount: PropTypes.string,
};

export default Renders;
