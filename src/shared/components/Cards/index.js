import React from "react";

import PropTypes from "prop-types";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const Card = ({ header, body, footer, link }) => {
  const history = useHistory();

  return (
    <div className="card-container" onClick={() => history.push(link)}>
      {header}
      {body}
      {footer}
    </div>
  );
};

Card.propTypes = {
  link: PropTypes.string,
  header: PropTypes.any,
  body: PropTypes.any,
  footer: PropTypes.any,
};

export default Card;
