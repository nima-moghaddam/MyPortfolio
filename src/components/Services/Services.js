import React, { useState, useRef, useEffect } from "react";
import classes from "./Services.module.css";

import codeImg from "./../../assets/img-services/clean_coding.svg";
import engImg from "./../../assets/img-services/eng.svg";
import responseImg from "./../../assets/img-services/responsive.svg";
import webdesignImg from "./../../assets/img-services/web_design.svg";

const Services = React.forwardRef((props, ref) => {
  const [hover, setHover] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
  });

  const img1 = hover.image1 ? classes.img1 : "";
  const img2 = hover.image2 ? classes.img2 : "";
  const img3 = hover.image3 ? classes.img3 : "";
  const img4 = hover.image4 ? classes.img4 : "";

  return (
    <section ref={ref} className={classes.service}>
      <div className={classes.service_intro}>
        <h2>خدمات و مهارت ها</h2>
        <p>
          من سعی میکنم خدماتی که به شما ارائه میدم مطابق با بهترین تکنولوژی های
          حوزه فعالیت خودم باشه
        </p>
      </div>
      <div className={classes.service_main}>
        <div className={classes.service_main__topPart}>
          <div
            onMouseEnter={() => setHover({ image1: true })}
            onMouseLeave={() => setHover({ image1: false })}
          >
            <img src={webdesignImg} className={img1} />
            <h3>طراحی بخش فرانت سایت</h3>
            <p>
              تمام سعی من این است که با توجه به ابزاری که در آن مهارت کسب کردم
              بهترین محصول را به کارفرما تحویل بدم
            </p>
          </div>
          <div
            onMouseEnter={() => setHover({ image2: true })}
            onMouseLeave={() => setHover({ image2: false })}
          >
            <img src={responseImg} className={img2} />
            <h3>طراحی واکنش گرا</h3>
            <p>
              در عصر تکنولوژی کنونی و نفوذ بالای استفاده از تلفن های همراه و
              تبلت , طراحی واکنشگرا به یک مهارت مهم تبدیل شده که من تمام تلاشم
              رو برای رعایت تمام قواعد آن در پروژه ها میکنم
            </p>
          </div>
        </div>
        <div className={classes.service_main__botPart}>
          <div
            onMouseEnter={() => setHover({ image3: true })}
            onMouseLeave={() => setHover({ image3: false })}
          >
            <img src={engImg} className={img3} />
            <h3>مهارت بالا در زبان انگلیسی</h3>
            <p>
              مهارت در زبان انگلیسی جزو نیازمندی های تمام شاخه های برنامه نویسی
              هست , که من با توجه به تجربه و مهارت بالا در این زمینه مشکلی در
              پروژه های دو زبانه ندارم
            </p>
          </div>
          <div
            onMouseEnter={() => setHover({ image4: true })}
            onMouseLeave={() => setHover({ image4: false })}
          >
            <img src={codeImg} className={img4} />
            <h3>کد نویسی تمیز</h3>
            <p>
              سادگی کدها , خوانایی و قابل فهم بودن , نام گذاری مناسب , بازبینی
              کد ها و ... عوامل متعددی هستند که من سعی در رعایت تمام اون ها
              میکنم
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Services;
