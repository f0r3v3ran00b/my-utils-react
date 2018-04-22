import React from "react";
import "../Autocomplete.css";

let SelectedMatch = props => {
  return (
    <div className="token-input-token-facebook">
      <p className="token-input-token-facebook">{props.match}</p>
      <span
        key={props.match}
        onClick={props.handleOnDeleteClick.bind(null, props.match)}
        className="token-input-delete-token-facebook"
      >
        ×
      </span>
    </div>
  );
};

export default SelectedMatch;
