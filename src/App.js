import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Page404 from "./components/views/Page404";
import "../src/App.scss";

export default class App extends React.Component {
  render() {
    return (
      <div id="applicationWrapper">
        <Router>
          <Switch>
            <Route exact path="/" component={Navigation} />
            <Redirect from="/about" to="/" />;
            <Redirect from="/MyProjects" to="/" />;
            <Route component={Page404} />
          </Switch>
        </Router>
      </div>
    );
  }
}
