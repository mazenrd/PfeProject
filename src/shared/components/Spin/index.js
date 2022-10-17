import React from "react";
import "./styles.scss";

const Spin = () => (
  <svg
    id="spinner"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2"
      stroke="#48E4BE"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Spin.propTypes = {};

Spin.defaultProps = {};

export default Spin;
