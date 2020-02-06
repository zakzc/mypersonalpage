import React, { Component } from "react";
import myData from "../data/myData.json";

const myContact = myData.contact;

export default class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about">
          <h2>My contacts</h2>
          <ul>
            {myContact.map((c, i) => (
              <li key={i}>{c}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
