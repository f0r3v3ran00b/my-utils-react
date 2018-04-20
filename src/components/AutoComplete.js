import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../Autocomplete.css";

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allItems: ["Seinfeld", "Friends", "Morse", "South Park", "Sherlock"],
      matchedItems: ["Seinfeld", "Morse", "Sherlock"],
      possibleMatches: [],
      currentSearchValue: ""
    };
  }

  handleSearchChange(e) {
    let currentSearchInputValue = e.target.value;
    this.setState({
      currentSearchValue: currentSearchInputValue
    });
    if (currentSearchInputValue.length > 0) {
      let filteredItems = this.state.allItems.filter(function(item) {
        return item
          .toLowerCase()
          .includes(currentSearchInputValue.toLowerCase());
      });
      this.setState({
        possibleMatches: filteredItems
      });
    } else {
      this.setState({ possibleMatches: [] });
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 8) {
      console.log(`Backspace pressed`);
      if (this.state.currentSearchValue.length === 0) {
        console.log(`No more chars to delete`);
        if (this.state.matchedItems.length > 0) {
          this.setState({
            matchedItems: this.state.matchedItems.slice(
              0,
              this.state.matchedItems.length - 1
            )
          });
        }
      }
    }
  }

  render() {
    return (
      <div>
        Current search text: {this.state.currentSearchValue}
        <hr />
        {this.state.allItems.map(function(item, idx) {
          return <div key={idx}>{item}</div>;
        })}
        <hr />
        <ul className="token-input-list-facebook">
          {this.state.matchedItems.map(function(match, idx) {
            return (
              <li key={idx} className="token-input-token-facebook">
                <p>{match}</p>
                <span className="token-input-delete-token-facebook">×</span>
              </li>
            );
          })}
          <li className="token-input-input-token-facebook">
            <input
              className="autocomplete-input"
              type="text"
              id="token-input-tokeninput-demo"
              onChange={this.handleSearchChange.bind(this)}
              onKeyDown={this.handleKeyDown.bind(this)}
            />
          </li>
        </ul>
        {this.state.possibleMatches.map(function(possibleMatch, idx) {
          return <div key={idx}>{possibleMatch}</div>;
        })}
      </div>
    );
  }
}

export default AutoComplete;
