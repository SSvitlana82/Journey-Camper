import style from "./Modalnfo.module.css";
import { useState } from "react";
import React from "react";
import { Image } from "antd";

const Modalnfo = ({ itemCamper }) => {
  return (
    <div>
      <Image.PreviewGroup
        preview={{
          onChange: (current, prev) =>
            console.log(`current index: ${current}, prev index: ${prev}`),
        }}
      >
        {itemCamper.gallery.map((img) => {
          return <Image width={200} src={img} key={img} />;
        })}
      </Image.PreviewGroup>
      <p className={style.textContainer}>{itemCamper.description}</p>
    </div>
  );
};

export default Modalnfo;
