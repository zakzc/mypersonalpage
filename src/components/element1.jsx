import React, { Component } from "react";
import myData from "../data/myData.json";

const school = myData.education;

export default class Element1 extends Component {
  render() {
    // console.log("My school", school[0].course);
    return (
      <React.Fragment>
        <h2>Education</h2>
        {/* <ul> */}
        {school.map((s, i) => (
          <div>
            <h3 key={i}> {s.level} </h3>
            <p>{s.course}</p>
          </div>
        ))}
        {/* </ul> */}
      </React.Fragment>
    );
  }
}
