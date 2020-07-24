import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./navbar/navbar";

const Home = lazy(() => import("./home/home"));
const AboutMe = lazy(() => import("./aboutMe/aboutMe"));
const Blog = lazy(() => import("./blogs/blog"));

export class App extends React.Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact={true} path="/" component={Home} />
            <Route path="/about-me" component={AboutMe} />
            <Route path="/blog" component={Blog} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}
