import React from "react";

import PropTypes from "prop-types";
import { BsCalendar4 } from "react-icons/bs";

const Date = () => {
  return (
    <td className="due_date">
      <BsCalendar4 />
    </td>
  );
};

Date.propTypes = {
  data: PropTypes.object,
};
export default Date;
