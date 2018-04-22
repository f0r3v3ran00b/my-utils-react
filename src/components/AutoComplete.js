import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../Autocomplete.css";
const DEFAULT_UNHIGHLIGHTED_INDEX = -1;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    // Bind stuff
    this.handleOnDeleteClick = this.handleOnDeleteClick.bind(this);
    this.state = {
      allItems: ["Seinfeld", "Friends", "Morse", "South Park", "Sherlock"],
      matchedItems: ["Seinfeld", "Morse", "Sherlock"],
      possibleMatches: [],
      currentSearchValue: "",
      currentlyHighlightedPosition: DEFAULT_UNHIGHLIGHTED_INDEX
    };
  }

  handleOnDeleteClick(match) {
    console.log(`clicked on: ${match}`);
    this.setState({
      matchedItems: this.state.matchedItems.filter(item => {
        return item !== match;
      })
    });
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
      // backspace
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
    } else if (e.keyCode === 40 && this.state.possibleMatches.length > 0) {
      // down arrow
      console.log(`Down arrow pressed`);
      if (
        this.state.currentlyHighlightedPosition >=
        this.state.possibleMatches.length - 1
      )
        return;

      this.setState({
        currentlyHighlightedPosition:
          this.state.currentlyHighlightedPosition + 1
      });
    } else if (e.keyCode === 38 && this.state.possibleMatches.length > 0) {
      console.log(`Up arrow pressed`);
      if (
        this.state.currentlyHighlightedPosition <= DEFAULT_UNHIGHLIGHTED_INDEX
      ) {
        // -1 being the default state
        return;
      }

      this.setState({
        currentlyHighlightedPosition:
          this.state.currentlyHighlightedPosition - 1
      });
    } else if (e.keyCode === 13) {
      // enter key
      if (this.state.currentlyHighlightedPosition < 0) return; //  Don't add blanks

      // If in array already
      if (
        this.state.matchedItems.includes(
          this.state.possibleMatches[this.state.currentlyHighlightedPosition]
        )
      ) {
        return;
      }

      let newItems = [];
      newItems.push(
        this.state.possibleMatches[this.state.currentlyHighlightedPosition]
      );
      console.log(`Will add: ${newItems[0]} to array`);
      this.setState({
        matchedItems: this.state.matchedItems.concat(newItems)
      });
    }
  }

  render() {
    return (
      <div>
        <div className="debug-info">
          <div>Current search text: {this.state.currentSearchValue}</div>
          <hr />
          <div>
            Current possible matches length: {this.state.possibleMatches.length}
          </div>
          <hr />
          <div>
            <span>
              Current highlighted position:{" "}
              {this.state.currentlyHighlightedPosition}
            </span>&nbsp;<span>
              Current highlighted value:{" "}
              {
                this.state.possibleMatches[
                  this.state.currentlyHighlightedPosition
                ]
              }
            </span>
          </div>
          <hr />
          Complete list:&nbsp;
          {this.state.allItems.map(function(item, idx) {
            return <span key={idx}>{item} </span>;
          })}
          <hr />
        </div>

        <div>
          <div>
            <ul className="token-input-list-facebook">
              {this.state.matchedItems.map((match, idx) => {
                return (
                  <li key={idx} className="token-input-token-facebook">
                    <p>{match}</p>
                    <span
                      key={match}
                      onClick={this.handleOnDeleteClick.bind(null, match)}
                      className="token-input-delete-token-facebook"
                    >
                      ×
                    </span>
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
          </div>

          <div className="possible-matches">
            {this.state.possibleMatches.map((possibleMatch, idx) => {
              console.log(
                `idx: ${idx} AND currentlyHighlightedPosition: ${
                  this.state.currentlyHighlightedPosition
                }`
              );
              return (
                <div key={idx}>
                  <span
                    className={
                      idx === this.state.currentlyHighlightedPosition
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
        </div>
      </div>
    );
  }
}

export default AutoComplete;
