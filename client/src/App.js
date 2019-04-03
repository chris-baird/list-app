import React, { Component } from "react";
import fire from "./config/Fire";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      view: "landing",
      landingEmail: "",
      navOpen: ""
    };
  }

  componentDidMount() {
    this.authListener();
  }

  handleToggleNav = () => {
    if (this.state.navOpen === "") {
      this.setState({ navOpen: "hide" });
    } else {
      this.setState({ navOpen: "" });
    }
  };

  handleLoginLogout = () => {
    if (this.state.user) {
      fire.auth().signOut();
      this.handleViewChange("landing");
    } else {
      this.handleViewChange("logIn");
    }
  };

  authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  };

  handleViewChange = view => {
    this.setState({ view: view });
  };

  handleLandingEmail = email => {
    this.setState({ landingEmail: email });
  };

  handleRenderPage = () => {
    if (this.state.user) {
      return (
        <Dashboard
          changeView={this.handleViewChange}
          currentUser={this.state.user}
        />
      );
    } else if (this.state.view === "landing") {
      return (
        <LandingPage
          changeView={this.handleViewChange}
          grabEmail={this.handleLandingEmail}
        />
      );
    } else if (this.state.view === "logIn") {
      return <Login changeView={this.handleViewChange} />;
    } else if (this.state.view === "signUp") {
      return (
        <SignUp
          changeView={this.handleViewChange}
          landingEmail={this.state.landingEmail}
        />
      );
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar
          navProp={this.state.navOpen}
          toggleNav={this.handleToggleNav}
          homeLink={this.handleViewChange}
          authControl={this.handleLoginLogout}
          user={this.state.user}
        />
        <div className="container">{this.handleRenderPage()}</div>
      </div>
    );
  }
}

export default App;
