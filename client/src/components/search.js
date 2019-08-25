import React, { Component } from "react";
import AutoComplete from './AutoComplete'
import infatData from "../data/infatuation-scrape";

class SearchBar extends Component {
  constructor() {
    super();
  }
  handleSearch = (event) => {
      event.preventDefault();
      this.props.handleSearch()
    
  }
  handleChange = event => {
    event.preventDefault();
    this.props.handleChange(event);
    console.log(infatData)
  };
  handleCity = event => {
    event.preventDefault();
    this.props.handleCity(event);
  }
 

  render() {
    return (
      <form className="search" onSubmit={this.props.handleSearch}>
        <AutoComplete suggestions={["red"]} onChange={this.handleChange} className="venue-search"/>
        
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
