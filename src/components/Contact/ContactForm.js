import React from "react";
import classes from "./ContactForm.module.css";
import useInput from "../../hook/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) => value.includes("@");

const ContactForm = () => {
  const {
    valueChangeHandler: FnameChangeHandler,
    inputBlurHandler: FnameBlurHandler,
    reset: FnameReset,
    hasError: FnameHasError,
    value: FnameValue,
    isValid: FnameIsValid,
  } = useInput(isNotEmpty);

  const {
    valueChangeHandler: LnameChangeHandler,
    inputBlurHandler: LnameBlurHandler,
    reset: LnameReset,
    hasError: LnameHasError,
    value: LnameValue,
    isValid: LnameIsValid,
  } = useInput(isNotEmpty);

  const {
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: emailReset,
    hasError: emailHasError,
    value: emailValue,
    isValid: emailIsValid,
  } = useInput(isEmail);

  const {
    valueChangeHandler: subjectChangeHandler,
    inputBlurHandler: subjectBlurHandler,
    reset: subjectReset,
    hasError: subjectHasError,
    value: subjectValue,
    isValid: subjectIsValid,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (FnameIsValid && LnameIsValid && emailIsValid && subjectIsValid) {
    formIsValid = true;
  }

  const sendSubmittedData = async (userData) => {
    const response = await fetch(
      "https://myportfolio-e5675-default-rtdb.europe-west1.firebasedatabase.app/userDatas.json",
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const formData = {
      firstName: FnameValue,
      lastName: LnameValue,
      email: emailValue,
      subject: subjectValue,
    };

    sendSubmittedData(formData);

    FnameReset();
    LnameReset();
    emailReset();
    subjectReset();
  };

  const firstNameClasses = FnameHasError ? `${classes.invalid}` : "";
  const lastNameClasses = LnameHasError ? `${classes.invalid}` : "";
  const emailClasses = emailHasError ? `${classes.invalid}` : "";
  const subjectClasses = subjectHasError ? `${classes.invalid}` : "";

  return (
    <form className={classes.form} onSubmit={formSubmitHandler}>
      <div className={classes.form_name}>
        <input
          type="text"
          placeholder="نام"
          className={firstNameClasses}
          onChange={FnameChangeHandler}
          onBlur={FnameBlurHandler}
          value={FnameValue}
        />
        <input
          type="text"
          placeholder="نام خانوادگی"
          className={lastNameClasses}
          onChange={LnameChangeHandler}
          onBlur={LnameBlurHandler}
          value={LnameValue}
        />
      </div>
      <div className={classes.form_subject}>
        <input
          type="email"
          placeholder="ایمیل"
          className={emailClasses}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />
        <textarea
          placeholder="پیغام شما"
          className={subjectClasses}
          onChange={subjectChangeHandler}
          onBlur={subjectBlurHandler}
          value={subjectValue}
        />
        <button disabled={!formIsValid} type="submit">
          ارسال پیغام
        </button>
      </div>
    </form>
  );
};

export default ContactForm;