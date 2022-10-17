import React from "react";

import { Tabs } from "antd";
import PropTypes from "prop-types";
import "./styles.scss";
import Render from "screens/Private/Renders/Render";
import TabTitle from "shared/components/TabTitle";

const { TabPane } = Tabs;

const RenderTab = ({ items }) => {
  return (
    <Tabs>
      {items.map((item, i) => (
        <TabPane tab={<TabTitle item={item} />} key={i}>
          <Render tabType={item.text} />
        </TabPane>
      ))}
    </Tabs>
  );
};

RenderTab.propTypes = {
  items: PropTypes.array,
};
export default RenderTab;
