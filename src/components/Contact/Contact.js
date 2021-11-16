import React from "react";
import classes from "./Contact.module.css";

import locationImg from "./../../assets/img-contact/location.svg";
import mailImg from "./../../assets/img-contact/mail.svg";
import phoneImg from "./../../assets/img-contact/phone.svg";
import ContactForm from "./ContactForm";

const Contact = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className={classes.contact}>
      <div className={classes.contact_topic}>
        <h2>راه های ارتباطی</h2>
        <p>
          برای ارتباط با من و درخواست پروژه از راه های ارتباطی زیر استفاده کنید
        </p>
      </div>
      <div className={classes.contact_address}>
        <div className={classes.contact_address__box}>
          <img src={locationImg} />
          <div>
            <h3>آدرس</h3>
            <p>مشهد - امام خمینی 57/3 - پلاک7</p>
          </div>
        </div>
        <div className={classes.contact_address__box}>
          <img src={phoneImg} />
          <div>
            <h3>تلفن</h3>
            <p>98-9156969259+</p>
          </div>
        </div>
        <div className={classes.contact_address__box}>
          <img src={mailImg} />
          <div>
            <h3>پست الکترونیکی</h3>
            <p>nima.73sm@yahoo.com</p>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
});

export default Contact;
