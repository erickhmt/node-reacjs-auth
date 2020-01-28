import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "../layouts/Auth";
import Login from "../pages/Auth/Login";
import SignUp from "../pages/Auth/SignUp";
import RouteWithLayout from "./RouteWithLayout";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <RouteWithLayout
          path="/login"
          exact
          component={Login}
          layout={AuthLayout}
        />
        <RouteWithLayout
          path="/signup"
          exact
          component={SignUp}
          layout={AuthLayout}
        />
        <Route path="*" component={() => <h1>Page not found</h1>} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;