import { useDispatch, useSelector } from "react-redux";
import style from "./CatalogPage.module.css";
import { useState, useEffect } from "react";
import { campersGet } from "../../redux/campers/operations";
import CamperList from "../../components/CamperList/CamperList";
import { selectCampers } from "../../redux/campers/selectors";
import Filters from "../../components/Filters/Filters";

const CatalogPage = ({}) => {
  const dispatch = useDispatch();
  const arrayCampers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(campersGet());
  }, []);

  return (
    <main className={style.containerMain}>
      <Filters />
      <CamperList array={arrayCampers} />
    </main>
  );
};

export default CatalogPage;
