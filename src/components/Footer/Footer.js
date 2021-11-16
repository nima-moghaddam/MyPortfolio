import React from "react";
import classes from "./Footer.module.css";

import telegramIcon from "./../../assets/svg/telegram-fill.svg";
import emailIcon from "./../../assets/svg/mail-fill.svg";
import gitIcon from "./../../assets/svg/github-fill.svg";
import whatsappIcon from "./../../assets/svg/whatsapp-fill.svg";

const Footer = (props) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.footer_card}>
        <h2 onClick={props.goToIntro}>
          N<span>i</span>ma Mogh<span>a</span>dd<span>a</span>m
        </h2>
        <p>
          وبسایتی که از یکپارچه کردن خلاقیت و کارایی ساخته شده باشد، می تواند
          چهره اینترنتی شما را به شدت پشتیبانی کند. وبسایت هایی که به خوبی پیاده
          سازی شده اند، می توانند پروسه دسترسی اطلاعات، آشنایی با وبسایت ، و
          مبادله های اینترنتی را آسان تر کند. این کار به نوبه خود باعث بازگشت
          سریع تر هزینه استفاده شده برای طراحی و توسعه وبسایت خواهد شد.
        </p>
        <div>
          <ul>
            <li>
              <a href="https://t.me/NimaSm73">
                <img src={telegramIcon} />
              </a>
            </li>
            <li>
              <a href="https://github.com/nima-moghaddam">
                <img src={gitIcon} />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+989156969259">
                <img src={whatsappIcon} />
              </a>
            </li>
            <li onClick={props.goToContact}>
              <img src={emailIcon} />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
