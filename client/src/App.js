//Packages and libraries
import React from "react";
import "./App.css";
import Auth from "./components/Auth";
//Components
import MyNavbar from "./components/Navbar";
import authService from "./services/authService";
// import { isSignedIn, signOutUser } from "./components/Auth";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {}
    };
  }

  render() {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }
}

export default App;
