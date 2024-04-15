import React from "react";
import css from "./Description.module.css";

const Description = () => {
  const title = "Sip Happens Café";
  const text = "Please leave your feedback about our service by selecting one of the options below.";

  return (
    <>
      <h1 className={css.title}>{title}</h1>
      <p className={css.text}>{text}</p>
    </>
  );
};

export default Description;
