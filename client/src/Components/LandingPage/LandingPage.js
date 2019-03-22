import React from "react";
import styles from "./LandingPage.module.css";

class LandingPage extends React.Component {
  render() {
    return (
      <div className={`${styles.landingPageWrapper}`}>
        <h1 className={styles.landingPageH1}>
          Never forget what you went to the store for.
        </h1>
        <div className="card">
          <div className="card-body">
            <input
              type="text"
              className={`${styles.awesome} form-control`}
              placeholder="Email Address"
            />
            <button className={`${styles.awesome2} btn`}>
              CREATE FREEE ACCOUNT
            </button>
            <p className={styles.signInMessage}>
              Already have an account, <a href="www.google.com">Sign In</a>
            </p>
          </div>
        </div>
        {/* <button onClick={() => this.props.changeView("signUp")}>Sign Up</button>
        <button onClick={() => this.props.changeView("logIn")}>Log In</button> */}
      </div>
    );
  }
}

export default LandingPage;
