import React, { Component } from "react";
import { skills } from "../data";

export default class Skills extends Component {
  render() {
    return (
        <div>
        <section className="site-section  bg-light" id="section-skills">
          <div className="container">
            <div className="row">
            <div className="col-md-3 mb-3">
                <div className="section-heading">
                  <h2>
                    My <strong>Skills</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
            {skills.map((skill) => (
              <div className="col-sm-6 col-lg-4 mb-4 " >
                <div className="blog-entry resume-item">
                    <img
                      src={skill.image}
                      alt="placeholder"
                      className="img-fluid"
                    />
                </div>
              </div>
            ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
