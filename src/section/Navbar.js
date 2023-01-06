import React from "react";
import { Image } from "./Image";
import logo from "../assets/logo.png";
import search from "../assets/search.png";
import dot from "../assets/dot.png";
import styles from "./uppersection.module.css";

export const Navbar = () => {
  return (
    <div >
      <div className={styles.navContent}>
        <div className={styles.navImage}>
          <Image img={logo} />
        </div>
        <div className={styles.navright}>
          <h5>HOME</h5>
          <h5>WHAT WE DO</h5>
          <h5>HIRE EXPERTS</h5>
          <h5>COMPANY</h5>
          <h5>SAY HELLO!</h5>
          <Image img={search} />
          <Image img={dot} />
        </div>
      </div>
    </div>
  );
};
