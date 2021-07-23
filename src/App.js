import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// comps
import Profile from "./components/Profile/profile_baseLayout";
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
  // ui
  const pageVariantsProjects = {
    initial: { opacity: 0, x: "100vh", scale: 1 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: "-100vh", scale: 1 },
  };
  const pageVariantsProfile = {
    initial: { opacity: 0, x: "-100vh", scale: 1 },
    in: { opacity: 1, x: 0, scale: 1 },
    out: { opacity: 0, x: "100vh", scale: 1 },
  };

  const pageTransition = { transition: "spring", stiffness: 50, duration: 1 };

  return (
    <Router>
      <AnimatePresence>
        <Switch>
          <Route exact path="/profile">
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariantsProfile}
              transition={pageTransition}
            >
              <Profile />
            </motion.div>
          </Route>

          <Route exact path="/projects">
            <motion.div
              initial="initial"
              animate="in"
              exit="out"
              variants={pageVariantsProjects}
              transition={pageTransition}
            >
              <Projects />
            </motion.div>
          </Route>

          <Route exact path="/" component={InitialPage} />

          <Route component={Page404} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
};

export default App;
