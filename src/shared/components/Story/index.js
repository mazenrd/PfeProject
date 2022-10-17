import React from "react";

import { Col, Row } from "antd";
import PropTypes from "prop-types";
import { header } from "utils/constants";

import Task from "../Task";
import TaskState from "../TaskState";

import "./styles.scss";

const Story = ({ sections }) => {
  return (
    <Row>
      <Col span={24}>
        <table className="table">
          {sections.map((section, i) => (
            <React.Fragment key={i}>
              <TaskState section={section} i={i} headers={header} />
              <tbody className="table_body">
                {section.tasks.map((task, i2) => (
                  <Task key={i2} task={{ ...task, status: section.status }} />
                ))}
              </tbody>
            </React.Fragment>
          ))}
        </table>
      </Col>
    </Row>
  );
};

Story.propTypes = {
  sections: PropTypes.array,
  section: PropTypes.object,
};

export default Story;
