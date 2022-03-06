import React, { Component } from "react";
import { education, jobs } from "../data";

export default class Resume extends Component {
  render() {
    return (
      <div>
        <section className="site-section" id="section-resume">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    My <strong>Resume</strong>
                  </h2>
                </div>
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Education</h2>
                {education.map((educ) => (
                  <div className="resume-item mb-2 bg-light">
                    <span className="date">
                      <span className="icon-calendar" />
                      {educ.date}
                    </span>
                    <h3>{educ.title}</h3>
                    <p>{educ.description}</p>
                    <span className="school">{educ.location}</span>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h2 className="mb-5">Experience</h2>
                {jobs.map((job) => (
                  <div className="resume-item mb-2 bg-light">
                    <span className="date">
                      <span className="icon-calendar" />
                      {job.date}
                    </span>
                    <h3>{job.title}</h3>
                    <p>{job.description}</p>
                    <span className="school">{job.location}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
