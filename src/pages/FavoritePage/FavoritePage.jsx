import style from "./FavoritePage.module.css";
import { useState } from "react";
import { selectFavorites } from "../../redux/favorites/selectors";
import CamperList from "../../components/CamperList/CamperList";
import { useSelector } from "react-redux";

const FavoritePage = ({}) => {
  const arrayFavorite = useSelector(selectFavorites);
  return (
    <main className={style.containerMain}>
      <CamperList array={arrayFavorite} isFavorite={true}></CamperList>
    </main>
  );
};

export default FavoritePage;
