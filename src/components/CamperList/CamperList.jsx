import style from "./CamperList.module.css";
import { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";

const CamperList = ({ array }) => {
  return (
    <div className={style.container}>
      <ul className={style.listContainer}>
        {array.map((item) => {
          return (
            <li className={style.itemContainer} key={item._id}>
              <CamperCard data={item} />
            </li>
          );
        })}
      </ul>
      ;
    </div>
  );
};

export default CamperList;
