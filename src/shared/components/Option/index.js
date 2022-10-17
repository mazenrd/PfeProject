import React from "react";

import { Popover, Button } from "antd";
import PropTypes from "prop-types";
import "./styles.scss";

const content = (
  <div>
    <p>Content</p>
    <p>Content</p>
  </div>
);

const Option = () => {
  return (
    <td className="option">
      <Popover content={<a>{content}</a>}>
        <Button className="optionButton">...</Button>
      </Popover>
    </td>
  );
};

Option.propTypes = {
  data: PropTypes.object,
};
export default Option;
