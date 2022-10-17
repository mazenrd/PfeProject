import React from "react";

import PropTypes from "prop-types";
import { BsFillFlagFill } from "react-icons/bs";
import { PRIORITY_COLORS } from "utils/constants";

const Flag = ({ data }) => {
  return (
    <td className="Priority">
      <BsFillFlagFill size={20} color={PRIORITY_COLORS[data]} />
    </td>
  );
};

Flag.propTypes = {
  data: PropTypes.object,
};
export default Flag;
