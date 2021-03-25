import React from "react";
///
import Projects from "../Projects/Projects_0";
import Profile from "../Profile/Profile_0";
//
import grayHouseIcon from "../../assets/svg/grayHouse.svg";

// TODO: fix routing and passing of props to remake the App. Try redux?

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavigationOn: true,
      viewSwitch: 0,
    };
    this.viewProjects = this.viewProjects.bind(this);
    this.viewProfile = this.viewProfile.bind(this);
    this.showProfileButton = this.showProfileButton.bind(this);
    this.backHomeButton = this.backHomeButton.bind(this);
    this.updateNavigation = this.updateNavigation.bind(this);
  }

  // Updates the nav based on the return from base.jsx
  updateNavigation = (newView) => {
    this.setState({
      viewSwitch: newView,
    });
  };

  ///* Views
  // viewSwitch determines the view mode: 0 for general, 1 for profile, 2 for projects

  showProfileButton() {
    return (
      <button
        className="navigationButtons"
        id="showProfileButton"
        onClick={(state) => {
          this.setState({ viewSwitch: 1 });
        }}
      >
        Profile
      </button>
    );
  }

  showProjectsButton() {
    return (
      <button
        className="navigationButtons"
        id="showProjectsButton"
        onClick={(state) => {
          this.setState({ viewSwitch: 2 });
        }}
      >
        Projects
      </button>
    );
  }

  backHomeButton() {
    return (
      <button
        id="showProfileButton"
        onClick={(state) => {
          this.setState({ viewSwitch: 0 });
        }}
      >
        <img
          id={this.state.viewSwitch === 1 ? "houseIconBlack" : "houseIconWhite"}
          src={grayHouseIcon}
          alt="back to home page"
        />
      </button>
    );
  }
  //showProfileButton

  generalView() {
    return (
      <div id="generalSplitView">
        <div id="blackBox">
          <div id="nameLeft">
            <h1>Zak</h1>
          </div>
          {this.showProfileButton()}
        </div>
        <div id="whiteBox">
          <div id="nameRight">
            <h1>Zangrando</h1>
          </div>
          {this.showProjectsButton()}
        </div>
      </div>
    );
  }

  viewProfile() {
    return (
      <div id="profilePage">
        {this.backHomeButton()}
        <Profile />
      </div>
    );
  }

  viewProjects() {
    return (
      <div id="projectsPage">
        {this.backHomeButton()}
        <Projects />
      </div>
    );
  }

  render() {
    return (
      <div className="Navigation">
        {this.state.viewSwitch === 0 ? this.generalView() : <div></div>}
        {this.state.viewSwitch === 1 ? this.viewProfile() : <div></div>}
        {this.state.viewSwitch === 2 ? this.viewProjects() : <div></div>}
      </div>
    );
  }
}
