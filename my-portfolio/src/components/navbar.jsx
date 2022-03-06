import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default class Navbar extends Component {
  render() {
    return (
      <header>
      <div>
        <nav
          className="navbar navbar-expand-lg site-navbar navbar-light bg-light"
          id="pb-navbar"
        >
          <div className="container">
            <div
              className="collapse navbar-collapse justify-content-md-center"
              id="navbarsExample09">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#section-home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-resume">
                    Resume
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-projects">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#section-contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      </header>
    );
  }
}
