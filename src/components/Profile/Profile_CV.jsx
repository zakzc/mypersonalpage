import React, { Component } from "react";
import myData from "../../data/myData.json";

const school = myData.education;

export default class CV extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about">
          <h2>Education</h2>
          {school.map((c, i) => (
            <div key={i}>
              <h3 className="courseLevel"> {c.level} </h3>
              {/* <br /> */}
              <p className="courseInfo">{c.course}</p>
              <br />
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
