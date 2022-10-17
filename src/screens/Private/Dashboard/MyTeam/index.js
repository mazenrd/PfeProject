import React from "react";

import { CloudOutlined } from "@ant-design/icons";
import { Avatar, Image } from "antd";
import { TeamMember } from "assets";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import Card from "shared/components/Cards";
import "./styles.scss";
import { myTeamData } from "utils/mocks";

const Header = () => {
  return (
    <div className="myTeam-container">
      <div className="leftHeader-container">
        <img src={TeamMember} className="icons" />
        <h1 className="title">My Team</h1>
      </div>
      <div className="myTeamHbutton-container">
        <Button buttonIcon={<CloudOutlined />} buttonTitle="Start a meet" />
        <Button buttonIcon={<CloudOutlined />} buttonTitle="Message" />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body-container">
      <p className="text-status">Share & Collaborate with your DEV team</p>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="fButton-container">
      {myTeamData.map((item, i) => (
        <Avatar key={i} size={"large"} src={<Image src={item.image} />} />
      ))}
    </div>
  );
};

const MyTeam = ({ image }) => {
  return (
    <Card
      header={<Header />}
      body={<Body />}
      footer={<Footer image={image} />}
    />
  );
};

MyTeam.propTypes = {
  myTeamData: PropTypes.string,
  image: PropTypes.string,
};

Footer.propTypes = {
  image: PropTypes.string,
};

export default MyTeam;
