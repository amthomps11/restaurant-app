import React from "react";
import { addRestaurant } from "../services/apiService";

class RatingCardRefactor extends React.Component {
  constructor(props) {
    super(props);
  }

  handleFavorite = async e => {
    e.preventDefault();
    const { ratingData, name, number, linkURL, imgURL, summary } = this.props;
    const restObj = {
      name: name,
      ratingData: ratingData,
      number: number,
      URL: imgURL,
      Summary: summary,
      link: linkURL
    };

    await addRestaurant(parseInt(localStorage.getItem("userID")), restObj);
  };

  render() {
    return (
      <div className="ratingcard">
        <React.Fragment>
          <React.Fragment>
            <img src={this.props.imgURL} />
            <div className="ratingandheader">
              <div className="ratingCircle">{this.props.ratingData}</div>
              <div className="venue-name-container">
                <h1 className="restaurantName">{this.props.name}</h1>
                <p className="phone-number">{this.props.number}</p>
              </div>
            </div>
            <p className="venue-summary">"{this.props.summary}"</p>
            <div className="button-container">
              <a href={this.props.linkURL} target="_blank">
                <button className="link-button">
                  <i class="fas fa-link" />
                </button>
              </a>
              <button onClick={this.handleFavorite} className="like-button">
                <i class="fas fa-heart" />
              </button>
            </div>
          </React.Fragment>
        </React.Fragment>
      </div>
    );
  }
}

export default RatingCardRefactor;
