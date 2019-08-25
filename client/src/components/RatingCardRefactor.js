import React from "react";

function RatingCardRefactor(props) {
  return (
    <div className="ratingcard">
      <React.Fragment>
        <React.Fragment>
          <img src={props.imgURL} />
          <div className="ratingandheader">
            <div className="ratingCircle">{props.ratingData}</div>
            <div className="venue-name-container">
              <h1 className="restaurantName">{props.name}</h1>
              <p className="phone-number">{props.number}</p>
            </div>
          </div>
          <p className="venue-summary">"{props.summary}"</p>
          <div className="button-container">
            <a href={props.linkURL} target="_blank">
              <button className="link-button">
                <i class="fas fa-link" />
              </button>
            </a>
            <button className="like-button">
              <i class="fas fa-heart" />
            </button>
          </div>
        </React.Fragment>
      </React.Fragment>
    </div>
  );
}

export default RatingCardRefactor;
