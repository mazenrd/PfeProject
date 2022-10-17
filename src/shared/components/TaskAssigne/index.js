import React from "react";

import PropTypes from "prop-types";

import "./styles.scss";

const TaskAssigne = ({ data }) => {
  return (
    <td className="task_assigne">
      <img src={data.url} className="task_assigne-img" title={data.name} />
    </td>
  );
};

TaskAssigne.propTypes = {
  data: PropTypes.object,
};
export default TaskAssigne;
