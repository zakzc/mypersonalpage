import React from "react";
///
import CV from "./MyProfile_CV";
import Skills from "./MyProfile_Skills";
import FindMe from "./MyProfile_FindMe";

export default function MyProfile_0() {
  return (
    <div id="profileWrapper">
      <h2 id="sectionMainTitle">Profile</h2>
      <CV />
      <Skills />
      <FindMe />
    </div>
  );
}
