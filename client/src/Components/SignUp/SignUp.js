import React from "react";
import styles from "./SignUp.module.css";

class SignUp extends React.Component {
  render() {
    return (
      <div className={styles.signUpPageWrapper}>
        <h1 className="text-center">Create Account</h1>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label for="exampleInputPassword2">Retype Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Retype Password"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
