import React from "react";
import { Loader } from "shared/components";
import { useQuery } from "utils/hooks";

export default ({ View, url, ...props }) => {
  const query = useQuery(url);
  const WrappedView = Loader(View);
  return (
    <WrappedView
      {...{
        ...props,
        ...query,
      }}
    />
  );
};
