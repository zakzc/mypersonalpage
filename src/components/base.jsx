import React, { Component } from "react";
import myImageToDisplay from "../img/study.svg";

// const CV = [
//   {
//     "graduation(technologist": "Systems Analyst",
//     "Post-graduation Degree/Diploma (1)": "Full Stack Web Developer",
//     "Post-graduation Degree/Diploma (2)": "Software Engineer",
//     "Masters/MBA": "Information Security",
//     "Other University level Degrees in": "English Language and Translation",
//   },
// ];

export default class Base extends Component {
  state = ["one", "due", "três"];

  render() {
    return (
      <React.Fragment>
        <h4>Curriculum</h4>
        <p>Iterating over the state</p>
        {/* <section className="CV">
          {Mycv.map((s, i) => (
            <h6 key={i}>{s}</h6>
          ))}
        </section> */}

        <p>State: pure</p>
        <p>{this.state}</p>
        <img src={myImageToDisplay} alt="sitting man" />
      </React.Fragment>
    );
  }
}
