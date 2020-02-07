import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Page404 from "./components/Page404";
import "../src/App.scss";

export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="flex-container">
          <Router>
            <Switch>
              <Route exact path="/" component={Navigation} />
              <Redirect from="/about" to="/" />;
              <Redirect from="/MyProjects" to="/" />;
              <Route component={Page404} />
            </Switch>
          </Router>
        </div>
      </React.Fragment>
    );
  }
}
