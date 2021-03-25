import React, { Component } from "react";
///
import CV from "./Profile_CV";
import Skills from "./Profile_Skills";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavigationOn: props.isNavigationOn,
    };
    this.updateNavigation = props.updateNavigation;
  }
  render() {
    return (
      <div id="aboutWrapper">
        <h2 id="textLeft">Profile</h2>
        <div id="backHomeLeft"></div>
        <div id="aboutContentRight">
          <CV />
          <Skills />
        </div>
      </div>
    );
  }
}
