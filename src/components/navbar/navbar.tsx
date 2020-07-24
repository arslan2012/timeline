import React from "react";
import styles from "./navbar.module.scss";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navItem}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/blog">Blog</Link>
      </div>
      <div className={styles.navItem}>
        <Link to="/about-me">About me</Link>
      </div>
    </div>
  );
}
