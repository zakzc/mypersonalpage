import React, { Component } from "react";
///
import ProjectList from "./Projects_ProjectList";

export default class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavigationOn: props.isNavigationOn,
    };
    this.updateNavigation = props.updateNavigation;
  }
  render() {
    return (
      <div id="projectWrapper">
        <h2>Projects</h2>
        <div id="projectContentLeft">
          <ProjectList />
        </div>
      </div>
    );
  }
}
