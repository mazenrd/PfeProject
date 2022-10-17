import React from "react";

import propTypes from "prop-types";
import { AiOutlineSearch } from "react-icons/ai";

import "./styles.scss";

const SearchInput = () => {
  return (
    <div className="search_input">
      <input placeholder="Search" className="search_input-field" />
      <button className="search_input-btn" type="button">
        <AiOutlineSearch color="#4B688C" size={25} />
      </button>
    </div>
  );
};

SearchInput.defaultProps = {
  icon: <></>,
  label: "search",
};

SearchInput.propTypes = {
  icon: propTypes.node,
  label: propTypes.string,
};

export default SearchInput;
