import React, { useContext, useEffect } from "react";

import { isEmpty } from "lodash";
import PropTypes from "prop-types";
import qs from "qs";
import { useTranslation } from "react-i18next";
import { useLocation, useParams } from "react-router";
import Notification from "shared/components/Notification";
import Spin from "shared/components/Spin";
import { useStore } from "shared/hooks/useStore";
import { NAME_SPACES } from "shared/locals/constants";
import { StoreContext } from "shared/store";
import { authApi } from "utils/api";
import { useMutation } from "utils/hooks";
import "./styles.scss";

const AuthRedirection = ({ history }) => {
  const { t } = useTranslation(NAME_SPACES.ERRORS);
  const { setProvider, source } = useContext(StoreContext);
  const { provider } = useParams();
  const location = useLocation();
  const { setToken } = useStore();

  const [signInWithProvider] = useMutation(authApi.signInWithProvider, {
    onSuccess: ({ data }) => {
      setToken({ accessToken: data.access_token });
      history.push("/dashboard");
    },
    onError: () => {
      // console.log(JSON.stringify(err), err);
      Notification.error({
        message: t("GENERIC"),
      });
    },
  });

  const {
    code,
    error_description: errorDescription,
    error,
  } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  useEffect(() => {
    code && !isEmpty(source) && signInWithProvider({ provider, code, source }); //
  }, [code, source]);

  useEffect(() => {
    setProvider(provider);
  }, [provider]);

  useEffect(() => {}, [error, errorDescription]);

  return (
    <div className={"spinner-container"}>
      <Spin />
    </div>
  );
};

AuthRedirection.propTypes = {
  history: PropTypes.any,
};

export default AuthRedirection;
