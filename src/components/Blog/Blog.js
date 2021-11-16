import React, { useState } from "react";
import classes from "./Blog.module.css";
import reactImg from "./../../assets/img-blog/react.jpg";
import fronttoolsImg from "./../../assets/img-blog/tools.jpg";
import futurecodingImg from "./../../assets/img-blog/futureprogramming.jpg";
import arrow from "./../../assets/img-blog/arrow-left.png";
import { NavLink } from "react-router-dom";

const Blog = React.forwardRef((props, ref) => {
  const [linkHover, setLinkHover] = useState({
    icon1: false,
    icon2: false,
    icon3: false,
  });

  const icon1 = linkHover.icon1 ? "animate__animated animate__flash" : "";
  const icon2 = linkHover.icon2 ? "animate__animated animate__flash" : "";
  const icon3 = linkHover.icon3 ? "animate__animated animate__flash" : "";

  return (
    <section ref={ref} className={classes.blog}>
      <div className={classes.blog_topic}>
        <h2>بلاگ</h2>
        <p>مباحث مرتبط با دنیای برنامه نویسی</p>
      </div>

      <div className={classes.blog_post}>
        <div className={classes.blog_post__box}>
          <img src={reactImg} />
          <h3>کتابخانه ی ReactJS چیست ؟</h3>
          <p>
            ری اکت یک کتابخانه متن باز (Open source) جاوا اسکریپت است که به دلیل
            بهینه بودن React.js برای دریافت اطلاعاتی که با سرعت تغییر می‌کنند
          </p>
          <div>
            <NavLink
              onMouseEnter={() => setLinkHover({ icon1: true })}
              onMouseLeave={() => setLinkHover({ icon1: false })}
              className={(navData) => (navData.isActive ? "" : classes.link)}
              to="/blog-whatIsReact"
            >
              بیشتر بخوانید
            </NavLink>
            <img className={icon1} src={arrow} />
          </div>
        </div>
        <div className={classes.blog_post__box}>
          <img src={fronttoolsImg} />
          <h3>ابزار برای توسعه‌دهندگان Front-End</h3>
          <p>
            اگر به صورت کلی ابزارهایی که یک توسعه‌دهنده فرانت-اند نیاز دارد را
            نام ببریم می‌توانیم تنها به HTML/CSS/Javascript اکتفا کنیم. اما
            واقعیت آن است که
          </p>
          <div>
            <NavLink
              onMouseEnter={() => setLinkHover({ icon2: true })}
              onMouseLeave={() => setLinkHover({ icon2: false })}
              className={(navData) => (navData.isActive ? "" : classes.link)}
              to="/blog-frontendTools"
            >
              بیشتر بخوانید
            </NavLink>
            <img className={icon2} src={arrow} />
          </div>
        </div>
        <div className={`${classes.blog_post__box} ${classes.shifting}`}>
          <img src={futurecodingImg} />
          <h3>کارجویان آینده برنامه نویسی</h3>
          <p>
            طی چند سال اخیر شاهد افزایش تعداد برنامه نویسان و کار آنها در بازار
            هستیم و امروزه شاهد ظهور و سقوط چندین زبان و ابزار برنامه نویسی
            هستیم
          </p>
          <div>
            <NavLink
              onMouseEnter={() => setLinkHover({ icon3: true })}
              onMouseLeave={() => setLinkHover({ icon3: false })}
              className={(navData) => (navData.isActive ? "" : classes.link)}
              to="/blog-programmingFuture"
            >
              بیشتر بخوانید
            </NavLink>
            <img className={icon3} src={arrow} />
          </div>
        </div>
      </div>
    </section>
  );
});

export default Blog;
