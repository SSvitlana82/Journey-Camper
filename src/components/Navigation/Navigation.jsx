import { NavLink } from "react-router-dom";
import style from "./Navigation.module.css";
import { useState } from "react";

const Navigation = ({}) => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/catalog">Catalog </NavLink>
        <NavLink to="/favorites">Favorite camper</NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
