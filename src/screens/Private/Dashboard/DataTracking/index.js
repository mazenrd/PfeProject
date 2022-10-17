import React from "react";

import PropTypes from "prop-types";
import CardsWithGraph from "shared/components/CardsWithGraph";

const DataTracking = ({ kpi }) => {
  return <CardsWithGraph kpi={kpi} />;
};
DataTracking.propTypes = {
  kpi: PropTypes.string,
};
export default DataTracking;
