import * as React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./main";

const BasicRoute = () => {
  return (
    <HashRouter>
      <Switch>
        <Route strict path="/" exact component={Main} />
      </Switch>
    </HashRouter>
  );
};

export default BasicRoute;
