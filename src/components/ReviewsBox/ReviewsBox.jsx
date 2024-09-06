import style from "./ReviewsBox.module.css";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import RatingStar from "../customsComponents/RatingStar/RatingStar";
import { Avatar, Space } from "antd";

const ReviewsBox = ({ data }) => {
  return (
    <div className={style.revierwerContainer}>
      <div className={style.ratingBox}>
        <Avatar className={style.name}>{data.reviewer_name[0]}</Avatar>

        <div className={style.nameBox}>
          {data.reviewer_name}
          <RatingStar rating={data.reviewer_rating} />
        </div>
      </div>
      <p className={style.reviewe}>{data.comment}</p>
    </div>
  );
};

export default ReviewsBox;
