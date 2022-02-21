import React from "react";
import WelcomeBarContainer from "./nav_bar/welcome_bar_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import ProductIndexContainer from "./products/product_index_container";
import ProductPageContainer from "./products/product_page_container";
import ProductNewContainer from "./products/product_new_container";
import SignupContainer from "./session/signup_container";
import LoginContainer from "./session/login_container";
import CartitemContainer from './cartitems/cartitems_container';
import { Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../utils/route_utils";


// eslint-disable-next-line react/display-name
export default () => (
  <div>
    <Route path="/" component={NavBarContainer} />
    <Route exact path="/" component={WelcomeBarContainer} />
    <Route exact path="/" component={ProductIndexContainer} />
    <Route exact path="/products" component={ProductIndexContainer} />
    <Route path="/products/:id" component={ProductPageContainer} />
    <AuthRoute path="/signup" component={SignupContainer} />
    <AuthRoute path="/login" component={LoginContainer} />
    <ProtectedRoute path="/users/:user_id/cartitems" component={CartitemContainer} />
    <ProtectedRoute path="/newproduct" component={ProductNewContainer} />
  </div>
);
