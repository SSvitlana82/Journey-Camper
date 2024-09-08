import style from "./InputLocation.module.css";

import Icon from "../../Icon/Icon";
const InputLocation = ({ value, setValue }) => {
  return (
    <div className={style.blockLocation}>
      <Icon id="location" className={style.local} />

      <input
        placeholder="Kyiv, Ukraine"
        className={style.input}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
    </div>
  );
};

export default InputLocation;
