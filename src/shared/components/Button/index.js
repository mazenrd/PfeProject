import React from "react";

import { Button } from "antd";
import PropTypes from "prop-types";

import "./styles.scss";

const colors = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
  fourthly: "fourthly",
};

const CustomButton = ({
  buttonIcon,
  buttonTitle,
  containerStyle,
  color,
  withPadding,
  large,
  notext,
  type,
  disabled,
  htmlType,
  position,
  onClick,
  ...rest
}) => {
  return (
    <div className="button-container" style={containerStyle}>
      <Button
        disabled={disabled}
        className={`${colors[color]} ${large && "large"} ${
          position && "position"
        } ${notext && "notext"} ${withPadding && "withPadding"}`}
        onClick={onClick}
        icon={buttonIcon}
        type={type}
        htmlType={htmlType}
        {...rest}>
        {buttonTitle}
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  buttonIcon: PropTypes.node,
  buttonTitle: PropTypes.string,
  buttonColor: PropTypes.string,
  containerStyle: PropTypes.object,
  withPadding: PropTypes.bool,
  large: PropTypes.bool,
  notext: PropTypes.bool,
  type: PropTypes.string,
  htmlType: PropTypes.string,
  position: PropTypes.bool,
  onClick: PropTypes.func,
};

CustomButton.defaultProps = {
  color: "primary",
  withPadding: false,
};

export default CustomButton;
