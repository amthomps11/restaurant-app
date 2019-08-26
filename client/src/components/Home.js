import infatData from "../data/infatuation-scrape";
import nymagData from "../data/ny-mag-scrape";
import React from "react";
import SearchBar from "./search";
import axios from "axios";
import RatingCard from "./RatingCard";
import { EACCES } from "constants";
import Homeratingcardcontainer from "./Homeratingcardcontainer";
require("dotenv").config();

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;
const YELP_API = process.env.REACT_APP_AUTH;

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input1: "",
      input2: "new york",
      foursquareData: 0,
      yelpData: 0,
      infatData: 0,
      nymagData: 0,
      review: "",
      yelpVenueID: "",
      cardData: [],
      restObj: {},
      ratingColor: "",
      error: false,

      ratingData: 0,

      isThereCard: false

    };
  }

  handleChange = event => {
    this.setState({

      input1: event.target.value.toLowerCase()

    });

  };
  handleCity = event => {
    this.setState({
      input2: event.target.value
    });
  };

  handleSearch = async e => {
    e.preventDefault();
    const restObj = {};
    this.setState({ isThereCard: true });

    let jsonInput = this.state.input1;
    let foundInfat = infatData.name.find(item => item.name == jsonInput);
    if (foundInfat) {

    let infatRating = foundInfat.rating
   
      this.setState({infatData: infatRating})
        console.log(`infatuation rating: ${ foundInfat.rating }`)
    } else {
      this.setState({infatData: 0})
      }
    


      this.setState({ infatData: infatRating });
      console.log(`infatuation rating: ${foundInfat.rating}`);
    }


    }
    
    
    
    
    


      this.setState({ nymagData: nyMagRating });
      console.log(`Nymag rating: ${this.state.nymagData}`);
    }

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
            await this.setState({ error: false })

          });
      });

    const URL = `https://desolate-everglades-25408.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.state.input1}&location=${this.state.input2}&limit=1`;
    await axios
      .get(URL, {
        params: {},
        headers: {
          Authorization:
            YELP_API
        }
      })
      
      .then(async res => {
        
        let ratingData
        const yelpData = (res.data.businesses[0].rating) * 2;
        restObj.yelpRating = res.data.businesses;
        await this.setState({ yelpData: yelpData });
        await this.setState({ yelpVenueID: res.data.businesses[0].id });
        let infatRating = parseFloat(this.state.infatData)
        let nymagRating = parseFloat(this.state.nymagData)
        let ratingArray = [];
        ratingArray.push(infatRating)
        ratingArray.push(nymagRating)
        if(this.state.yelpData != undefined){
            ratingArray.push(this.state.yelpData)
          }
        if(this.state.foursquareData != undefined){
            ratingArray.push(this.state.foursquareData)
          }
        
          
          let result = ratingArray.reduce((a, c) => {
            if (c !== 0) {
              a.count++;
              a.sum += c;
            }
            
            return a;
          }, { count: 0, sum: 0 });
        if (result.count) { ratingData = result.sum / result.count }
        await this.setState({ratingData: ratingData})
      
        console.log(ratingData)
        console.log(ratingArray)
   

         ratingArray = [];
        if (this.state.cardData == []) {
          await this.setState({error:true})
        } 
      })
      

    }
  };

  render() {
    const {
      yelpData,
      foursquareData,
      nymagData,
      infatData,
      review,
      cardData,
      ratingColor,
      ratingData
    } = this.state;
    console.log(this.state.error)

    // const imgURL = this.state.cardData[0]
    return (
      <React.Fragment>
        <SearchBar
          handleChange={this.handleChange}
          handleSearch={this.handleSearch}
          handleCity={this.handleCity}
        />

        {this.state.error ? (<div className="error">
          <span><i class="fas fa-skull-crossbones"></i></span>
          We couldn't find that restaurant!
          </div>) : (
          <RatingCard
          
          
          yelpData={yelpData}
          foursquareData={foursquareData}
          infatData={infatData}
          nymagData={nymagData}
          review={review}
          cardData={cardData}
          ratingColor={ratingColor}
          ratingData={ratingData}
          userId={this.props.user.id}
        />)}
      {this.state.isThereCard ? null : (
          <Homeratingcardcontainer></Homeratingcardcontainer>
        )}
       

      </React.Fragment>
    );
  }
}

export default Home;
