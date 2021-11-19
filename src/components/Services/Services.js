import React, { useState } from "react";
import classes from "./Services.module.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import codeImg from "./../../assets/img-services/clean_coding.svg";
import codeImg_w from "./../../assets/img-services/clean_coding.white.svg";
import engImg from "./../../assets/img-services/eng.svg";
import engImg_w from "./../../assets/img-services/eng.white.svg";
import responseImg_w from "./../../assets/img-services/responsive.white.svg";
import responseImg from "./../../assets/img-services/responsive.svg";
import webdesignImg_w from "./../../assets/img-services/web_design.white.svg";
import webdesignImg from "./../../assets/img-services/web_design.svg";

const divMotion = {
  init: { backgroundColor: "#23263a", opacity: 1 },
  viewed1: {
    opacity: 0,
  },
  viewed2: {
    opacity: 0,
  },
  viewed3: {
    opacity: 0,
  },
  viewed4: {
    opacity: 0,
  },
  hover: {
    backgroundColor: "#ff4a57",
    opacity: 1,
    scale: 1.1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const svgMotion = {
  start: {
    transform: "rotateY(360deg)",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
  end: {
    transform: "rotateY(0deg)",
    opacity: 1,
    transition: {
      duration: 1,
      type: "spring",
    },
  },
};

const Services = React.forwardRef((props, ref) => {
  const [changeImg, setChangeImg] = useState({
    img1: false,
    img2: false,
    img3: false,
    img4: false,
  });

  const { ref: v1ref, inView: inView1 } = useInView({ triggerOnce: true });
  const { ref: v2ref, inView: inView2 } = useInView({ triggerOnce: true });
  const { ref: v3ref, inView: inView3 } = useInView({ triggerOnce: true });
  const { ref: v4ref, inView: inView4 } = useInView({ triggerOnce: true });

  if (inView1) {
    divMotion.viewed1 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.1,
      },
    };
  }

  if (inView2) {
    divMotion.viewed2 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.3,
      },
    };
  }

  if (inView3) {
    divMotion.viewed3 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.5,
      },
    };
  }

  if (inView4) {
    divMotion.viewed4 = {
      opacity: 1,
      transition: {
        duration: 1,
        type: "spring",
        delay: 0.7,
      },
    };
  }

  return (
    <section className={classes.service} ref={ref}>
      <div className={classes.service_intro}>
        <h2>خدمات و مهارت ها</h2>
        <p>
           سعی میکنم خدماتی که به شما ارائه میدم مطابق با بهترین تکنولوژی های
          حوزه فعالیت خودم باشه
        </p>
      </div>
      <div className={classes.service_main}>
        <div className={classes.service_main__topPart}>
          <motion.div
            ref={v1ref}
            initial="init"
            animate="viewed1"
            whileHover="hover"
            variants={divMotion}
            onMouseEnter={() => setChangeImg({ img1: true })}
            onMouseLeave={() => setChangeImg({ img1: false })}
          >
            <motion.img
              src={changeImg.img1 ? webdesignImg_w : webdesignImg}
              animate={changeImg.img1 ? svgMotion.start : svgMotion.end}
              variants={svgMotion}
            />
            <h3>طراحی بخش فرانت سایت</h3>
            <p>
              تمام سعی من این است که با توجه به ابزاری که در آن مهارت کسب کردم
              بهترین محصول را به کارفرما تحویل بدم
            </p>
          </motion.div>
          <motion.div
            ref={v2ref}
            initial="init"
            animate="viewed2"
            variants={divMotion}
            whileHover="hover"
            onMouseEnter={() => setChangeImg({ img2: true })}
            onMouseLeave={() => setChangeImg({ img2: false })}
          >
            <motion.img
              src={changeImg.img2 ? responseImg_w : responseImg}
              animate={changeImg.img2 ? svgMotion.start : svgMotion.end}
              variants={svgMotion}
            />
            <h3>طراحی واکنش گرا</h3>
            <p>
              در عصر تکنولوژی کنونی و نفوذ بالای استفاده از تلفن های همراه و
              تبلت , طراحی واکنشگرا به یک مهارت مهم تبدیل شده که من تمام تلاشم
              رو برای رعایت تمام قواعد ذکر شده در پروژه ها میکنم
            </p>
          </motion.div>
        </div>
        <div className={classes.service_main__botPart} ref={v2ref}>
          <motion.div
            ref={v3ref}
            initial="init"
            animate="viewed3"
            variants={divMotion}
            whileHover="hover"
            onMouseEnter={() => setChangeImg({ img3: true })}
            onMouseLeave={() => setChangeImg({ img3: false })}
          >
            <motion.img
              src={changeImg.img3 ? engImg_w : engImg}
              animate={changeImg.img3 ? svgMotion.start : svgMotion.end}
              variants={svgMotion}
            />
            <h3>مهارت بالا در زبان انگلیسی</h3>
            <p>
              مهارت در زبان انگلیسی جزو نیازمندی های تمام شاخه های برنامه نویسی
              هست , که با توجه به تجربه و مهارت بالا در این زمینه مشکلی در
              پروژه های دو زبانه ندارم
            </p>
          </motion.div>
          <motion.div
            ref={v4ref}
            initial="init"
            animate="viewed4"
            variants={divMotion}
            whileHover="hover"
            onMouseEnter={() => setChangeImg({ img4: true })}
            onMouseLeave={() => setChangeImg({ img4: false })}
          >
            <motion.img
              src={changeImg.img4 ? codeImg_w : codeImg}
              animate={changeImg.img4 ? svgMotion.start : svgMotion.end}
              variants={svgMotion}
            />
            <h3>کد نویسی تمیز</h3>
            <p>
              سادگی کدها , خوانایی و قابل فهم بودن , نام گذاری مناسب , بازبینی
              کد ها و ... عوامل متعددی هستند که سعی در رعایت تمام اون ها
              میکنم
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

export default Services;
