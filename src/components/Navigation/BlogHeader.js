import React, { useState, useEffect } from "react";
import classes from "./BlogHeader.module.css";
import HomeImg from "./../../assets/img-blog/home.svg";
import { NavLink } from "react-router-dom";

const BlogHeader = () => {
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

  const headerClass = show
    ? `${classes.header} ${classes.headerFade} `
    : `${classes.header}`;

  return (
    <nav className={headerClass}>
      <NavLink to="/">
        <img src={HomeImg} />
      </NavLink>
      <h2>
        N<span>i</span>ma Mogh<span>a</span>dd<span>a</span>m
      </h2>
    </nav>
  );
};

export default BlogHeader;
