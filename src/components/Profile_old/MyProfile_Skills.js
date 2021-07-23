import React from "react";
///
import myData from "../../data/myData.json";

// list of images
import html_Logo from "../../assets/svg/html5.svg";
import css_Logo from "../../assets/svg/css3.svg";
import p_Logo from "../../assets/svg/php.svg";
import py_Logo from "../../assets/svg/python.svg";
import j_Logo from "../../assets/svg/js.svg";
import react_Logo from "../../assets/svg/react.svg";
import node_Logo from "../../assets/svg/node.svg";
import jest_Logo from "../../assets/svg/jest.svg";
import u_Logo from "../../assets/svg/uxui.svg";
///
import circle_filledIn from "../../assets/svg/circle.svg";

// Data used in the component
const imageList = [
  html_Logo,
  css_Logo,
  p_Logo,
  py_Logo,
  j_Logo,
  react_Logo,
  node_Logo,
  jest_Logo,
  u_Logo,
];
const circle = circle_filledIn;
const mySkills = myData.skills;
//////////////////////

export default function MyProfile_Skills() {
  return (
    <div id="skills">
      <h2 className="whiteTitles">Skill Set</h2>
      {/* <img src={h_Logo} /> */}
      <div className="skillArea-profile">
        {mySkills.map((s, i) => (
          <div key={i} className="skill-card-container">
            <div key={i} className="skill-card">
              <div className="skill-card-head">
                <div className="skill-card-detail">
                  <h2>{s.skillSet}</h2>
                </div>
                <img className="skill-img" src={imageList[i]} alt={s.alt}></img>
              </div>
              <div className="skill-card-body">
                <div>
                  <span className="skill-badge">And, also:</span>
                  <span className="skill-card-caption">{s.language}</span>
                </div>
                <div className="skill-properties">
                  <h4>Level:</h4>
                  <span className="skill-refs">
                    <ul className="skill-level-section">
                      {s.level.map(function (n, index) {
                        return (
                          <span key={index}>
                            <img
                              className="skill_circle"
                              src={circle}
                              alt="star"
                              style={{ width: "20%" }}
                            ></img>
                          </span>
                        );
                      })}
                    </ul>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
