import { useState } from "react";

export default (promise, options = {}) => {
  const { onError = () => {}, onSuccess = () => {} } = options;
  const [state, setState] = useState({});

  return [
    async (payload) => {
      setState((stat) => ({ ...stat, loading: true, called: true }));
      try {
        const { data } = await promise(payload);
        onSuccess({ data });
        setState((stat) => ({ ...stat, loading: false, data }));
      } catch (error) {
        onError({ error });
        setState((stat) => ({ ...stat, loading: false, error }));
      }
    },
    state,
  ];
};
