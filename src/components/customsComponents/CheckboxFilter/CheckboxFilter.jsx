import Icon from "../../Icon/Icon";
import style from "./CheckboxFilter.module.css";
import { useState } from "react";

const CheckboxFilter = ({ handleCheckboxChange, title, icon, isActive }) => {
  return (
    <div
      onClick={handleCheckboxChange}
      value={title}
      checked={isActive}
      className={style.checkBox}
    >
      <Icon className={style.iconFilter} id={icon} />
      <p className={style.titleIcon}>{title}</p>
    </div>
  );
};

export default CheckboxFilter;
