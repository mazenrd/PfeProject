import React from "react";

import RenderTab from "shared/components/RenderTab";
import RendersToolBar from "shared/components/ToolBar/RendersToolBar";
import { items } from "utils/mocks";

import "./styles.scss";

const Renders = () => {
  return (
    <div className="render-container">
      <RendersToolBar />
      <RenderTab items={items} />
    </div>
  );
};

export default Renders;
