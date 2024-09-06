import Icon from "../Icon/Icon";
import style from "./OptionList.module.css";
import { useState } from "react";
Icon;
const getArray = (detailsOption, maxLength) => {
  const arrayOptions = Object.entries(detailsOption);

  arrayOptions.unshift(arrayOptions.pop());
  arrayOptions.unshift(arrayOptions.pop());
  arrayOptions.unshift(arrayOptions.pop());
  if (maxLength) {
    return arrayOptions.slice(0, 6);
  }

  return arrayOptions;
};

const OptionList = ({ detailsOption, maxLength }) => {
  const arrayOptions = getArray(detailsOption, maxLength);
  return (
    <>
      {arrayOptions.map(([key, value]) => {
        return (
          value && (
            <div key={key} className={style.iconBox}>
              <Icon className={style.icon} id={key}></Icon>
              {value} {value > 0 ? key : " "}
            </div>
          )
        );
      })}
    </>
  );
};

export default OptionList;
