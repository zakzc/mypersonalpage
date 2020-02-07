import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyBase from "./components/Base";
import AboutMe from "./components/AboutMe";
import MyCV from "./components/MyCV";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/Skills";
import "../src/App.scss";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isNavigationOn: true,
    };
    console.log("current state is ==>  ", this.state);
  }
  //////////////////////
  //* Update navigation sets the state and the class
  updateNav = value => {
    this.setState({
      isNavigationOn: value,
    });
    console.log("update!!!", this.state.isNavigationOn);
  };
  //* Rendering of the visible invisible in the main navigation
  //////////////////////
  render() {
    return (
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
    );
  }
}

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
