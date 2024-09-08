import style from "./Vehicle.module.css";

const Vehicle = ({ details }) => {
  return (
    <ul className={style.list}>
      <li className={style.listItem}>
        <p className={style.name}>Form</p>
        <p className={style.name}>Panel truck</p>
      </li>
      <li className={style.listItem}>
        <p className={style.name}>Length</p>
        <p className={style.name}>{details.length}</p>
      </li>
      <li className={style.listItem}>
        <p className={style.name}>Width</p>
        <p className={style.name}>{details.width}</p>
      </li>
      <li className={style.listItem}>
        <p className={style.name}>Height</p>
        <p className={style.name}>{details.height}</p>
      </li>
      <li className={style.listItem}>
        <p className={style.name}>Tank</p>
        <p className={style.name}>{details.tank}</p>
      </li>
      <li className={style.listItem}>
        <p className={style.name}>Consumption</p>
        <p className={style.name}>{details.consumption}</p>
      </li>
    </ul>
  );
};

export default Vehicle;
