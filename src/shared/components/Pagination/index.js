import { Pagination } from "antd";
import React, { useState } from "react";
import { INITIAL_VALUES } from "../../../utils/constants";

const total = (count) => (count / INITIAL_VALUES.take) * 10;

export default ({ count, setValues, skip }) => {
  const [page, setPage] = useState(Math.floor(skip / 10) + 1);

  const onChange = (value) => {
    setPage(value);
    setValues({
      skip: (value - 1) * INITIAL_VALUES.take,
      take: INITIAL_VALUES.take,
    });
  };
  return (
    <Pagination
      onChange={onChange}
      defaultCurrent={page}
      total={total(count)}
    />
  );
};
