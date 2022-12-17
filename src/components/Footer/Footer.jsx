import React from "react";
import css from "./footer.module.css";
import Logo from "../../assets/logo.png";
import {
  InboxIcon,
  PhoneIcon,
  LocationMarkerIcon,
  LoginIcon,
  UserIcon,
  LinkIcon,
} from "@heroicons/react/outline";

const Footer = () => {
  return (
    <div className={css.cFooterWrapper}>
      <hr />
      <div className={css.cFooter}>
        <div className={css.logo}>
          <img src={Logo} alt="" className="logo" />
          <span>mykaa</span>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Conatct Us</span>
            <span className={css.pngLine}>
              <LocationMarkerIcon className={css.icon}></LocationMarkerIcon>
              <span>111 North Avenue Orlando FL 32509</span>
            </span>
            <span className={css.pngLine}>
              <PhoneIcon className={css.icon}></PhoneIcon>
              <span>9960703294</span>
            </span>
            <span className={css.pngLine}>
              <InboxIcon className={css.icon}></InboxIcon>
              <span>manasi@gmail.com</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Account</span>
            <span className={css.pngLine}>
              <LoginIcon className={css.icon}></LoginIcon>
              <span>Sign-in</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Company</span>
            <span className={css.pngLine}>
              <UserIcon className={css.icon}></UserIcon>
              <span>About Us</span>
            </span>
          </div>
        </div>
        <div className={css.block}>
          <div className={css.detail}>
            <span>Resources</span>
            <span className={css.pngLine}>
              <LinkIcon className={css.icon}></LinkIcon>
              <span>Safty Privacy and Terms</span>
            </span>
          </div>
        </div>
      </div>

      <div className={css.copyRight}>
        <span>Made with &hearts; by MANASI WAGH</span>
      </div>
    </div>
  );
};

export default Footer;
