import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// comps
import Profile from "./components/Profile/profile";
import Projects from "./components/Projects/projects";
import Page404 from "./components/views/Page404";
// style
import "./App.scss";
// New approach
import InitialPage from "./components/InitialPage/initialPage";

// export default class App extends React.Component {
//   render() {
//     return <InitialPage />;
//   }
// }

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/profile" render={(props) => <Profile />} />
        <Route exact path="/projects" render={(props) => <Projects />} />
        <Route exact path="/" component={InitialPage} />
        <Route component={Page404} />
      </Switch>
    </Router>
  );
};

export default App;
