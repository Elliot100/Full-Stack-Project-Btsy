import React from "react";
// import WelcomeBar from "./nav_bar/welcome_bar_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import ProductIndexContainer from "./products/product_index_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import Home from "./home/home";
import ProductPageContainer from "./products/product_page_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";


// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={Home} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <Switch>
      <ProtectedRoute path="/products/:id" component={ProductPageContainer} />
      <ProtectedRoute exact path="/products" component={ProductIndexContainer} />
    </Switch>
  </div>
);
