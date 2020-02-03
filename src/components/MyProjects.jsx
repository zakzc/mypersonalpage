import React, { Component } from "react";
import myData from "../data/myData.json";

const myProjects = myData.projects;

export default class CV extends Component {
  render() {
    console.log(myProjects);
    return (
      <React.Fragment>
        <div id="projects">
          <h1>These are the projects</h1>
          <h2>Temporarily displaying the CV, but will change</h2>
          {myProjects.map(p => (
            <div>
              <h3> {p.name} </h3>
              <p>{p.describe}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
