import style from "./RatingStar.module.css";

import { IoStar } from "react-icons/io5";

const RatingStar = ({ rating }) => {
  const stars = [0, 0, 0, 0, 0];
  return (
    <div className={style.conteiner}>
      {stars.map((star, i) => {
        const isActive = i < rating;
        return isActive ? (
          <IoStar key={i} className={style.active} />
        ) : (
          <IoStar key={i} className={style.deActive} />
        );
      })}
    </div>
  );
};

export default RatingStar;
