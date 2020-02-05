import React, { Component } from "react";
import myData from "../data/myData.json";

const myProjects = myData.projects;

export default class CV extends Component {
  render() {
    console.log(myProjects);
    return (
      <React.Fragment>
        <div id="projects">
          <h2>Previous projects</h2>
          {myProjects.map(p => (
            <div id="card">
              <img src={p.image} alt={p.alt}></img>
              <h3> {p.name} </h3>
              <p>{p.describe}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
