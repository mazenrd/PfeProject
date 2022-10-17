import React from "react";
import { PATHS } from "utils/constants";
import "./style.scss";

const Home = () => {
  return (
    <div>
    </div>
  );
};

export default [
  {
    path: PATHS.INDEX,
    exact: true,
    component: Home,
  },
];
