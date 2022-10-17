import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const IndicatorItem = ({ title, variant }) => (
  <div className={`indicator-container indicator-container-${variant}`}>
    <p className={`indicator-text`}>{title}</p>
  </div>
);

IndicatorItem.propTypes = {
  title: PropTypes.string,
};

IndicatorItem.defaultProps = {
  title: '',
};
export default IndicatorItem;
