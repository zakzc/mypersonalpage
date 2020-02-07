import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// Components
import MyBase from "./Base";
import AboutMe from "./AboutMe";
import MyCV from "./MyCV";
import MyProjects from "./MyProjects";
import MySkills from "./Skills";

export default class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavigationOn: true,
    };
  }
  //////////////////////
  // Update navigation sets updates the nav based on the
  // props coming from base.jsx
  updateNav = () => {
    this.setState({
      isNavigationOn: true,
    });
    // console.log("updateNav activated", this.state.isNavigationOn);
  };
  //////////////////////
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <Router>
            <Switch>
              <Route path="/About">
                <div id="aboutWrapper">
                  <h1 id="textLeft">About Me</h1>
                  <div id="backHomeLeft">
                    <MyBase
                      navStatus={this.state.isNavigationOn}
                      updateNavigation={this.updateNav}
                    />
                  </div>
                  <div id="aboutContentRight">
                    <About />
                    <br />
                    <CV />
                    <br />
                    <br />
                    <Skills />
                  </div>
                </div>
              </Route>
              <Route path="/MyProjects">
                <div id="projectWrapper">
                  <h1 id="textRight">My Projects</h1>
                  <div id="backHomeRight">
                    <MyBase
                      navStatus={this.state.isNavigationOn}
                      updateNavigation={this.updateNav}
                    />
                  </div>
                  <div id="projectContentLeft">
                    <Projects />
                  </div>
                </div>
              </Route>
            </Switch>
            {/* Navigation menu */}
            <div
              className={
                this.state.isNavigationOn ? "navIsVisible" : "navIsInvisible"
              }
            >
              <div id="blackBox">
                <Link
                  to="/about"
                  onClick={() =>
                    this.setState({
                      isNavigationOn: false,
                    })
                  }
                >
                  About me
                </Link>
              </div>
              <div id="whiteBox">
                <Link
                  to="/MyProjects"
                  onClick={() =>
                    this.setState({
                      isNavigationOn: false,
                    })
                  }
                >
                  My Projects
                </Link>
              </div>
            </div>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}

// function Base() {
//   return <MyBase />;
// }

function About() {
  return <AboutMe />;
}

function CV() {
  return <MyCV />;
}

function Skills() {
  return <MySkills />;
}

function Projects() {
  return <MyProjects />;
}
