import React from "react";

import propTypes from "prop-types";

import "./styles.scss";

const TextField = ({ label, name, errors, ...props }) => {
  return (
    <div className="textField-input">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input i className="input-field" {...props} />
      {errors && <span className="error-message">{errors}</span>}
    </div>
  );
};

TextField.defaultProps = {
  icon: <></>,
  name: "",
  label: "search",
  errors: undefined,
};

TextField.propTypes = {
  errors: propTypes.string,
  name: propTypes.string,
  icon: propTypes.node,
  label: propTypes.string,
  holder: propTypes.string,
  type: propTypes.string,
};

export default TextField;
