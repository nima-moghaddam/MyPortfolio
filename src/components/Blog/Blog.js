import React, { useState } from "react";
import classes from "./Blog.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { NavLink } from "react-router-dom";

import reactImg from "./../../assets/img-blog/react.jpg";
import fronttoolsImg from "./../../assets/img-blog/tools.jpg";
import futurecodingImg from "./../../assets/img-blog/futureprogramming.jpg";
import arrow from "./../../assets/img-blog/arrow-left.png";

const blogMotion = {
  viewed1: {
    opacity: 0,
  },
  viewed2: {
    opacity: 0,
  },
  viewed3: {
    opacity: 0,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Blog = React.forwardRef((props, ref) => {
  const { ref: v1ref, inView: inView1 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: v2ref, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });
  const { ref: v3ref, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 1,
  });

  if (inView1) {
    blogMotion.viewed1 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.1,
      },
    };
  }

  if (inView2) {
    blogMotion.viewed2 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.3,
      },
    };
  }

  if (inView3) {
    blogMotion.viewed3 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.5,
      },
    };
  }

  return (
    <section ref={ref} className={classes.blog}>
      <div className={classes.blog_topic}>
        <h2>بلاگ</h2>
        <p>مباحث مرتبط با دنیای برنامه نویسی</p>
      </div>
      <div className={classes.blog_post}>
        <motion.div
          className={classes.blog_post__box}
          ref={v1ref}
          variants={blogMotion}
          whileHover="hover"
          animate="viewed1"
        >
          <img src={reactImg} />
          <h3>کتابخانه ی ReactJS چیست ؟</h3>
          <p>
            ری اکت یک کتابخانه متن باز (Open source) جاوا اسکریپت است که به دلیل
            بهینه بودن React.js برای دریافت اطلاعاتی که با سرعت تغییر می‌کنند
          </p>
          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "" : classes.link)}
              to="/blog-whatIsReact"
            >
              بیشتر بخوانید
            </NavLink>
            <img  src={arrow} />
          </div>
        </motion.div>
        <motion.div
          className={classes.blog_post__box}
          ref={v2ref}
          variants={blogMotion}
          whileHover="hover"
          animate="viewed2"
        >
          <img src={fronttoolsImg} />
          <h3>ابزار برای توسعه‌دهندگان Front-End</h3>
          <p>
            اگر به صورت کلی ابزارهایی که یک توسعه‌دهنده فرانت-اند نیاز دارد را
            نام ببریم می‌توانیم تنها به HTML/CSS/Javascript اکتفا کنیم. اما
            واقعیت آن است که
          </p>
          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "" : classes.link)}
              to="/blog-frontendTools"
            >
              بیشتر بخوانید
            </NavLink>
            <img  src={arrow} />
          </div>
        </motion.div>
        <motion.div
          className={`${classes.blog_post__box} ${classes.shifting}`}
          ref={v3ref}
          variants={blogMotion}
          whileHover="hover"
          animate="viewed3"
        >
          <img src={futurecodingImg} />
          <h3>کارجویان آینده برنامه نویسی</h3>
          <p>
            طی چند سال اخیر شاهد افزایش تعداد برنامه نویسان و کار آنها در بازار
            هستیم و امروزه شاهد ظهور و سقوط چندین زبان و ابزار برنامه نویسی
            هستیم
          </p>
          <div>
            <NavLink
              className={(navData) => (navData.isActive ? "" : classes.link)}
              to="/blog-programmingFuture"
            >
              بیشتر بخوانید
            </NavLink>
            <img src={arrow} />
          </div>
        </motion.div>
      </div>
    </section>
  );
});

export default Blog;
