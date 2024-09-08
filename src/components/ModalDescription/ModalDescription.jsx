import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import style from "./ModalDescription.module.css";
import { useState } from "react";

const ModalDescription = ({ itemCamper }) => {
  const [features, setFeatures] = useState(true);

  return (
    <div>
      <div className={style.conteiner}>
        <button
          className={style.btnFeatures}
          onClick={() => {
            setFeatures(true);
          }}
        >
          <h3 className={style.name}>Features</h3>
        </button>
        <button
          className={style.btnReviws}
          onClick={() => {
            setFeatures(false);
          }}
        >
          <h3 className={style.name}>Reviews</h3>
        </button>
      </div>
      <hr className={style.line}></hr>
      {features ? (
        <Features itemCamper={itemCamper} />
      ) : (
        <Reviews reviews={itemCamper.reviews} />
      )}
    </div>
  );
};

export default ModalDescription;
