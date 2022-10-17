import React, { useState } from "react";

import Cookies from "js-cookie";
import PropTypes from "prop-types";

export const Context = React.createContext("store");
export const { Consumer } = Context;

export const Provider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(true);
  const [refreshToken, setRefreshToken] = useState(
    Cookies.get("refresh_token"),
  );
  const [provider, setProvider] = useState(Cookies.get("provider"));

  const [info, setInfo] = useState(JSON.parse(Cookies.get("info") || "{}"));

  const clearStore = () => {
    Object.keys(Cookies.get()).forEach((key) => Cookies.remove(key));
    setRefreshToken("");
    setProvider("");
    setLoggedIn(false);
  };

  return (
    <Context.Provider
      value={{
        clearStore,
        setRefreshToken: (_refreshToken) => {
          setRefreshToken(_refreshToken);
          Cookies.set("refresh_token", _refreshToken);
        },
        setInfo: (_info) => {
          setInfo(_info);
          Cookies.set("info", JSON.stringify(_info));
        },
        setProvider: (_provider) => {
          setProvider(_provider);
          Cookies.set("provider", _provider);
        },
        setLoggedIn: (_loggedIn) => {
          setLoggedIn(_loggedIn);
          Cookies.set("loggedIn", _loggedIn);
        },
        refreshToken,
        provider,
        info,
        loggedIn,
      }}>
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
