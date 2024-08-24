import style from "./InputLocation.module.css";
import { useState } from "react";
import Icon from "../../Icon/Icon";
const InputLocation = ({ value, setValue }) => {
  return (
    <div>
      <p>
        <Icon id="{icon}" />
      </p>
    </div>
  );
};

export default InputLocation;
