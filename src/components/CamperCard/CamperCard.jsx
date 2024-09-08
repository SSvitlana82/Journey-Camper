import style from "./CamperCard.module.css";
import { useState } from "react";

import { IoStar } from "react-icons/io5";
import Button from "../customsComponents/Button/Button";
import ModalForm from "../ModalForm/ModalForm";
import Icon from "../Icon/Icon";
import OptionList from "../OptionList/OptionList";
import { useDispatch } from "react-redux";
import { addFavorite } from "../../redux/favorites/slice";

import { useSelector } from "react-redux";
import { selectFavorites } from "../../redux/favorites/selectors";

const CamperCard = ({ data }) => {
  const [modalState, setModalState] = useState(false);
  const arrayFavorite = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const showModal = () => {
    setModalState(true);
  };
  const closeModal = () => {
    setModalState(false);
  };
  const handleFavorite = () => {
    dispatch(addFavorite(data));
  };
  const isActive = arrayFavorite.some((el) => el._id === data._id);

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
        <div className={style.conteyner}>
          <div className={style.title}>
            <h3 className={style.name}>{data.name}</h3>
            <div className={style.block}>
              <p className={style.price}>€{data.price.toFixed(2)}</p>
              <button className={style.favoriteButton} onClick={handleFavorite}>
                <Icon
                  className={isActive ? style.iconHeart : style.deActive}
                  id="heart"
                ></Icon>
              </button>
            </div>
          </div>
          <div className={style.info}>
            <p className={style.rating}>
              <IoStar className={style.starIcon} />
              {data.rating}({data.reviews.length} Reviews)
            </p>
            <p className={style.location}>
              <Icon
                id="location"
                width="16px"
                height="16px"
                className={style.iconLocation}
              />{" "}
              {data.location}
            </p>
          </div>
        </div>
        <div>
          <p className={style.textContainer}>{data.description}</p>
        </div>

        <div className={style.features}>
          <OptionList detailsOption={data.details} maxLength={6} />
        </div>
        <div className={style.btnMore}>
          <Button onClick={showModal}>Show more</Button>
        </div>
      </div>
      {modalState && <ModalForm closeModal={closeModal} itemCamper={data} />}
    </div>
  );
};

export default CamperCard;
