import React from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
// comps
import InitialPage from "./components/InitialPage/initialPage";
import Profile from "./components/Profile/profile_baseLayout";
import Projects from "./components/Projects/projects_baseLayout";
import Page404 from "./components/views/Page404";
// style
import "./App.scss";

const App = () => {
  // * data
  const location = useLocation();

  const pageVariantsStartPage = {
    initial: { opacity: "0" },
    in: {
      opacity: "1",
      transition: {
        duration: 0.7,
      },
    },
    out: { opacity: "0" },
  };

  const pageVariantsProjects = {
    initial: { opacity: 0, x: "100vh" },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        transition: "linear",
        ease: "easeInOut",
        duration: 0.9,
      },
    },
    out: { opacity: 0, x: "100vh" },
  };
  const pageVariantsProfile = {
    initial: { opacity: 0, x: "-100vh" },
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        transition: "linear",
        ease: "easeInOut",
        duration: 0.8,
      },
    },
    out: { opacity: 0, x: "-100vh" },
  };

  // * view
  const StartPage = () => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsStartPage}
      transition="transition"
    >
      <InitialPage />
    </motion.div>
  );

  const ProfilePage = () => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsProfile}
      transition="transition"
    >
      <Profile />
    </motion.div>
  );

  const ProjectPage = () => (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariantsProjects}
      transition="transition"
    >
      <Projects />
    </motion.div>
  );

  return (
    <AnimatePresence>
      <Switch location={location} key={location.key}>
        <Route exact path="/profile" component={ProfilePage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/" component={StartPage} />
        <Redirect to="/" component={StartPage} />
        <Route component={Page404} />
      </Switch>
    </AnimatePresence>
  );
};

export default App;
