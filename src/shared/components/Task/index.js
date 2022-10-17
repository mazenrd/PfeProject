import React from "react";

import PropTypes from "prop-types";
import "./styles.scss";

import Date from "../Date";
import Flag from "../Flag";
import Option from "../Option";
import TaskAssigne from "../TaskAssigne";
import TaskTitle from "../TaskTitle";

const Task = ({ task }) => {
  return (
    <tr className="task">
      <TaskTitle data={{ status: task.status, title: task.title }} />
      <TaskAssigne
        data={{ url: task.assignee.url, name: task.assignee.name }}
      />
      <Date />
      <Flag data={task.priority} />
      <Option />
    </tr>
  );
};

Task.propTypes = {
  task: PropTypes.object,
};

export default Task;
