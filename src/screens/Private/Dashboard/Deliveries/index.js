import React from "react";

import { CloudOutlined } from "@ant-design/icons";
import { Progress } from "antd";
import { Deployment } from "assets";
import PropTypes from "prop-types";
import Button from "shared/components/Button";
import Card from "shared/components/Cards";

import "./styles.scss";

const Header = () => {
  return (
    <div className="deliveriesHeader-container">
      <div className="rightHeader-container">
        <img src={Deployment} className="icons" />
        <h1 className="title">Deliveries</h1>
      </div>
      <div className="deliveriesHbutton-container">
        <Button
          buttonIcon={<CloudOutlined />}
          buttonTitle="Connect your cloud"
        />
      </div>
    </div>
  );
};

const Body = ({ date }) => {
  return (
    <div className="body-container">
      <div className="textDeliveries-status">
        Follow all the deliveries of your team ! <br />
        Next deploy:{date}
      </div>
      <div className="deliveriesBbutton-container">
        <Button buttonTitle="Technical debt" />
      </div>
    </div>
  );
};

const Footer = ({ percentage }) => {
  return (
    <div className="delivProg-container">
      <div className="deliveriesLeftProgress-container">
        <Button
          buttonIcon={<CloudOutlined />}
          buttonTitle="Notify deployment"
        />
      </div>
      <div className="rightProgress-container">
        <div className="desc-container">
          <p className="text-status"> Status </p>
          <p className="text-status">{percentage}%</p>
        </div>
        <Progress
          percent={percentage}
          showInfo={false}
          className="progress-bar"
        />
      </div>
    </div>
  );
};

const Deliveries = ({ percentage, date }) => {
  return (
    <Card
      header={<Header />}
      body={<Body date={date} />}
      footer={<Footer percentage={percentage} />}
    />
  );
};

Deliveries.propTypes = {
  percentage: PropTypes.any,
  date: PropTypes.any,
};
Body.propTypes = {
  date: PropTypes.any,
};

Footer.propTypes = {
  percentage: PropTypes.any,
};

export default Deliveries;
