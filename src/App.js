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
    // this.handleNav = this.handleNav.bind(this);
    console.log("current state is:", this.state);
  }
  //////////////////////
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
                  <CV />
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
            // className={this.handleNav(this.state)}
            className={
              this.state.isNavigationOn ? "navIsVisible" : "navIsInvisible"
            }
            onClick={() =>
              this.setState({
                isNavigationOn: !this.state.isNavigationOn,
              })
            }
          >
            <div id="blackBox">
              <Link to="/about">About me</Link>
            </div>
            <div id="whiteBox">
              <Link to="/MyProjects">My Projects</Link>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

// function MyBase() {
//   return <Base navStatus={this.props.isNavigationOn} />;
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
