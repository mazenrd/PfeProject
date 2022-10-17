import React from "react";

import { ArrowUpOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import { Dashboard } from "../../../assets";
import Chart from "../Chart";

import "./styles.scss";

const CardsWithGraph = ({ kpi }) => {
  return (
    <div className="graphCard-container">
      <div className="leftGraphCard-container">
        <img src={Dashboard} className="icons" />
        <h1 className="title">Data tracking</h1>
        <p className="dataStatText-container">
          Have a look on your Team’s KPIs.
        </p>
        <p className="dataStat-container">
          <ArrowUpOutlined /> {kpi}%
        </p>
      </div>
      <div className="rightGraphCard-container">
        <Chart />
      </div>
    </div>
  );
};

CardsWithGraph.propTypes = {
  kpi: PropTypes.string,
};

export default CardsWithGraph;
