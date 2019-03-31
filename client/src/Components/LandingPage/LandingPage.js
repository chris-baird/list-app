import React from "react";
import styles from "./LandingPage.module.css";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateAccount = () => {
    this.props.grabEmail(this.state.email);
    this.props.changeView("signUp");
  };

  render() {
    return (
      <div className={`${styles.landingPageWrapper}`}>
        <h1 className={styles.landingPageH1}>
          Never forget what you went to the store for.
        </h1>
        <div className="card">
          <div className="card-body">
            <input
              onChange={this.handleChange}
              type="text"
              className={`${styles.awesome} form-control`}
              placeholder="Email Address"
              name="email"
              value={this.state.email}
            />
            <button
              className={`${styles.awesome2} btn`}
              onClick={this.handleCreateAccount}
            >
              CREATE FREEE ACCOUNT
            </button>
            <p className={styles.signInMessage}>
              Already have an account,{" "}
              <a href="#" onClick={() => this.props.changeView("logIn")}>
                Sign In
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage;
