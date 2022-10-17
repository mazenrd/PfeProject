import React from "react";

import { notification } from "antd";
import axios from "axios";
import { apiUrl } from "config";
import { useQuery } from "react-query";
import { useHistory, useParams } from "react-router-dom";
import { ProjectApi } from "utils/api";
import { API_PATHS, PATHS } from "utils/constants";
import { useMutation } from "utils/hooks";

import "./styles.scss";
import View from "./View";

const CreateService = () => {
  const openNotification = (placement) => {
    notification.info({
      message: "informations already used",
      description: "",
      placement,
    });
  };
  const history = useHistory();
  const { id: projectId } = useParams();
  const fetchProject = async () => {
    const { data } = await axios.get(
      `${apiUrl}${API_PATHS.API.PROJECTS.GET}/${projectId}`,
    );
    return data;
  };
  const { data, isLoading } = useQuery(["GetProjectName", projectId], () =>
    fetchProject(projectId),
  );

  const [createService] = useMutation(ProjectApi.createService, {
    onSuccess: () => {
      history.push(PATHS.PRIVATE.DASHBOARD);
    },
    onError: () => openNotification("topLeft"),
  });

  if (isLoading) {
    return <div>loading ...</div>;
  }

  return (
    <View
      createService={createService}
      projectName={data.name}
      projectId={projectId}
    />
  );
};

export default CreateService;
