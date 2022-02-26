import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";


// eslint-disable-next-line react/display-name
export default ({ currentUser, logout, findProduct, history, location}) => {

  
  const cart_icon = (
    <svg
      width="24"
      height="24"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="9" cy="20" r="2"></circle>
      <circle cx="16" cy="20" r="2"></circle>
      <path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z"></path>
    </svg>
  );

  const render_auth_dropdown = () => (
    <div className="auth-dropdown">
      <p>Hi {currentUser.username.split(" ")[0]}</p>
      <ul className="auth-dropdown-ul">
        <li><Link className="auth-link" to="/newproduct">Sell a product</Link></li>
        <li onClick={logout}><a>Log Out</a></li>
      </ul>
    </div>
  );

  const auth = currentUser ? (
    <div className="nav-bar-items">
      {render_auth_dropdown()}
      {/* <p>Hi {currentUser.username.split(" ")[0]}</p> */}
      <Link to={`/users/${currentUser.id}/cartitems`}>{cart_icon}</Link>
      {/* <button onClick={logout}>Log Out</button> */}
    </div>
  ) : (
    <div className="nav-bar-items">
      <Link className="btn" to="/login">
        Sign in
      </Link>
    </div>
  );

  const cat_dropdown_ul = (
    <ul className="cat-dropdown-ul">
      <li><a>Link 1</a></li>
      <li><a>Link 2</a></li>
      <li><a>Link 3</a></li>
      <li><a>Link 4</a></li>
      <li><a>Link 5</a></li>
      <li><a>Link 6</a></li>
    </ul>
  );

  const categories = (
    <div className="categories">
      <ul className="category-items">
        <li className="cat-dropdown">Special Day Gifts{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Jewelry & Accessories{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Clothing & Shoes{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Home & Living{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Wedding & Party{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Toys & Entertainment{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Art & Collectibles{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Craft Supplies{cat_dropdown_ul}</li>
        <li className="cat-dropdown">Gifts & Gift Cards{cat_dropdown_ul}</li>
      </ul>
    </div>
  );

  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <div>
            <Link className="logo" to="/">
              Btsy
            </Link>
          </div>
          <SearchBar findProduct={findProduct} history={history} location={location}/>
          <div className="auth">{auth}</div>
        </nav>
      </header>
      <div>{categories}</div>
    </div>
  );
};
