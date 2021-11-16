import React from "react";
import classes from "./Introduction.module.css";
import telegramIcon from "./../../assets/svg/telegram-fill.svg";
import emailIcon from "./../../assets/svg/mail-fill.svg";
import gitIcon from "./../../assets/svg/github-fill.svg";
import whatsappIcon from "./../../assets/svg/whatsapp-fill.svg";
import introImg from "./../../assets/svg/intro-img.svg";

const Introduction = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={classes.intro}>
      <div className={classes.intro_card}>
        <img src={introImg} alt="معرفی" />
        <div className={classes.intro_card_details}>
          <h1 className="animate__animated animate__backInDown">
            سلام من نیما مقدم هستم
          </h1>
          <p className="animate__animated animate__zoomIn">
            برنامه نویس و توسعه دهنده وب
          </p>
          <p className="animate__animated animate__zoomIn">
            حوزه کاری مورد علاقه من فرانت انده
          </p>
          <ul>
            <li>
              <a href="https://t.me/NimaSm73">
                <img src={telegramIcon} alt="telegram" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+989156969259">
                <img src={whatsappIcon} alt="whatsapp" />
              </a>
            </li>
            <li>
              <a href="https://github.com/nima-moghaddam">
                <img src={gitIcon} alt="git" />
              </a>
            </li>
            <li>
              <img
                src={emailIcon}
                alt="email"
                onClick={props.goToContact}
                style={{ marginRight: "2px" }}
              />
            </li>
          </ul>
          <button onClick={props.goToContact}>تماس با من</button>
        </div>
      </div>
    </section>
  );
});

export default Introduction;
