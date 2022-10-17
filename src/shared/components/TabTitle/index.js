import React from "react";

import PropTypes from "prop-types";
import "./styles.scss";
const TabTitle = ({ item }) => {
  return (
    <div className="tab">
      <img src={item.icon} className="tab_icon" />
      <p className="tab_title">{item.text}</p>
    </div>
  );
};

TabTitle.propTypes = {
  item: PropTypes.object,
};
export default TabTitle;
