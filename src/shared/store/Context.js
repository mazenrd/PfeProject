// /* eslint-disable no-undef */
import React, { useEffect, useState } from "react";

import Cookies from "js-cookie";
import PropTypes from "prop-types";
import { STORAGE_KEYS } from "utils/constants";

export const Context = React.createContext("store");
export const { Consumer } = Context;

const INIT_TOKEN = {
  accessToken: null,
  refreshToken: null,
};

export const Provider = ({ children }) => {
  const [token, setToken] = useState({
    accessToken:
      localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN) || INIT_TOKEN.accessToken,
    refreshToken:
      localStorage.getItem(STORAGE_KEYS.REFRESH_TOKEN) ||
      INIT_TOKEN.refreshToken,
  });
  const [source, setSource] = useState({ id: 2 });
  const [provider, setProvider] = useState(Cookies.get("provider"));

  const clearStore = () => {
    localStorage.clear();
    setToken(INIT_TOKEN);
    setProvider("");
  };

  useEffect(() => {
    token?.accessToken &&
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, token?.accessToken);
    token?.refreshToken &&
      localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, token?.refreshToken);
  }, [token]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.SOURCE, JSON.stringify(source));
  }, [source]);

  return (
    <Context.Provider
      value={{
        ...token,
        clearStore,
        setToken,
        setProvider: (_provider) => {
          setProvider(_provider);
          Cookies.set("provider", _provider);
        },
        provider,
        source,
        setSource,
      }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.object.isRequired,
};
