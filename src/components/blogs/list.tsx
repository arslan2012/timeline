import React from "react";
import * as articles from "./articles";
import { Link } from "react-router-dom";

export default function List() {
  return (
    <>
      {Object.entries(articles).map(([name]) => (
        <div>
          <Link to={`/blog/${name}`}>{name}</Link>
        </div>
      ))}
    </>
  );
}
