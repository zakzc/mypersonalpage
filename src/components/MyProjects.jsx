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
          {myProjects.map((p, i) => (
            <div key={i} id="card">
              <div id="projectImage">
                <img src={p.image} alt={p.alt}></img>
              </div>
              <div id="projectText">
                <h3> {p.name} </h3>
                <p>{p.describe}</p>
              </div>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
