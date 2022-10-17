import axios from "axios";

import { idUrl } from "../../config";
import { API_PATHS } from "../constants";
import fetcher from "../fetcher";

const singInWithLink = (payload) =>
  axios.post(`${idUrl}${API_PATHS.AUTH.LINK_SIGN_IN}`, payload);
const singUp = (payload) =>
  axios.post(`${idUrl}${API_PATHS.AUTH.SIGN_UP}`, payload);
const singIn = (payload) =>
  axios.post(`${idUrl}${API_PATHS.AUTH.SIGN_IN}`, payload);
const forgotPassword = (payload) =>
  axios.post(`${idUrl}${API_PATHS.AUTH.FORGOT_PASSWORD}`, payload);
const resetPassword = (payload) =>
  fetcher.put({ url: `${idUrl}${API_PATHS.AUTH.RESET_PASSWORD}`, payload });
const updateEmail = (payload) =>
  fetcher.put({
    url: `${idUrl}${API_PATHS.USERS}/${payload.id}`,
    payload,
  });
const signInWithProvider = (payload) => {
  return axios.post(
    `${idUrl}${API_PATHS.AUTH.PROVIDER_SIGN_IN}/${payload.provider}`,
    payload,
  );
};
const getProviderURL = (payload) => {
  return axios.post(`${idUrl}${API_PATHS.AUTH.GET_PROVIDER_URL}`, payload);
};
const createProject = (payload) => {
  return axios.post(`${idUrl}${API_PATHS.API.PROJECTS}`, payload);
};

export default {
  singInWithLink,
  singIn,
  singUp,
  forgotPassword,
  resetPassword,
  updateEmail,
  signInWithProvider,
  getProviderURL,
  createProject,
};
