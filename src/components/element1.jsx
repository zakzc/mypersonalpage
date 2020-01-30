import React, { Component } from "react";
import myData from "../data/myData.json";

const school = myData.education;

export default class Element1 extends Component {
  render() {
    // console.log("My school", school[0].course);
    return (
      <React.Fragment>
        <h2>Education</h2>
        {school.map(s => (
          <div>
            <h3> {s.level} </h3>
            <p>{s.course}</p>
          </div>
        ))}
      </React.Fragment>
    );
  }
}
