import React from "react";

import { notification } from "antd";
import { useHistory } from "react-router-dom";
import { authApi } from "utils/api";
import { PATHS } from "utils/constants";
import { useMutation } from "utils/hooks";

import "./styles.scss";
import View from "./view";

const Register = () => {
  const openNotification = (placement) => {
    notification.info({
      message: "informations already used",
      description:
        "The email or Phone number are already used please change them",
      placement,
    });
  };
  const history = useHistory();
  const [signUp] = useMutation(authApi.singUp, {
    onSuccess: () => {
      history.push(PATHS.PUBLIC.LOGIN);
    },
    onError: () => openNotification("topLeft"),
  });

  return <View signUp={signUp} />;
};

export default Register;
