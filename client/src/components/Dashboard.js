import React from "react";
import { showFaves } from "../services/apiService";
import { unFavorite } from "../services/apiService";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      faves: [],
      faveIds: [],
    };
  }

  async componentDidMount() {
    await this.getFavs();
  }
  getFavs = async () => {
    const faves = await showFaves();
    const faveIds = faves.map(fave => fave.id);
    this.setState({ faves, faveIds });
    
  };

  handleDelete = async id => {
    const { faves } = this.state;
    faves.forEach(async fave => {
      if (fave.id === id) {
        faves.splice(faves.indexOf(fave), 1);
        this.setState({ faves });

        await unFavorite(id);
      }
    });
  };


  renderFaves = () => {
    if (this.state.faves.length) {
      return this.state.faves.map(faves => {
        const { name, URL, number, rating, Summary, link, id } = faves;
        return (
          <div className="ratingcard" key={id}>
            <React.Fragment>
              <img src={URL} />
              <div className="ratingandheader">
                <div className="ratingCircle">{rating}</div>
                <div>
                  <h1 className="restaurantName">{name}</h1>
                  <p className="phone-number">{number}</p>
                </div>
              </div>
              <p className="venue-summary">"{Summary}"</p>
              <div className="button-container">
                <a href={link} target="_blank">
                  <button className="link-button">
                    <i class="fas fa-link" />
                  </button>
                </a>
                <button
                  onClick={() => this.handleDelete(id)}
                  className="like-button"
                  name={id}
                >
                  <i class="fas fa-times"></i>
                </button>
              </div>
            </React.Fragment>
          </div>
        );
      });
    }
  };
  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <h1 className ="dashboard-greeting">{user.name ? `${user.name}'s Favorites` : null}</h1>
        <div className="dashboard-container">{this.props.user ? this.renderFaves() : false}</div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
