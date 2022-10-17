import React from "react";

import { notification } from "antd";
import { useHistory } from "react-router-dom";
import { ProjectApi } from "utils/api";
import { useMutation } from "utils/hooks";

import "./styles.scss";
import View from "./View";

const Create = () => {
  const openNotification = (placement) => {
    notification.info({
      message: "informations already used",
      description: "",
      placement,
    });
  };

  const history = useHistory();
  const [createProject] = useMutation(ProjectApi.createProject, {
    onSuccess: ({ data }) => {
      history.push(`/project/${data.id}/service`);
    },
    onError: () => openNotification("topLeft"),
  });

  return <View createProject={createProject} />;
};

export default Create;
