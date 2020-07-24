import React from "react";
import * as articles from "./articles";
import { Route, Switch } from "react-router-dom";
import List from "./list";

export default function Blog() {
  return (
    <Switch>
      <Route path={`/blog`} exact={true} component={List} />
      {Object.entries(articles).map(([name, { Article }]) => (
        <div>
          <Route path={`/blog/${name}`} component={Article} />
        </div>
      ))}
    </Switch>
  );
}
