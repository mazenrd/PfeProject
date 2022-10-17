import React from "react";

import { Row } from "antd";
import PropTypes from "prop-types";
import RenderCard from "shared/components/RenderCard";
import { renders } from "utils/mocks";
import "./styles.scss";

const Render = ({ tabType }) => {
  return (
    <div className="wrapper">
      <Row gutter={[16]} wrap>
        {renders[tabType].map((item, index) => (
          <RenderCard item={item} key={index} />
        ))}
      </Row>
    </div>
  );
};
Render.propTypes = {
  tabType: PropTypes.string,
};

export default Render;
