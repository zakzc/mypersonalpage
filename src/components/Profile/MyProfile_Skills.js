import React from "react";
///
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

export default function MyProfile_Skills() {
  return (
    <div id="skills">
      <h2 className="whiteTitles">Skill Set</h2>
      {/* <img src={h_Logo} /> */}
      <div className="skillArea">
        {mySkills.map((s, i) => (
          <div key={i} className="skill-card-container">
            <div key={i} className="skill-card">
              <div className="skill-card-head">
                <div className="skill-card-detail">
                  <h2>{s.skillSet}</h2>
                </div>
                <img className="skill-img" src={imageList[i]} alt={s.alt}></img>
              </div>
              {/* <span class="back-text">Shadow</span> */}
              <div className="skill-card-body">
                <div>
                  <span className="skill-badge">And, also:</span>
                  <span className="skill-card-caption">{s.language}</span>
                </div>
                <div className="skill-properties">
                  <span className="skill-refs">
                    <span className="skill-rating">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star grey"></i>
                    </span>
                  </span>
                  <span className="skill-card_links">
                    <h4>
                      {/* <a href={p.link} className="ul-links">
                      Link to source code or online application
                    </a> */}
                    </h4>
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
