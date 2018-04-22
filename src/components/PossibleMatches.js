import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../Autocomplete.css";

let PossibleMatches = props => {
  return (
    <div className="possible-matches">
      {props.possibleMatches.map((possibleMatch, idx) => {
        return (
          <div key={idx}>
            <span
              className={
                idx === props.currentlyHighlightedPosition
                  ? "highlightedPosition"
                  : null
              }
            >
              {possibleMatch}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default PossibleMatches;
