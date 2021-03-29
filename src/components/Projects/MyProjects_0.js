import React from "react";
///
import MyPortfolio1 from "./MyProjects_Portfolio_1";
import MyPortfolio2 from "./MyProjects_Portfolio_2";
//
import lightKeys from "../../assets/img/lightKeyboard.jpg";

export default function MyProjects() {
  return (
    <div id="projectWrapper">
      <div
        className="parallax"
        style={{ backgroundImage: `url(${lightKeys})` }}
      >
        <h1 className="heroTitle-project">Projects</h1>
      </div>
      <div className="projectSection">
        <h2 className="blackTitles">Web Apps</h2>
        <MyPortfolio1 />
      </div>
      <div
        className="parallax"
        style={{ backgroundImage: `url(${lightKeys})` }}
      ></div>
      <div className="projectSection">
        <h2 className="blackTitles">Other Projects</h2>
        <MyPortfolio2 />
      </div>
    </div>
  );
}
