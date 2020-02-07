import React, { Component } from "react";
import myData from "../data/myData.json";

const myContact = myData.contact;

export default class AboutMe extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about">
          <h2>Find me</h2>
          <ul>
            {myContact.map((c, i) => (
              <li key={i}>
                <div className="links" key={i}>
                  <a href={c.url}>
                    <p>{c.description}</p>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
