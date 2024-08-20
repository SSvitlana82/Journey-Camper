import style from "./CamperCard.module.css";
import { useState } from "react";

const CamperCard = ({ data }) => {
  console.log(data);
  return (
    <div>
      <img src={data.gallery[0]}></img>
    </div>
  );
};

export default CamperCard;
