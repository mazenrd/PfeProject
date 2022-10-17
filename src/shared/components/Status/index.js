import React from "react";

import PropTypes from "prop-types";
import "./styles.scss";
const Status = ({ status }) => {
  return <td className={`state ${status}`}>{status}</td>;
};

Status.propTypes = {
  status: PropTypes.string,
};
export default Status;
