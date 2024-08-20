import { useDispatch } from "react-redux";
import style from "./CatalogPage.module.css";
import { useState, useEffect } from "react";
import { campersGet } from "../../redux/campers/operations";

const CatalogPage = ({}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(campersGet());
  }, []);

  return <div>CatalogPage</div>;
};

export default CatalogPage;
