import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import LandingPage from "./LandingPage";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      view: "landing"
    };
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  handleViewChange = view => {
    this.setState({ view: view });
  };

  render() {
    let view;
    if (this.state.user) {
      return (
        <Home
          changeView={this.handleViewChange}
          currentUser={this.state.user}
        />
      );
    } else if (this.state.view === "landing") {
      return <LandingPage changeView={this.handleViewChange} />;
    } else if (this.state.view === "logIn") {
      return <Login changeView={this.handleViewChange} />;
    } else if (this.state.view === "signUp") {
      return <SignUp changeView={this.handleViewChange} />;
    }
    // return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
    return <div className="App">{view}</div>;
  }
}

export default App;
