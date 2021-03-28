import React from "react";
///
import CV from "./MyProfile_CV";
import Skills from "./MyProfile_Skills";
import darkKeys from "../../assets/img/darkKeyboard.jpg";

export default function MyProfile_0() {
  return (
    <div id="profileWrapper">
      <div className="parallax" style={{ backgroundImage: `url(${darkKeys})` }}>
        <h1 className="heroTitle-profile">Profile</h1>
      </div>
      <CV />
      <div
        className="parallax"
        style={{ backgroundImage: `url(${darkKeys})` }}
      ></div>
      <Skills />
    </div>
  );
}
