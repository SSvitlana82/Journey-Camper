import style from "./Modalnfo.module.css";

import React from "react";
import { Image } from "antd";

const Modalnfo = ({ itemCamper }) => {
  return (
    <div>
      <div className={style.imageContainer}>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {itemCamper.gallery.map((img) => {
            return (
              <Image width={300} src={img} key={img} className={style.img} />
            );
          })}
        </Image.PreviewGroup>
      </div>
      <p className={style.textContainer}>{itemCamper.description}</p>
    </div>
  );
};

export default Modalnfo;
