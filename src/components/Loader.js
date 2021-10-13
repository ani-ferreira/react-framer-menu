import React from "react";
import { motion } from "framer-motion";
import "./loader.css";
import logo from "../logo-cafe.jpg";

const variants = {
  hidden: { opacity: 0, y: 500 },
  show: {
    opacity: 1,
    transition: { delay: 0.3, ease: "easeIn", duration: 1.9 },
    y: 200,
  },
  exit: {
    opacity: 0,
    y: -200,
    transition: {
      ease: "easeInOut",
      duration: 0.8,
    },
  },
};

const Loader = ({ setLoading }) => {
  return (
    <motion.div
      onAnimationComplete={() => setLoading(false)}
      initial="hidden"
      animate="show"
      exit="exit"
      variants={variants}
      className="loader"
    >
      <img src={logo} alt="Trulli" width="55%" />
    </motion.div>
  );
};

export default Loader;
