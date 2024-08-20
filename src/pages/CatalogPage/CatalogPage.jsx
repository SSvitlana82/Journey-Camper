import { useDispatch, useSelector } from "react-redux";
import style from "./CatalogPage.module.css";
import { useState, useEffect } from "react";
import { campersGet } from "../../redux/campers/operations";
import CamperList from "../../components/CamperList/CamperList";
import { selectCampers } from "../../redux/campers/selectors";

const CatalogPage = ({}) => {
  const dispatch = useDispatch();
  const arrayCampers = useSelector(selectCampers);

  useEffect(() => {
    dispatch(campersGet());
  }, []);

  return (
    <div>
      <CamperList array={arrayCampers} />
    </div>
  );
};

export default CatalogPage;
