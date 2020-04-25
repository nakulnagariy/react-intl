import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./components/home/home";
import About from "./components/about/about";
import PageNotFound from "./components/404/404";

const Pages = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route component={PageNotFound} />
      </Switch>
    </React.Fragment>
  );
};

export default Pages;
