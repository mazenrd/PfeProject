/* eslint-disable no-unused-vars */

/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";

import { Layout, notification } from "antd";
import Bitbucket from "assets/Bitbucket.svg";
import Github from "assets/Github.svg";
import gitlab from "assets/gitlab.svg";
import Google from "assets/Google.svg";
import qs from "qs";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router";
import { NAME_SPACES } from "shared/locals/constants";
import { StoreContext } from "shared/store";
import authApi from "utils/api/auth";
import { openInSameTab } from "utils/helpers/openTab";
import { useMutation } from "utils/hooks";
import "./styles.scss";

const { Content } = Layout;

// eslint-disable-next-line react/display-name
export default ({ history }) => {
  const location = useLocation();
  const { t } = useTranslation(NAME_SPACES.AUTH);
  const { source, setSource } = useContext(StoreContext);
  useEffect(() => {
    const { source: parsedSource } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });
    parsedSource && setSource(parsedSource);
  }, [location.search, setSource]);

  const [getProviderURL] = useMutation(authApi.getProviderURL, {
    onSuccess: ({ data: url }) => {
      openInSameTab(url);
    },
    onError: (error) => {
      Notification.error({
        message: t("INVALIDE_PROVIDER"),
      });
    },
  });

  const [signIn] = useMutation(authApi.singIn, {
    onSuccess: ({
      data: {
        accessToken,
        source: { url },
      },
    }) => {
      window.location = `${url}?access_token=${accessToken}`;
    },
    onError: () => {
      notification.open({
        message: t("INVALIDE_CREDENTIALS"),
      });
    },
  });

  const onClick = (provider) => () => {
    getProviderURL({ provider });
  };

  const providers = [
    { icon: Google, onClick: onClick("google") },
    { icon: gitlab, onClick: onClick("gitlab") },
    { icon: Github, onClick: onClick("github") },
    { icon: Bitbucket, onClick: onClick("bitbucket") },
  ];

  const inputs = [
    { name: "username", placeholder: "Nom d'utilisateur" },
    { name: "password", placeholder: "Mot de passe", type: "password" },
  ];
  return (
    <div className="section--login">
      <div className={"providers-container"}>
        <div className={"spaced-row"}>
          {providers.map(({ icon, onClick: handleClick }, index) => (
            <img
              key={index}
              className={"logo"}
              src={icon}
              alt=""
              onClick={handleClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
