import style from "./HomePage.module.css";
import { useState } from "react";

const HomePage = ({}) => {
  return (
    <div className={style.home}>
      <header className={style.header}>
        <h1>Camper Rentals in Ukraine</h1>
      </header>
      <div className={style.hero}>
        <h2>Travel Ukraine with Comfort!</h2>
      </div>
      <div className={style.content}>
        <h3>Enjoy the Freedom of Travel</h3>
        <p>
          We offer modern and comfortable campers for your unforgettable trips
          across Ukraine. With our campers, you can explore the most beautiful
          corners of the country, enjoy nature, and feel at home wherever you
          go.
        </p>
        <p>
          Our company provides a wide range of campers to suit all needs: from
          compact models for small families to spacious motorhomes for large
          groups. All our campers are equipped with everything necessary for
          comfortable living: kitchen, sleeping areas, shower and toilet,
          heating, and air conditioning systems.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
