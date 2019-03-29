import React from "react";
import fire from "../../config/Fire";
import styles from "./SignUp.module.css";

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      retypePassword: ""
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signup = e => {
    e.preventDefault();
    const email = this.state.email.trim();
    const password = this.state.password.trim();
    const retypePassword = this.state.retypePassword.trim();
    if (email !== "" && password === retypePassword) {
      fire
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(u => {})
        .then(u => {
          console.log(u);
        })
        .catch(error => {
          console.log(error);
        });
    }
  };
  render() {
    return (
      <div className={styles.signUpPageWrapper}>
        <h1 className="text-center">Create Account</h1>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email address</label>
                <input
                  onChange={this.handleChange}
                  name="email"
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
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword2">Retype Password</label>
                <input
                  onChange={this.handleChange}
                  name="retypePassword"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword2"
                  placeholder="Retype Password"
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.signup}
              >
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
