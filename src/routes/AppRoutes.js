import {Route, Switch} from "react-router-dom";
import {AppList} from "../components/AppList";
import { AppForm } from "../components/AppForm";
import React from "react";
import {AppHome} from "../components/AppHome";

export const AppRoutes = () => {
  return <Switch>
      <Route path={"/"} component={AppHome} exact />
      <Route path={"/list"} component={AppList} exact />
      <Route path={"/form"} component={AppForm} exact/>
  </Switch>
};
