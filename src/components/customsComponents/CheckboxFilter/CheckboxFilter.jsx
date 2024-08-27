import Icon from "../../Icon/Icon";
import style from "./CheckboxFilter.module.css";
import clsx from "clsx";
import { useState } from "react";

const CheckboxFilter = ({
  handleCheckboxChange,
  title,
  icon,
  isActive,
  id,
}) => {
  const myClass = clsx(style.checkBox, isActive && style.active);
  return (
    <div
      onClick={handleCheckboxChange}
      value={id}
      className={myClass}
      checked={isActive}
    >
      <Icon className={style.iconFilter} id={icon} />
      <p className={style.titleIcon}>{title}</p>
    </div>
  );
};

export default CheckboxFilter;
