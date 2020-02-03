import React, { Component } from "react";
import myData from "../data/myData.json";
// import { Link } from "react-router-dom";
// import myImageToDisplay from "../img/grayHouse.svg";

const school = myData.education;

export default class CV extends Component {
  render() {
    // console.log("My school", school[0].course);
    return (
      <React.Fragment>
        <div id="about">
          {/* <li>
            <Link to="/">
              <img
                id="houseIcon"
                src={myImageToDisplay}
                alt="back to home page"
              />
            </Link>
          </li> */}
          <h1>My CV</h1>
          <h2>Education</h2>
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
