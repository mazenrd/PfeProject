import React from "react";

import PropTypes from "prop-types";

import Status from "../Status";

import "./styles.scss";

const TaskState = ({ section, i, headers }) => (
  <thead>
    <tr>
      <Status status={section.status} />
      {headers?.map((header, i2) => (
        <td key={i2}>{i === 0 && header}</td>
      ))}
    </tr>
  </thead>
);

TaskState.propTypes = {
  section: PropTypes.object.isRequired,
  headers: PropTypes.array,
  i: PropTypes.number,
};

export default TaskState;
