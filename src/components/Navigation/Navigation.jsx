import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { useState } from "react";

const Navigation = ({}) => {
  return (
    <div>
      <nav className={style.navContainer}>
        <NavLink className={style.navLink} to="/">
          Home
        </NavLink>
        <NavLink className={style.navLink} to="/catalog">
          Catalog{" "}
        </NavLink>
        <NavLink className={style.navLink} to="/favorites">
          Favorite camper
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
