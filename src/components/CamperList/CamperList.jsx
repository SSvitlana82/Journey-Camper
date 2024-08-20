import style from "./CamperList.module.css";
import { useState } from "react";
import CamperCard from "../CamperCard/CamperCard";

const CamperList = ({ array }) => {
  return (
    <div>
      <ul>
        {array.map((item) => {
          return (
            <li key={item._id}>
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
