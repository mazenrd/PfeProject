import React from "react";

import { PlusCircleOutlined, WindowsOutlined } from "@ant-design/icons";
import { Select } from "antd";
import { useHistory } from "react-router-dom";
import Button from "shared/components/Button";
import useMediaQuery from "shared/hooks/useMediaQuery";
import { PATHS } from "utils/constants";

import { Agile } from "../../../../assets";

import "./styles.scss";

const { Option } = Select;

const DashboardToolBar = () => {
  const t = useMediaQuery("(min-width: 562px)");
  const history = useHistory();
  return (
    <div className="toolbar">
      <div className="left-toolbar">
        <h1>Dashboard</h1>
        <h3>Good Morning Mr </h3>
      </div>
      <div className="right-toolbar">
        <Button
          buttonTitle={t ? "Collaborate" : ""}
          withPadding
          buttonIcon={<img src={Agile} className="selectImg-container" />}
        />

        <Select
          defaultValue="Social App"
          className="select-container"
          clearIcon={<WindowsOutlined />}>
          <Option value="Github">Github</Option>
          <Option value="Gitlab">Gitlab</Option>
          <Option value="Bitbucket">Bitbucket</Option>
        </Select>
        <Button
          buttonTitle={t ? "Start new project" : ""}
          buttonIcon={<PlusCircleOutlined />}
          color="secondary"
          withPadding
          onClick={() => {
            history.push(PATHS.PRIVATE.ADMIN.PROJECTS.CREATE);
          }}
        />
      </div>
    </div>
  );
};

export default DashboardToolBar;
