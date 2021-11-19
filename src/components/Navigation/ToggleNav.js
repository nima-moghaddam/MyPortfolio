import React, { useState } from "react";
import classes from "./ToggleNav.module.css";

import menuAdd from "./../../assets/svg/menu-add-line.svg";
import menu from "./../../assets/svg/menu-line.svg";
import { motion } from "framer-motion";

const ToggleNav = (props) => {
  const [clicked, setClicked] = useState(false);

  const variants = {
    open: { y: "140px", opacity: 1 },
    closed: { y: "-100%", opacity: 0 },
  };

  const navClickHandler = () => {
    setClicked((clicked) => !clicked);
  };

  const closeNavHandler = () => {
    setClicked(false);
  };

  return (
    <>
      <nav className={classes.nav} onMouseLeave={closeNavHandler}>
        <button onClick={navClickHandler}>
          {!clicked && <img src={menuAdd} alt="open-tab" />}
          {clicked && <img src={menu} alt="close-tab" />}
        </button>
        <h2 onClick={props.goToIntro}>
          N<span>i</span>ma Mogh<span>a</span>dd<span>a</span>m
        </h2>
        <motion.div
          animate={clicked ? "open" : "closed"}
          variants={variants}
          transition={{ duration: 1 }}
          className={classes.nav_expanded}
        >
          <div className={classes.nav_expanded__slide}>
            <ul>
              <li onClick={props.goToIntro}>درباره من</li>
              <li onClick={props.goToServices}>خدمات من</li>
              <li onClick={props.goToSkills}>مهارت ها</li>
              <li onClick={props.goToBlog}>بلاگ</li>
              <li onClick={props.goToContact}>ارتباط با من</li>
            </ul>
          </div>
        </motion.div>
      </nav>
    </>
  );
};

export default ToggleNav;
