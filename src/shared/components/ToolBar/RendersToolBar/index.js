import React from "react";

import { Select } from "antd";
import "./styles.scss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import { PATHS } from "utils/constants";

const { Option } = Select;

const RendersToolBar = () => {
  return (
    <div className="toolbar">
      <div className="renderleft-toolbar">
        <Link to={PATHS.PRIVATE.DASHBOARD}>
          <BiArrowBack className="BiArrowBack" size={30} color={"black"} />
        </Link>
        <div className="renderleft-toolbar-title">
          <h1>Renders</h1>
          <h3> Discover all the feedbacks from your team. </h3>
        </div>
      </div>
      <div className="renderright-toolbar">
        <Select defaultValue="Social App" className="select-container">
          <Option value="Github">Github</Option>
          <Option value="Gitlab">Gitlab</Option>
          <Option value="Bitbucket">Bitbucket</Option>
        </Select>
      </div>
    </div>
  );
};

export default RendersToolBar;
