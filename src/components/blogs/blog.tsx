import React from "react";
import * as articles from "./articles";
import { Route, Switch } from "react-router-dom";
import List from "./list";
import styles from "./blog.module.scss";

export default function Blog() {
  document.title = "Blogs";
  return (
    <div className={styles.container}>
      <Switch>
        <Route path={`/blog`} exact={true} component={List} />
        {Object.entries(articles).map(([name, { Article }]) => (
          <div>
            <Route path={`/blog/${name}`} component={Article} />
          </div>
        ))}
      </Switch>
    </div>
  );
}
