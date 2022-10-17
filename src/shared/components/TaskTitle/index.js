import React from "react";

import PropTypes from "prop-types";
import "./styles.scss";
const TaskTitle = ({ data }) => {
  return (
    <td className="task_name">
      <div className={`inderctor ${data.status}`} />
      <p className="task_name-title">{data.title}</p>
    </td>
  );
};
TaskTitle.propTypes = {
  data: PropTypes.object,
};
export default TaskTitle;
