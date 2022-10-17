import { Empty, Spin } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { isEmpty } from "lodash";

const dataProcessors = {
  object: ({ data }) => {
    return {
      data: data,
    };
  },
  array: ({ data }) => ({
    data: data.data,
    count: data.count,
  }),
};

const withLoader = (WrappedComponent) => {
  const Process = ({
    error,
    loading,
    data,
    meta,
    mapper,
    NoData,
    Loading,
    ...rest
  }) => {
    if (loading) {
      return (
        <div className="loading--center">
          <Loading />
        </div>
      );
    }

    if (error) {
      return <p>{error.message}</p>;
    }

    const { data: processedData, count } = dataProcessors[meta]({
      data: data,
    });

    if (isEmpty(processedData)) {
      return <NoData {...rest} />;
    }

    return (
      <WrappedComponent data={mapper(processedData)} count={count} {...rest} />
    );
  };

  Process.propTypes = {
    Loading: PropTypes.func,
    Error: PropTypes.func,
    NoData: PropTypes.func,
    error: PropTypes.object,
    loading: PropTypes.bool,
    data: PropTypes.object.isRequired,
    meta: PropTypes.string,
    mapper: PropTypes.func,
  };

  Process.defaultProps = {
    Loading: Spin,
    mapper: (data) => data,
    meta: "array",
    NoData: Empty,
    error: undefined,
    loading: false,
    query: PropTypes.shape({
      data: [],
      count: 0,
    }),
  };

  return Process;
};

withLoader.propTypes = {
  WrappedComponent: PropTypes.func.isRequired,
};

withLoader.defaultProps = {};

export default withLoader;
