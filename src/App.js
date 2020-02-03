import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MyBase from "./components/Base";
import AboutMe from "./components/AboutMe";
import MyCV from "./components/MyCV";
import MyProjects from "./components/MyProjects";
import MyNavigation from "./components/Navigation";
import "../src/App.scss";

export default class App extends React.Component {
  state = {
    navigationVisible: true,
  };
  render() {
    return (
      <Router>
        <div>
          <div>
            <MyNavigation />
          </div>
          <Switch>
            <Route path="/About">
              <div id="about">
                <MyBase />
                <About />
                <CV />
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

function Projects() {
  return <MyProjects />;
}
