import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Base from "./components/base";
import Element2 from "./components/element2";
import Element1 from "./components/element1";

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/CV">CV</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <Home />
            <About />
          </Route>
          <Route path="/CV">
            <Home />
            <CV />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <Base />;
}

function About() {
  return <Element2 />;
}

function CV() {
  return <Element1 />;
}
