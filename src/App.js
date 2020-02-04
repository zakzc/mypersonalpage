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
      <Router>
        <Switch>
          <Route path="/About">
            <div id="about">
              <MyBase
                navStatus={this.state.isNavigationOn}
                updateNavigation={this.updateNav}
              />
              <About />
              <CV />
              <Skills />
            </div>
          </Route>
          <Route path="/MyProjects">
            <MyBase
              navStatus={this.state.isNavigationOn}
              updateNavigation={this.updateNav}
            />
            <Projects />
          </Route>
        </Switch>
        {/* Navigation menu */}
        <div
          // className={this.handleNav(this.state)}
          className={
            this.state.isNavigationOn ? "navIsVisible" : "navIsInvisible"
          }
          // TODO agora que o state-props, funciona, implementar a chamada de volta no base.jsx
          onClick={() =>
            this.setState({
              isNavigationOn: !this.state.isNavigationOn,
            })
          }
        >
          <div id="navigationBlack">
            <Link to="/about">About me</Link>
          </div>
          <div id="navigationWhite">
            <Link to="/MyProjects">My Projects</Link>
          </div>
        </div>
      </Router>
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
