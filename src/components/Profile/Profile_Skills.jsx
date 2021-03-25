import React, { Component } from "react";
import myData from "../../data/myData.json";

// list of images
import h_Logo from "../../assets/svg/html5.svg";
import p_Logo from "../../assets/svg/php.svg";
import py_Logo from "../../assets/svg/python.svg";
import j_Logo from "../../assets/svg/js.svg";
import u_Logo from "../../assets/svg/uxui.svg";

// Data used in the component
const imageList = [h_Logo, p_Logo, py_Logo, j_Logo, u_Logo];
const mySkills = myData.skills;
//////////////////////

export default class Skills extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="about">
          <h2>My Skills</h2>
          {/* <img src={h_Logo} /> */}
          <div className="skillArea">
            {mySkills.map((s, i) => (
              <div id="skillCard" key={i}>
                <div className="skillIcons">
                  <img src={imageList[i]} alt={s.alt} />
                </div>
                <div className="skillText">
                  <h4> {s.skillSet} </h4>
                  <p>{s.language}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
