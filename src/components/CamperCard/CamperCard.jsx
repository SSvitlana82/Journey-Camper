import style from "./CamperCard.module.css";
import { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import svg from "../../assets/symbol-defs.svg";
import Button from "../customsComponents/Button/Button";
import ModalForm from "../ModalForm/ModalForm";
import Icon from "../Icon/Icon";
import OptionList from "../OptionList/OptionList";

const CamperCard = ({ data }) => {
  const [modalState, setModalState] = useState(false);

  const showModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };

  return (
    <div className={style.cardMain}>
      <div className={style.cardImg}>
        <img
          src={data.gallery[0]}
          alt={data.name}
          className={style.image}
        ></img>
      </div>
      <div className={style.cardContent}>
        <div className={style.title}>
          <h3 className={style.name}>{data.name}</h3>
          <div className={style.block}>
            <p className={style.price}>€{data.price.toFixed(2)}</p>
            <button className={style.favoriteButton}>
              <Icon className={style.iconHeart} id="heart"></Icon>
            </button>
          </div>
        </div>
        <div className={style.info}>
          <p className={style.rating}>
            <IoStarOutline className={style.starIcon} />
            {data.rating}({data.reviews.length} Reviews)
          </p>
          <p className={style.location}>{data.location}</p>
        </div>
        <div>
          <p className={style.textContainer}>{data.description}</p>
        </div>

        <div className={style.features}>
          <OptionList detailsOption={data.details} maxLength={6} />
        </div>
        <div>
          <Button onClick={showModal}>Show more</Button>
        </div>
      </div>
      {modalState && <ModalForm closeModal={closeModal} itemCamper={data} />}
    </div>
  );
};

export default CamperCard;
