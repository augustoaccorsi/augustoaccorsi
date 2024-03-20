import React, { Component } from "react";
import { skills } from "../data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";



export default class About extends Component {
  render() {
    return (
      <div>
        <section className="site-section" id="section-about">
          <div className="container">
            <div className="row mb-5 align-items-center">
              <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                <img
                  src="images/about.png"
                  alt="placeholder"
                  className="img-fluid"
                />
              </div>
              <div className="col-lg-5 pl-lg-5">
                <div className="section-heading">
                  <h2>
                    About <strong>Me</strong>
                  </h2>
                </div>

                <p className="mb-5">
                  I am a Full Stack Software developer that loves to learn about new technologies and try to put them on action in my daily basis.
                  I graduate on Computer Science on 2021 and did my final thesis about Elasticity in Cloud Computing, this is the main reason why
                  I am an enthusiast in Cloud Compuiting, Elasticity and Microservices. The future is cloud!
                </p>

                <p>
                  <a
                    className="btn btn-secondary px-4 py-2 btn-sm"
                    href="https://drive.google.com/file/d/10zkJtOAO_Rp6rTdB5REeG0q4ZSXKKjE6/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Download CV
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
