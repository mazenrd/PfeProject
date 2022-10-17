import { useContext } from "react";

import { Context } from "shared/store/Context";
export const useStore = () => {
  const store = useContext(Context);
  return store;
};
