import React, { Component } from "react";
import PropTypes from "prop-types";
import infatData from "../data/infatuation-scrape";

class SearchBar extends Component {
  static propTypes = {
    infatData: PropTypes.instanceOf(Array)
  };
  static defaultProperty = {
    infatData: []
  };
  constructor() {
    super();
    this.state = {
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: ""
    };
  }
  handleSearch = (event) => {
      event.preventDefault();
      this.props.handleSearch()
    
  }
  handleChange = event => {
    event.preventDefault();
    this.props.handleChange(event);
    const { suggestions } = this.props;
    const userInput = event.currentTarget.value;

    const filteredSuggestions = infatData.name.filter(
      data =>
        data.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions,
      showSuggestions: true,
      userInput: event.currentTarget.value
    });
  };
  handleCity = event => {
    event.preventDefault();
    this.props.handleCity(event);
  }
 
  onClick = event => {
    this.setState({
      activeSuggestion: 0,
      filteredSuggestions: [],
      showSuggestions: false,
      userInput: event.currentTarget.innerText
    });
  };
  onKeyDown = event => {
    const { activeSuggestion, filteredSuggestions } = this.state;

    if (event.keyCode === 13) {
      this.setState({
        activeSuggestion: 0,
        showSuggestions: false,
        userInput: filteredSuggestions[activeSuggestion]
      });
    } else if (event.keyCode === 38) {
      if (activeSuggestion === 0) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion - 1 });
    } else if (event.keyCode === 40) {
      if (activeSuggestion - 1 === filteredSuggestions.length) {
        return;
      }

      this.setState({ activeSuggestion: activeSuggestion + 1 });
    }
  };

  render() {
    const {
      handleChange,
      onClick,
      onKeyDown,
      state: {
        activeSuggestion,
        filteredSuggestions,
        showSuggestions,
        userInput
      }
    } = this;
    let suggestionsListComponent;
    if (showSuggestions && userInput) {
      if (filteredSuggestions.length) {
        suggestionsListComponent = (
          <ul class="suggestions">
            {filteredSuggestions.map((suggestion, index) => {
              let className;

              if (index === activeSuggestion) {
                className = "";
              }

              return (
                <li key={suggestion} onClick={onClick}>
                  {infatData}
                </li>
              );
            })}
          </ul>
        );
      } else {
        suggestionsListComponent = (
          <div class="no-suggestions">
            <em>No suggestions</em>
          </div>
        );
      }
    }
    return (
      <form className="search" onSubmit={this.props.handleSearch}>
        <input
          placeholder="I'm looking for..."
          className="venue-search" 
          type="text"
          onChange={handleChange}
          onKeyDown={onKeyDown}
          value={userInput}
          suggestions={infatData}
        />
         <input
          placeholder='New York'
          className="location-search"
          type="text"
          onChange={this.handleCity}
        />
        <button className="search-button" type="submit">
          <i class="fas fa-search" />
        </button>
      </form>
    );
  }
}

export default SearchBar;
