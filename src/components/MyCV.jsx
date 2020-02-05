import React, { Component } from "react";
import myData from "../data/myData.json";

const school = myData.education;

export default class CV extends Component {
  render() {
    // console.log("My school", school[0].course);
    return (
      <React.Fragment>
        <div id="about">
          <h1>My CV</h1>
          <h2>Education</h2>
          {school.map((c, i) => (
            <div key={i}>
              <h3> {c.level} </h3>
              <p>{c.course}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
