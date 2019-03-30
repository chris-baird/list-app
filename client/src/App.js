import React, { Component } from "react";
// import "./App.css";
import fire from "./config/Fire";
import Home from "./Home";
import Login from "./Components/LogIn/LogIn";
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
  }

  componentDidMount() {
    this.authListener();
  }

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

  handleRenderPage = () => {
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
  };

  render() {
    return (
      <div className="App">
        <Navbar homeLink={this.handleViewChange} />
        <div className="container">{this.handleRenderPage()}</div>
      </div>
    );
  }
}

export default App;
