import React from "react";
import SearchBar from "./search";
import axios from "axios";
import RatingCard from "./RatingCard";
import { EACCES } from "constants";
require("dotenv").config();

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "new york",
      foursquareData: 0,
      yelpData: 0,
      review: "",
      yelpVenueID: "",
      cardData: [],
      restObj: {},
      ratingColor: "",
      error: false
    };
  }

  handleChange = event => {
    this.setState({
      input1: event.target.value

    });
  };
  handleCity = event => {
    this.setState({
      input2: event.target.value
    })
  }

  handleSearch = async e => {
    e.preventDefault();
    const restObj = {};
   try {
    
    await axios
      .get(
        `https://api.foursquare.com/v2/venues/search?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190819&near=${this.state.input2}&intent=browse&radius=10000&query=${this.state.input1}&limit=1`
      )
      .then(async res => {
        restObj.name = res.data.response.venues[0].name;
        const venueID = res.data.response.venues[0].id;
    

        await axios
          .get(
            `https://api.foursquare.com/v2/venues/${venueID}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&v=20190819`
          )
          .then(async res => {
            const foursquareData = res.data.response.venue.rating;
            this.setState({ foursquareData: foursquareData });
            await this.setState({ cardData: [res.data.response] });
            await this.setState({ ratingColor: res.data.response.venue.ratingColor });
            await this.setState({error: false})
          });
      });

    const URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.input1}&location=${this.state.input2}&limit=1`;
    await axios
      .get(URL, {
        params: {},
        headers: {
          Authorization:
            "Bearer Mfwm2_zb0qrWMcBjiB3Qw6GSIIG38TS-VdjZepk1X9EvQFw9A9fA24dIzoxyi5Xz4YjBnNnOMb0SGWTuzjTLN4lI9ZDZf9_9Mg7tFPyE8mzapp2y8tnEGbvWH6haXXYx"
        }
      })
      .then(async res => {
        const yelpData = parseInt(res.data.businesses[0].rating) * 2;
        restObj.yelpRating = res.data.businesses;
        await this.setState({ yelpData: yelpData });
        await this.setState({ yelpVenueID: res.data.businesses[0].id });
      })
      
    }
    catch(e){
     this.setState({error:true})
    }
}

  render() {
    // console.log(this.props)
    const {
      yelpData,
      foursquareData,
      review,
      cardData,
      ratingColor
    } = this.state;
    // const imgURL = this.state.cardData[0]
    return (
      <React.Fragment>
        <SearchBar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleCity={this.handleCity}
        />
        {this.state.error ? (<div className="error">No restaurant found</div>) : (<RatingCard
          yelpData={yelpData}
          foursquareData={foursquareData}
          review={review}
          cardData={cardData}
          ratingColor={ratingColor}
          userId={this.props.user.id}
        />)}
       
      </React.Fragment>
    );
  }
}

export default Home;
