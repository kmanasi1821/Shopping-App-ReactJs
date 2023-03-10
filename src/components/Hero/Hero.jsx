import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className={css.container}>
      {/*left side */}
      <div className={css.h_sides}>
        <span className={css.text1}>Skin protection cream</span>
        <div className={css.text2}>
          <span>Trendy Collection</span>
          <span>
            Seedily say has suitable disposal and boy. Exercise joy man children
            rejoined
          </span>
        </div>
      </div>

      {/* middle side hero image */}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} width={600} alt="" />
      </div>

      {/* right side */}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly Traffic</span>
        </div>
        <div className={css.customers}>
          <span>100K</span>
          <span>Happy Coustomers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
