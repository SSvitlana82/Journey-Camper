import { campersGet } from "../../redux/campers/operations";
import CheckboxFilter from "../customsComponents/CheckboxFilter/CheckboxFilter";
import style from "./Filters.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Icon from "../Icon/Icon";
const categoriesEquipment = [
  {
    title: "AC",
    icon: "ac",
  },
  {
    title: "Automatic",
    icon: "automatic",
  },
  {
    title: "Kitchen",
    icon: "kitchen",
  },
  {
    title: "TV",
    icon: "tv",
  },
  {
    title: "Shower/WC",
    icon: "ion_water-outline",
  },
];
const categoriesType = [
  {
    title: "Van",
    icon: "camper",
  },
  {
    title: "Fully Integrated",
    icon: "camper1",
  },
  {
    title: "Alcove",
    icon: "camper2",
  },
];
const Filters = ({}) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    const { checked } = e.currentTarget;
    const value = e.currentTarget.getAttribute("value");
    console.log(value, checked);
    if (!checked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(
        selectedCategories.filter((category) => category !== value)
      );
    }
    console.log(selectedCategories, e);
  };
  const onSearchClick = () => {
    const data = { selectedCategories };
    dispatch(campersGet(data));
  };
  return (
    <div className={style.container}>
      <p className={style.filter}>Filters</p>
      <div className={style.filterCategory}>
        <h3 className={style.nameFilter}>Vehicle equipment</h3>
        <ul className={style.listF}>
          {categoriesEquipment.map((category, i) => {
            const isActive = selectedCategories.some(
              (el) => el === category.title
            );
            return (
              <li key={i} className={style.itemF}>
                <CheckboxFilter
                  handleCheckboxChange={handleCheckboxChange}
                  title={category.title}
                  icon={category.icon}
                  isActive={isActive}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.filterCategory}>
        <h3 className={style.nameFilter}>Vehicle type</h3>
        <ul className={style.listF}>
          {categoriesType.map((category, i) => {
            const isActive = selectedCategories.some(
              (el) => el === category.title
            );
            return (
              <li key={i} className={style.itemF}>
                <CheckboxFilter
                  handleCheckboxChange={handleCheckboxChange}
                  title={category.title}
                  icon={category.icon}
                  isActive={isActive}
                />
              </li>
            );
          })}
        </ul>
      </div>
      <button onClick={onSearchClick} className={style.btnF}>
        Search
      </button>
    </div>
  );
};

export default Filters;
