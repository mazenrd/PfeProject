import React from "react";

import { Button } from "antd";
import { useHistory } from "react-router-dom";
import { PATHS } from "utils/constants";

import "./styles.scss";

const Notfound = () => {
  const history = useHistory();
  return (
    <section className="page_404">
      <div className="errorPage-container">
        <div className="errorText-wraper">
          <h1 className="errorText">404</h1>
          <div className="four_zero_four_bg" />
          <div className="contant_box_404">
            <h3 className="h2">Look like youre lost</h3>

            <p>the page you are looking for not avaible!</p>
            <Button
              title="GO BACK HOME"
              className="backHome-button"
              onClick={() => {
                history.push(PATHS.PUBLIC.LOGIN);
              }}>
              GO BACK HOME
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Notfound;
