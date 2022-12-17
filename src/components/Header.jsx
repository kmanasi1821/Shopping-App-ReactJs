import React from "react";
import css from "./Header.module.css";
import Logo from "../assets/logo.png";
import { CgShoppingCart } from "react-icons/cg";

const Header = () => {
  return (
    <div className={css.container}>
      <div className={css.logo}>
        <img src={Logo} alt="" />
        <span>Mykaa</span>
      </div>

      <div className={css.right}>
        <ul className={css.menu}>
          <li>Collections</li>
          <li>Brands</li>
          <li>New</li>
          <li>Sales</li>
          <li>ENG</li>
        </ul>
      </div>
      <input type="text" className={css.search} placeholder="Search" />

      <CgShoppingCart className={css.cart}></CgShoppingCart>
    </div>
  );
};

export default Header;
