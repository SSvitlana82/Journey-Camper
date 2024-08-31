import Features from "../Features/Features";
import Reviews from "../Reviews/Reviews";
import style from "./ModalDescription.module.css";
import { useState } from "react";

const ModalDescription = ({ itemCamper }) => {
  const [features, setFeatures] = useState(true);

  return (
    <div>
      <button
        onClick={() => {
          setFeatures(true);
        }}
      >
        Features
      </button>
      <button
        onClick={() => {
          setFeatures(false);
        }}
      >
        Reviews
      </button>
      {features ? (
        <Features itemCamper={itemCamper} />
      ) : (
        <Reviews itemCamper={itemCamper} />
      )}
    </div>
  );
};

export default ModalDescription;
