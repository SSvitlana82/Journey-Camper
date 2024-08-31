import style from "./Button.module.css";
import { useState } from "react";

const Button = ({ onClick, children }) => {
  return (
    <button className={style.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
