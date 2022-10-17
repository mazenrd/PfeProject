import React from "react";

import { List } from "antd";
import "./styles.scss";
import PropTypes from "prop-types";
import { MdDone } from "react-icons/md";

const Lists = ({ items }) => {
  return (
    <List
      itemLayout="horizontal"
      dataSource={items}
      renderItem={({ title }) => (
        <List.Item>
          <MdDone size={20} fill="purple" />
          <List.Item.Meta title={title} className="textSize" />
        </List.Item>
      )}
    />
  );
};

Lists.propTypes = {
  items: PropTypes.array,
  icon: PropTypes.node,
  title: PropTypes.string,
};

export default Lists;
