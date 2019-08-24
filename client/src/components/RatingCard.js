import React, { Component } from "react";
import axios from "axios";
import { addRestaurant } from "../services/apiService";

class RatingCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foursquareData: 0,
      yelpData: 0,
      review: "",
      yelpVenueID: "",
      cardData: []
    };
  }

  handleFavorite = async e => {
    e.preventDefault();
    console.log(this.props.yelpData);
    console.log(this.props.foursquareData);
    const restObj = {
      name: this.props.cardData[0].venue.name,
      number: this.props.cardData[0].venue.contact.formattedPhone,
      URL: `${this.props.cardData[0].venue.bestPhoto.prefix}500x500${
        this.props.cardData[0].venue.bestPhoto.suffix
      }`,
      Summary: this.props.cardData[0].venue.tips.groups[0].items[0].text,
      link: this.props.cardData[0].venue.url
    };

    await addRestaurant(this.props.userId, restObj);
  };

  render() {
    const ratingColor = {
      backgroundColor: `#${this.props.ratingColor}`
    };

    let ratingData;
    let infatRating = parseFloat(this.props.infatData)
    let nymagRating = parseFloat(this.props.nymagData)
    
    
    // if (this.props.yelpData && this.props.foursquareData) 
    
    let ratingArray = [];
    ratingArray.push(infatRating)
    ratingArray.push(nymagRating)
    if(this.props.yelpData != undefined){
        ratingArray.push(this.props.yelpData)
      }
    if(this.props.foursquareData != undefined){
        ratingArray.push(this.props.foursquareData)
      }
    
      
      let result = ratingArray.reduce((a, c) => {
        if (c !== 0) {
          a.count++;
          a.sum += c;
        }
        
        return a;
      }, {count: 0, sum: 0});
      if (result.count){ ratingData = result.sum / result.count}
      console.log(ratingData)
      console.log(ratingArray)
    return (
      <div className="ratingcard">
        <React.Fragment>
          {this.props.cardData.map(data => (
            <React.Fragment>
              <img
                src={`${data.venue.bestPhoto.prefix}500x500${
                  data.venue.bestPhoto.suffix
                }`}
              />
              <div className="ratingandheader">
                <div className="ratingCircle" style={ratingColor}>
                  {ratingData.toFixed(1)}
                </div>
                <div className ="venue-name-container">
                  <h1 className="restaurantName">{data.venue.name}</h1>
                  <p className="phone-number">
                    {data.venue.contact.formattedPhone}
                  </p>
                </div>
              </div>
              <p className="venue-summary">
                "{data.venue.tips.groups[0].items[0].text}"
              </p>
              <div className="button-container">
                <a href={data.venue.url} target="_blank">
                  <button className="link-button">
                    <i class="fas fa-link" />
                  </button>
                </a>
                <button onClick={this.handleFavorite} className="like-button">
                  <i class="fas fa-heart" />
                </button>
              </div>
            </React.Fragment>
          ))}
        </React.Fragment>
      </div>
    );
  }
}

export default RatingCard;
