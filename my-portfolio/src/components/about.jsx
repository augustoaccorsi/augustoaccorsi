import React, { Component } from "react";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import { skills } from "../data";


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

            <div className="row pt-5">
              <div className="col-md-3 mb-3">
                <div className="section-heading">
                  <h2>
                    My <strong>Skills</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-9">

                
              <div>
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>
        <div>
          {skills.map((skill) => (
            <div className="skill">
            <h3>{skill}</h3>
            <div className="progress">
              <div
                className="progress-bar"
                role="progressbar"
                style={{ width: "85%" }}
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                <span>85%</span>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div> 
               

                

               
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
