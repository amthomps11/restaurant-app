import Navbar from "react-bootstrap/Navbar";
import React from "react";
import Nav from "react-bootstrap/Nav";
import { login, getProfile, signUp } from "../services/apiService";
import authService from "../services/authService";
import { router } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";

class MyNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignedIn: false,
      user: {}
    };
  }

  loginUser = async credentials => {
    const userSignedIn = localStorage.getItem("signedin");
    console.log(userSignedIn);
  };

  handleSignOut = () => {
    this.signOutUser();
  };

  signOutUser = () => {
    authService.signOut();
    localStorage.clear();
    this.setState(state => {
      return { isSignedIn: false, user: null };
    });
  };

  render() {
    let userId = localStorage.getItem("userID");
    const { isSignedIn, user } = this.props;
    console.log(userId);
    return (
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="navbar-light bg-transparent "
        variant="light"
      >
        <Navbar.Brand>Resturaunt App</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            {isSignedIn && <Nav.Link href="/dashboard">Favorites</Nav.Link>}

            {!isSignedIn ? (
              <Nav>
                <Nav.Link href="/login">Login</Nav.Link>
                <Nav.Link href="/signup">Sign up</Nav.Link>
              </Nav>
            ) : (
              <Nav.Link onClick={this.handleSignOut} href="/">
                Logout
              </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar;
