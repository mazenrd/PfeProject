import qs from "qs";

import axiosInstance from "./axiosInstance";

export const get = async ({ url, filter }) =>
  axiosInstance().get(`${url}?${qs.stringify(filter)}`);

export const patch = async ({ url, payload }) =>
  axiosInstance().patch(url, payload);

export const post = async ({ url, payload }) =>
  axiosInstance().post(url, payload);

export const put = async ({ url, payload }) =>
  axiosInstance().put(url, payload);

export default {
  get,
  patch,
  post,
  put,
  delete: async ({ url, payload }) => axiosInstance().delete(url, payload),
};
