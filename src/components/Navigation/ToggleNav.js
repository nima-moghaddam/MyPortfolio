import React, { useCallback, useEffect, useMemo, useState } from "react";
import classes from "./ToggleNav.module.css";
import menuAdd from "./../../assets/svg/menu-add-line.svg";
import menu from "./../../assets/svg/menu-line.svg";

const ToggleNav = (props) => {
  const [clicked, setClicked] = useState(false);

  const navClickHandler = () => {
    setClicked((clicked) => !clicked);
  };

  const navExpandedClasses = !clicked
    ? `${classes.nav_expanded} ${classes.navClose}`
    : `${classes.nav_expanded} ${classes.navOpen}`;

  return (
    <>
      <nav className={classes.nav}>
        <div className={classes.nav_bar}>
          <button onClick={navClickHandler}>
            {!clicked && <img src={menuAdd} alt="open-tab" />}
            {clicked && <img src={menu} alt="close-tab" />}
          </button>
          <h2 onClick={props.goToIntro}>
            N<span>i</span>ma Mogh<span>a</span>dd<span>a</span>m
          </h2>
        </div>
      </nav>
      <div className={navExpandedClasses}>
        <div className={classes.nav_expanded__slide}>
          <ul>
            <li onClick={props.goToIntro}>درباره من</li>
            <li onClick={props.goToServices}>خدمات من</li>
            <li onClick={props.goToSkills}>مهارت ها</li>
            <li onClick={props.goToBlog}>بلاگ</li>
            <li onClick={props.goToContact}>ارتباط با من</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ToggleNav;
