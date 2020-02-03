import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MyBase from "./components/Base";
import AboutMe from "./components/AboutMe";
import MyCV from "./components/MyCV";
import MyProjects from "./components/MyProjects";
import MySkills from "./components/Skills";
import "../src/App.scss";

export default class App extends React.Component {
  state = {
    isNavigationOn: true,
  };
  render() {
    console.log(this.state);
    return (
      <Router>
        <div
          className={
            this.state.isNavigationOn ? "navIsVisible" : "navIsInvisible"
          }
          // onClick={() =>
          //   this.setState({
          //     isNavigationOn: !this.state.isNavigationOn,
          //   })
          // }
        >
          <div id="navigationBlack">
            <Link to="/about">About me</Link>
          </div>
          <div id="navigationWhite">
            <Link to="/MyProjects">My Projects</Link>
          </div>
          <Switch>
            <Route path="/About">
              <div id="about">
                <MyBase />
                <About />
                <CV />
                <Skills />
              </div>
            </Route>
            <Route path="/MyProjects">
              <MyBase />
              <Projects />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

function Base() {
  return <Base />;
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
