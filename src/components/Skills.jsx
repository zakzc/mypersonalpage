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
          <ul>
            {mySkills.map((s, i) => (
              <li id="skillCard" key={i}>
                <h4> {s.skillset} </h4>
                <p>{s.language}</p>
                <img src={s.image} />
              </li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
