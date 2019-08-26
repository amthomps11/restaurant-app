import React, { Component } from "react";

class SearchBar extends Component {
  constructor() {
    super();
  }
  handleSearch = event => {
    event.preventDefault();
    this.props.handleSearch();
  };
  handleChange = event => {
    event.preventDefault();
    this.props.handleChange(event);
  };
  handleCity = event => {
    event.preventDefault();
    this.props.handleCity(event);
  };

  render() {
    return (
      <form className="search" onSubmit={this.props.handleSearch}>
        <input
          placeholder="I'm looking for..."
          className="venue-search"
          type="text"
          onChange={this.handleChange}
        />
        <input
          placeholder="New York"
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
