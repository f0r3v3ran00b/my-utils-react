import React, { Component } from "react";
import ReactDOM from "react-dom";
import tvShows from "./tv-shows.js";
import PossibleMatches from "./PossibleMatches.js";
import SelectedMatch from "./SelectedMatch.js";
import SelectedMatches from "./SelectedMatches.js";

import "../Autocomplete.css";
const DEFAULT_UNHIGHLIGHTED_INDEX = -1;
const BACKSPACE_KEYCODE = 8;
const DOWN_ARROW_KEYCODE = 40;
const UP_ARROW_KEYCODE = 38;
const ENTER_KEYCODE = 13;

class AutoComplete extends Component {
  constructor(props) {
    super(props);
    // Bind stuff
    this.handleOnDeleteClick = this.handleOnDeleteClick.bind(this);
    this.state = {
      allItems: tvShows,
      matchedItems: ["Seinfed", "Sherlock"],
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
    if (e.keyCode === BACKSPACE_KEYCODE) {
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
    } else if (
      e.keyCode === DOWN_ARROW_KEYCODE &&
      this.state.possibleMatches.length > 0
    ) {
      if (
        this.state.currentlyHighlightedPosition >=
        this.state.possibleMatches.length - 1
      )
        return;

      this.setState({
        currentlyHighlightedPosition:
          this.state.currentlyHighlightedPosition + 1
      });
    } else if (
      e.keyCode === UP_ARROW_KEYCODE &&
      this.state.possibleMatches.length > 0
    ) {
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
    } else if (e.keyCode === ENTER_KEYCODE) {
      if (this.state.currentlyHighlightedPosition < 0) return; //  Don't add blanks

      // If in array already, do nothing
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
      this.setState({
        matchedItems: this.state.matchedItems.concat(newItems)
      });
      this.setState({
        currentSearchValue: ""
      });
    }
  }

  render() {
    return (
      <div>
        <div>
          <SelectedMatches
            matchedItems={this.state.matchedItems}
            handleOnDeleteClick={this.handleOnDeleteClick}
            currentSearchValue={this.state.currentSearchValue}
            handleSearchChange={this.handleSearchChange.bind(this)}
            handleKeyDown={this.handleKeyDown.bind(this)}
          />

          <PossibleMatches
            possibleMatches={this.state.possibleMatches}
            currentlyHighlightedPosition={
              this.state.currentlyHighlightedPosition
            }
          />
        </div>
      </div>
    );
  }
}

export default AutoComplete;
