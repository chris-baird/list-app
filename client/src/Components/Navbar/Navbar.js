import React from "react";
import styles from "./Navbar.component.css";

class Navbar extends React.Component {
  handleOnClick = () => {
    this.props.authControl();
    this.props.toggleNav();
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light">
        <a
          className="navbar-brand"
          href="#"
          onClick={() => this.props.homeLink("landing")}
        >
          List App
        </a>
        <button
          style={{ borderColor: "white" }}
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className={`collapse navbar-collapse ${this.props.navProp}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={this.handleOnClick}>
                {this.props.user ? "Log out" : "Log in"}{" "}
                <span className="sr-only">(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
