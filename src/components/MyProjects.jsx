import React, { Component } from "react";
import myData from "../data/myData.json";

const school = myData.education;

export default class CV extends Component {
  render() {
    // console.log("My school", school[0].course);
    return (
      <React.Fragment>
        <div id="projects">
          <h1>These are the projects</h1>
          <h2>Temporarily displaying the CV, but will change</h2>
          {school.map(s => (
            <div>
              <h3> {s.level} </h3>
              <p>{s.course}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
