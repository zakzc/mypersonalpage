import React, { Component } from "react";
import myData from "../data/myData.json";

const mySkills = myData.skills;

// TODO Elaborate the skills

export default class Skills extends Component {
  render() {
    console.log(mySkills);
    return (
      <React.Fragment>
        <div id="about">
          <h2>My Skills</h2>
          <h4>TODO Elaborate the skills further</h4>
          <ul>
            {mySkills.map((s, i) => (
              <ul>
                <li key={i}>
                  <h4> {s.skillset} </h4>
                  <p>{s.language}</p>
                  <p>{s.image}</p>
                </li>
              </ul>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
