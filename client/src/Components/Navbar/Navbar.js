import React from "react";
import styles from "./Navbar.component.css";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a
        className="navbar-brand"
        href="#"
        onClick={() => props.homeLink("landing")}
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

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Log In <span className="sr-only">(current)</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
