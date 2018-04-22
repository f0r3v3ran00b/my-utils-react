import React from "react";
import SelectedMatch from "./SelectedMatch.js";
import SearchInput from "./SearchInput.js";
import "../Autocomplete.css";

let SelectedMatches = props => {
  return (
    <div>
      <ul className="token-input-list-facebook">
        {props.matchedItems.map((match, idx) => {
          return (
            <li>
              <SelectedMatch
                match={match}
                key={idx}
                handleOnDeleteClick={props.handleOnDeleteClick}
              />
            </li>
          );
        })}
        <li>
          <SearchInput
            currentSearchValue={props.currentSearchValue}
            handleKeyDown={props.handleKeyDown}
            handleSearchChange={props.handleSearchChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default SelectedMatches;
