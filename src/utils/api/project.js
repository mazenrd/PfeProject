import axios from "axios";

import { apiUrl } from "../../config";
import { API_PATHS } from "../constants";

const createProject = (payload) => {
  return axios.post(`${apiUrl}${API_PATHS.API.PROJECTS.POST}`, payload);
};
const getProjectById = (payload) => {
  return axios.get(
    `${apiUrl}${API_PATHS.API.PROJECTS.GET}/${payload}`,
    payload,
  );
};
const createService = (payload) => {
  return axios.post(`${apiUrl}${API_PATHS.API.SERVICES.POST}`, payload);
};
const createDependency = (payload) => {
  return axios.post(`${apiUrl}${API_PATHS.API.DEPENDENCISES.POST}`, payload);
};
export default {
  createProject,
  createService,
  createDependency,
  getProjectById,
};
