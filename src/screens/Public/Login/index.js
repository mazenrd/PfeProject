import React from "react";

import { notification } from "antd";
import { get } from "lodash";
import { useHistory } from "react-router-dom";
import { useStore } from "shared/hooks/useStore";
import { authApi } from "utils/api";
import { PATHS } from "utils/constants";
import { errorMessages } from "utils/helpers/errorMsgs";
import { useMutation } from "utils/hooks";

import View from "./view";

import "./styles.scss";

const Login = () => {
  const { setToken } = useStore();

  const history = useHistory();

  const openNotification = ({ placement, errorMsg }) => {
    notification.info({
      message: "informations invalide",
      description: errorMessages[errorMsg],
      placement,
    });
  };

  const [signIn] = useMutation(authApi.singIn, {
    onSuccess: ({ data }) => {
      setToken({
        accessToken: data.accessToken,
        refreshToken: data.refreshToken,
      });
      history.push(PATHS.PRIVATE.ADMIN.PROJECTS.INITIATE);
    },

    onError: ({ error }) => {
      const message = get(error, "response.data.message");
      openNotification({ placement: "topLeft", errorMsg: message });
    },
  });

  return <View signIn={signIn} />;
};

export default Login;
