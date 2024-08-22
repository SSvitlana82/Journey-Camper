import style from "./CamperCard.module.css";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

const CamperCard = ({ data }) => {
  console.log(data);
  return (
    <div className={style.cardMain}>
      <div className={style.cardContainer}>
        <img
          src={data.gallery[0]}
          alt={data.name}
          className={style.image}
        ></img>
        <div className={style.cardContent}>
          <h3 className={style.name}>{data.name}</h3>
          <p className={style.price}>€{data.price.toFixed(2)}</p>
          <button className={style.favoriteButton}>
            <svg className={style.icon}>
              <use href="#icon-heart"></use>
            </svg>
          </button>
          <div className={style.info}>
            <p className={style.rating}>
              <IoStarOutline className={style.starIcon} />
              {data.rating}({data.reviews.length} Reviews)
            </p>
            <p className={style.location}>{data.location}</p>
          </div>
          <p className={style.textContainer}>{data.description}</p>
          <div className={style.features}>
            <span>
              <svg className={style.icon}>
                <use href="#icon-users"></use>
              </svg>
              {data.passengers} adults
            </span>
            <span>
              <svg className={style.icon}>
                <use href="#icon-settings"></use>
              </svg>
              {data.transmission}
            </span>
            <span>
              <svg className={style.icon}>
                <use href="#icon-fuel"></use>
              </svg>
              {data.fuel}
            </span>
            <span>
              <svg className={style.icon}>
                <use href="#icon-kitchen"></use>
              </svg>
              {data.kitchen ? "Kitchen" : "No Kitchen"}
            </span>
            <span>
              <svg className={style.icon}>
                <use href="#icon-bed"></use>
              </svg>
              {data.beds} beds
            </span>
            <span>
              <svg className={style.icon}>
                <use href="#icon-ac"></use>
              </svg>
              {data.ac ? "AC" : "No AC"}
            </span>
          </div>
          <button className={style.button}>Show more</button>
        </div>
      </div>
    </div>
  );
};

export default CamperCard;
