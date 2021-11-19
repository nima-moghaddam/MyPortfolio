import React from "react";
import classes from "./Skills.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import css3 from "./../../assets/img-skills/css3.svg";
import html5 from "./../../assets/img-skills/html5.svg";
import js from "./../../assets/img-skills/javascript.svg";
import reactIc from "./../../assets/img-skills/reactjs.svg";
import reduxIc from "./../../assets/img-skills/redux.svg";
import npmIc from "./../../assets/img-skills/npm.svg";

const skillsMotion = {
  viewed1: {
    opacity: 0,
  },
  viewed2: {
    opacity: 0,
  },
  spin: {
    transform: ["rotateY(0deg)", "rotateY(180deg)", "rotateY(0deg)"],
    transition: {
      repeat: Infinity,
      duration: 4,
      repeatType: "reverse",
      repeatDelay: 0,
    },
  },
};

const Skills = React.forwardRef((props, ref) => {
  const { ref: v1ref, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: v2ref, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  if (inView1) {
    skillsMotion.viewed1 = {
      opacity: 1,
      transition: {
        duration: 2.5,
        type: "spring",
        delay: 0.2,
      },
    };
  }

  if (inView2) {
    skillsMotion.viewed2 = {
      opacity: 1,
      transition: {
        duration: 2.5,
        type: "spring",
        delay: 0.3,
      },
    };
  }

  return (
    <section className={classes.skills} ref={ref}>
      <motion.div
        ref={v1ref}
        className={classes.skills_top}
        animate="viewed1"
        variants={skillsMotion}
      >
        <div>
          <motion.img animate="spin" variants={skillsMotion} src={css3} />
          <p>CSS3 , flexbox</p>
        </div>
        <div>
          <motion.img animate="spin" variants={skillsMotion} src={html5} />
          <p>HTML5</p>
        </div>
        <div>
          <motion.img animate="spin" variants={skillsMotion} src={js} />
          <p>JavaScript , ES6</p>
        </div>
      </motion.div>
      <motion.div
        ref={v2ref}
        className={classes.skills_bot}
        animate="viewed2"
        variants={skillsMotion}
      >
        <div>
          <motion.img animate="spin" variants={skillsMotion} src={reactIc} />
          <p>React , Hooks</p>
        </div>
        <div>
          <motion.img animate="spin" variants={skillsMotion} src={reduxIc} />
          <p>Redux</p>
        </div>
        <div>
          <motion.img animate="spin" variants={skillsMotion} src={npmIc} />
          <p>npm , GitHub</p>
        </div>
      </motion.div>
    </section>
  );
});

export default Skills;
