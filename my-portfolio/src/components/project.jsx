import React, { Component } from "react";
import { projects } from "../data";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className="site-section" id="section-blog">
          <div className="container">
            <div className="row">
              <div className="col-md-12 mb-5">
                <div className="section-heading text-center">
                  <h2>
                    Projects <strong>I Worked on</strong>
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              {projects.map((project) => (
                <div className="col-sm-6 col-lg-4 mb-4"><a href={project.link}>
                  <div className="blog-entry resume-item mb-2">
                    <div className="blog-entry-text">
                      <h3><strong>{project.title}</strong></h3>
                      <h3>{project.description}</h3>
                      <div className="meta">
                        <h8>{project.language}</h8>
                      </div>
                    </div>
                  </div>
                </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
