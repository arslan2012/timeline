import React from "react";
import * as articles from "./articles";
import { Link } from "react-router-dom";
import styles from "./list.module.scss";

export default function List() {
  return (
    <>
      {Object.entries(articles).map(([name, { title, description }]) => (
        <Link to={`/blog/${name}`}>
          <div className={styles.link}>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </Link>
      ))}
    </>
  );
}
