import React from "react";

import PropTypes from "prop-types";
// import { IoIosAddCircleOutline } from "react-icons/io";
import { useHistory } from "react-router-dom";
import Button from "shared/components/Button";
import { PATHS } from "utils/constants";

const Initiate = () => {
  const history = useHistory();
  return (
    <section className="addProject-container">
      <div className="addProject-button">
        <Button
          buttonTitle="Add a new project"
          position
          // buttonIcon={<IoIosAddCircleOutline size={80} />}
          onClick={() => history.push(PATHS.PRIVATE.ADMIN.PROJECTS.CREATE)}
        />
      </div>
    </section>
  );
};

Initiate.propTypes = {
  title: PropTypes.string,
};

Initiate.defaultProps = {
  title: "",
};
export default Initiate;
