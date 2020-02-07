import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import "../src/App.scss";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <Router>
            <Route exact path="/" component={Navigation} />
          </Router>
        </div>
      </React.Fragment>
    );
  }
}
