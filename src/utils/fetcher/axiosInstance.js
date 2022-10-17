import axios from "axios";
import { STORAGE_KEYS } from "utils/constants";

import { idUrl } from "../../config";

export default () =>
  axios.create({
    baseURL: idUrl,
    headers: {
      common: {
        Authorization: `bearer ${window.localStorage.getItem(
          STORAGE_KEYS.ACCESS_TOKEN,
        )}`,
      },
    },
  });
