import BookForm from "../BookForm/BookForm";
import style from "./Features.module.css";
import { useState } from "react";
import Icon from "../Icon/Icon";
import OptionList from "../OptionList/OptionList";
import { Flex } from "antd";
import Vehicle from "../Vehicle/Vehicle";
const Features = ({ itemCamper }) => {
  return (
    <div className={style.boxFeatures}>
      <section className={style.section}>
        <Flex className={style.flex}>
          <OptionList detailsOption={itemCamper.details} />
        </Flex>
        <div className={style.vehicleBox}>
          <h3 className={style.vehicle}>Vehicle details</h3>
          <Vehicle details={itemCamper} />
        </div>
      </section>
      <BookForm />
    </div>
  );
};

export default Features;
