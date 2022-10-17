import React from "react";

import { PlusCircleOutlined } from "@ant-design/icons";
import { Select } from "antd";
import "./styles.scss";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import Button from "shared/components/Button";
// import useMediaQuery from "shared/hooks/useMediaQuery";
import { PATHS } from "utils/constants";

const { Option } = Select;

const UserStoryToolBar = () => {
  // const t = useMediaQuery("(min-width: 620px)");
  return (
    <div className="toolbar">
      <div className="userleft-toolbar">
        <Link to={PATHS.PRIVATE.DASHBOARD}>
          <BiArrowBack className="BiArrowBack" size={30} color={"black"} />
        </Link>
        <div className="userleft-toolbar-title">
          <h1>User Story</h1>
          <h3> The tasks lorem isump </h3>
        </div>
      </div>
      <div className="userright-toolbar">
        <Select defaultValue="Social App" className="select-container">
          <Option value="Github">Github</Option>
          <Option value="Gitlab">Gitlab</Option>
          <Option value="Bitbucket">Bitbucket</Option>
        </Select>
        <Button
          buttonTitle="Start new project"
          // buttonTitle={t ? "Start new project" : ""}
          buttonIcon={<PlusCircleOutlined />}
          color="secondary"
          withPadding
        />
      </div>
    </div>
  );
};

export default UserStoryToolBar;
