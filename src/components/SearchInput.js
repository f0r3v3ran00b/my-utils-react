import React from "react";
import "../Autocomplete.css";

let SearchInput = props => {
  return (
    <input
      value={props.currentSearchValue}
      className="autocomplete-input"
      type="text"
      id="token-input-tokeninput-demo"
      onChange={props.handleSearchChange.bind(this)}
      onKeyDown={props.handleKeyDown.bind(this)}
    />
  );
};

export default SearchInput;
