import React from "react";

import PropTypes from "prop-types";
import ladysface from "shared/assets/ladysface.svg";

import "./styles.scss";

const Logo = () => {
  return (
    <div className="site-logo">
      <img src={ladysface} />
    </div>
  );
};

Logo.propTypes = {
  withDesc: PropTypes.bool.isRequired,
};

export default Logo;
