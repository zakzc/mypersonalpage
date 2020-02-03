import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navigation extends Component {
  render() {
    return (
      <div id="navigation">
        <div id="navigationBlack">
          <Link to="/about">About me</Link>
        </div>
        <div id="navigationWhite">
          <Link to="/MyProjects">My Projects</Link>
        </div>
      </div>
    );
  }
}
