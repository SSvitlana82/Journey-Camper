import Icon from "../Icon/Icon";
import ModalDescription from "../ModalDescription/ModalDescription";
import Modalnfo from "../Modalnfo/Modalnfo";
import style from "./ModalForm.module.css";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";

const ModalForm = ({ itemCamper, closeModal }) => {
  return (
    <div className={style.backdrope}>
      <div className={style.modal}>
        <section className={style.headerModal}>
          <div className={style.name}>
            <h2>{itemCamper.name}</h2>
            <button onClick={closeModal}>
              <Icon className={style.close} id="route" />
            </button>
          </div>
          <div className={style.info}>
            <p className={style.rating}>
              <IoStarOutline className={style.starIcon} />
              {itemCamper.rating}({itemCamper.reviews.length} Reviews)
            </p>
            <p className={style.location}>{itemCamper.location}</p>
          </div>
          <div className={style.priceBox}>
            <p className={style.price}>€{itemCamper.price.toFixed(2)}</p>
          </div>
        </section>
        <section className={style.scroll}>
          <Modalnfo itemCamper={itemCamper} />
          <ModalDescription itemCamper={itemCamper} />
        </section>
      </div>
    </div>
  );
};

export default ModalForm;
