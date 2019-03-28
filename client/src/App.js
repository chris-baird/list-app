import React, { Component } from "react";
import "./App.css";
import fire from "./config/Fire";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./Components/SignUp/SignUp";
import LandingPage from "./Components/LandingPage/LandingPage";
import Navbar from "./Components/Navbar/Navbar";

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
      view = (
        <Home
          changeView={this.handleViewChange}
          currentUser={this.state.user}
        />
      );
    } else if (this.state.view === "landing") {
      view = <LandingPage changeView={this.handleViewChange} />;
    } else if (this.state.view === "logIn") {
      view = <Login changeView={this.handleViewChange} />;
    } else if (this.state.view === "signUp") {
      view = <SignUp changeView={this.handleViewChange} />;
    }
    // return <div className="App">{this.state.user ? <Home /> : <Login />}</div>;
    return (
      <div className="App">
        <Navbar />
        <div className="container">{view}</div>
      </div>
    );
  }
}

export default App;
