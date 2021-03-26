import React from "react";
///
import CV from "./MyProfile_CV";
import Skills from "./MyProfile_Skills";

export default function MyProfile_0() {
  return (
    <div id="profileWrapper">
      <div id="heroTitle">
        <h2 className="whiteTitles">Profile</h2>
      </div>
      <CV />
      <Skills />
    </div>
  );
}
