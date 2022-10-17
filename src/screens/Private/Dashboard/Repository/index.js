import React from "react";

import { CloudOutlined } from "@ant-design/icons";
import { Version } from "assets";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="repositoryHeader-container">
      <div className="rightHeader-container">
        <img src={Version} className="icons" />
        <h1 className="title">Repository</h1>
      </div>
      <div className="repositoryHbutton-container">
        <Button
          buttonIcon={<CloudOutlined />}
          buttonTitle="Connect your cloud"
        />
      </div>
    </div>
  );
};

const Body = ({ name }) => {
  return (
    <div className="body-container">
      <p className="repositoryText-status">{name} connected</p>
    </div>
  );
};

const Footer = ({ branch, mergeRequest, pipeline, icon }) => {
  return (
    <div className="repositoryButton-container">
      <Button
        buttonIcon={<img src={icon} className="footerIcons" />}
        buttonTitle={branch}
      />
      <Button
        buttonIcon={<img src={icon} className="footerIcons" />}
        buttonTitle={mergeRequest}
      />
      <Button
        buttonIcon={<img src={icon} className="footerIcons" />}
        buttonTitle={pipeline}
      />
    </div>
  );
};

const Repository = ({ name, branch, mergeRequest, pipeline, icon }) => {
  return (
    <Card
      header={<Header />}
      body={<Body name={name} />}
      footer={
        <Footer
          icon={icon}
          branch={branch}
          mergeRequest={mergeRequest}
          pipeline={pipeline}
        />
      }
    />
  );
};

Repository.propTypes = {
  name: PropTypes.string,
  branch: PropTypes.string,
  icon: PropTypes.string,
  mergeRequest: PropTypes.string,
  pipeline: PropTypes.string,
};

Body.propTypes = {
  name: PropTypes.string,
  branch: PropTypes.string,
  icon: PropTypes.string,
  mergeRequest: PropTypes.string,
  pipeline: PropTypes.string,
};

Footer.propTypes = {
  name: PropTypes.string,
  branch: PropTypes.string,
  icon: PropTypes.string,
  mergeRequest: PropTypes.string,
  pipeline: PropTypes.string,
};

export default Repository;
