import BookForm from "../BookForm/BookForm";
import style from "./Features.module.css";
import OptionList from "../OptionList/OptionList";
import Vehicle from "../Vehicle/Vehicle";
const Features = ({ itemCamper }) => {
  return (
    <div className={style.boxFeatures}>
      <section className={style.section}>
        <div className={style.flex}>
          <OptionList detailsOption={itemCamper.details} />
        </div>
        <div className={style.vehicleBox}>
          <h3 className={style.vehicle}>Vehicle details</h3>
          <hr className={style.line}></hr>
          <Vehicle details={itemCamper} />
        </div>
      </section>
      <BookForm />
    </div>
  );
};

export default Features;
