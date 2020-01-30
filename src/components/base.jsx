import React, { Component } from "react";
import myImageToDisplay from "../img/study.svg";

const x = ["string a", "string b"];

export default class Base extends Component {
  state = {
    notes: x,
  };
  render() {
    return (
      <React.Fragment>
        <h4>Curriculum</h4>
        <img src={myImageToDisplay} alt="sitting man" />
        <p>This is a test for state:</p>
        {this.state.notes.map(i => (
          <li key={i}>{i}</li>
        ))}
      </React.Fragment>
    );
  }
}
