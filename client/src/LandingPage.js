import React from "react";

class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <button onClick={() => this.props.changeView("signUp")}>Sign Up</button>
        <button onClick={() => this.props.changeView("logIn")}>Log In</button>
      </div>
    );
  }
}

export default LandingPage;
