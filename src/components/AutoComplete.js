import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../Autocomplete.css";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resultSet: ["Seinfeld", "Friends", "Morse", "South Park", "Sherlock"]
    };
  }

  render() {
    return (
      <div>
        <div>Hello</div>
        <div>There</div>
        <ul className="token-input-list-facebook">
          {this.state.resultSet.map(function(match) {
            return (
              <li className="token-input-token-facebook">
                <p>{match}</p>
                <span className="token-input-delete-token-facebook">×</span>
              </li>
            );
          })}
          <li className="token-input-input-token-facebook">
            <input
              className="autocomplete-input"
              type="text"
              autocomplete="off"
              id="token-input-tokeninput-demo"
            />
            <tester className="tester" />
          </li>
        </ul>
      </div>
    );
  }
}

export default AutoComplete;
