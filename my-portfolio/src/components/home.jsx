import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section
          className="site-hero"
          style={{ backgroundImage: "url(images/home.png)" }}
          id="section-home"
          data-stellar-background-ratio="0.5"
        >
          <div className="container">
            <div className="row intro-text align-items-center justify-content-center">
              <div className="col-md-10 text-center">
                <h1 className="site-heading site-animate">
                  Hello, I'm <strong>Augusto Accorsi</strong>
                </h1>
                <p className="lead site-subheading mb-4 site-animate">
                I am a Full Stack Developer that really enjoy to explore new technologies and enhance my skills  developing some projects.
                </p>
                <p>
                  <a
                    href="#section-about"
                    className="smoothscroll btn btn-primary px-4 py-3"
                  >
                    About me
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
