import React from "react";
///
import Projects from "../Projects/MyProjects_0";
import Profile from "../Profile/MyProfile_0";
//
import lightHouse from "../../assets/svg/blackHouse.svg";
import darkHouse from "../../assets/svg/whiteHouse.svg";

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
        onClick={(state) => {
          this.setState({ viewSwitch: 0 });
        }}
      >
        <img
          id={this.state.viewSwitch === 1 ? "houseIconWhite" : "houseIconBlack"}
          src={this.state.viewSwitch === 1 ? lightHouse : darkHouse}
          alt="back to home page"
        />
      </button>
    );
  }
  //showProfileButton

  generalView() {
    return (
      <div id="generalView">
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
        <div id="profileGoHome"> {this.backHomeButton()}</div>
        <div id="myProfile">
          <Profile />
        </div>
      </div>
    );
  }

  viewProjects() {
    return (
      <div id="projectsPage">
        <div id="projectsGoHome"> {this.backHomeButton()}</div>
        <div id="myProjects">
          <Projects />
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="Navigation">
        <div id="generalSplitView">
          {this.state.viewSwitch === 0 ? this.generalView() : <div></div>}
        </div>
        <div id="profileSplitView">
          {this.state.viewSwitch === 1 ? this.viewProfile() : <div></div>}
        </div>
        <div id="projectsSplitView">
          {this.state.viewSwitch === 2 ? this.viewProjects() : <div></div>}
        </div>
      </div>
    );
  }
}
