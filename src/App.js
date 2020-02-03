import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Base from "./components/Base";
import AboutMe from "./components/AboutMe";
import MyCV from "./components/MyCV";
import MyProjects from "./components/MyProjects";
import "../src/App.scss";

export default function App() {
  return (
    <Router>
      <div>
        <div id="navigation">
          <div id="navigationBlack">
            <Link to="/about">About me</Link>
          </div>
          <div id="navigationWhite">
            <Link to="/MyProjects">My Projects</Link>
          </div>
        </div>
        <Switch>
          <Route path="/About">
            <div id="about">
              <Base />
              <About />
              <CV />
            </div>
          </Route>
          <Route path="/MyProjects">
            <Base />
            <Projects />
          </Route>
          <Route path="/">{/* <Base /> */}</Route>
        </Switch>
      </div>
    </Router>
  );
}

// function Base() {
//   return <Base />;
// }

function About() {
  return <AboutMe />;
}

function CV() {
  return <MyCV />;
}

function Projects() {
  return <MyProjects />;
}
