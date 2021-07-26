import React from "react";
import { motion } from "framer-motion";

const pageVariants = {
  initial: { opacity: 0, x: "100vh" },
  in: { opacity: 1, x: 0, scale: 1 },
  out: { opacity: 0, x: "100vh" },
};

const pageTransition = {
  transition: "linear",
  ease: "easeIn",
  duration: 1,
};

const SubTitle = ({ color, subTitle }) => (
  <motion.h1
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    style={{ textAlign: "right", color: `${color}`, marginTop: "10px" }}
  >
    {subTitle}
  </motion.h1>
);

export default SubTitle;
