import React from "react";
///
import Portfolio from "./MyProjects_Portfolio";

export default function MyProjects() {
  return (
    <div id="projectWrapper">
      <h2 className="blackTitle">Projects</h2>
      <div id="projectContentLeft">
        <Portfolio />
      </div>
    </div>
  );
}
