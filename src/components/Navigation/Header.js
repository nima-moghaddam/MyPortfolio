import React, { useState, useEffect } from "react";
import classes from "./Header.module.css";
import ToggleNav from "./ToggleNav";

const Header = (props) => {
  const [winDimension, setWinDimension] = useState({
    width: window.innerWidth,
  });
  const [show, setShow] = useState(false);

  const navFadeHandler = () => {
    if (window.scrollY < 500) {
      setShow(false);
    } else {
      setShow(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", navFadeHandler);

    return () => {
      window.removeEventListener("scroll", navFadeHandler);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWinDimension({ width: window.innerWidth });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [winDimension]);

  const headerClass = show
    ? `${classes.header} ${classes.headerFade} `
    : `${classes.header}`;

  return (
    <>
      {window.innerWidth > 890 ? (
        <nav className={headerClass}>
          <ul>
            <li onClick={props.goToIntro}>درباره من</li>
            <li onClick={props.goToServices}>خدمات من</li>
            <li onClick={props.goToSkills}>مهارت ها</li>
            <li onClick={props.goToBlog}>بلاگ</li>
            <li onClick={props.goToContact}>ارتباط با من</li>
          </ul>

          <h2 onClick={props.goToIntro}>
            N<span>i</span>ma Mogh<span>a</span>dd<span>a</span>m
          </h2>
        </nav>
      ) : (
        <ToggleNav
          goToIntro={props.goToIntro}
          goToSkills={props.goToSkills}
          goToServices={props.goToServices}
          goToBlog={props.goToBlog}
          goToContact={props.goToContact}
        />
      )}
    </>
  );
};

export default Header;
