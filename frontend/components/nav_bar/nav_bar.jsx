import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
export default ({ currentUser, logout }) => {
  const cart_icon = (
    <span className="btn">
      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="9" cy="20" r="2"></circle>
        <circle cx="16" cy="20" r="2"></circle>
        <path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z"></path>
      </svg>
    </span>
  );

  const search_bar = (
  <input id="global-enhancements-search-query" 
    data-id="search-query" 
    data-search-input="" 
    type="text" 
    name="search_query" 
    className="search-bar" 
    placeholder="Search for anything" 
    value="" 
    autoComplete="off" 
    autoCorrect="off" 
    autoCapitalize="off"/>
  );

  const auth = currentUser ? (
    <div>
      <p>Hello {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div className="nav-bar-items">
      <Link className="btn" to="/login">
        Sign in
      </Link>
      <div>{cart_icon}</div>
    </div>
  );

  const categories = (
    <div className="categories">
      <ul className="category-items">
        <li className="btn">Special Day Gifts</li>
        <li className="btn">Jewelry & Accessories</li>
        <li className="btn">Clothing & Shoes</li>
        <li className="btn">Home & Living</li>
        <li className="btn">Wedding & Party</li>
        <li className="btn">Toys & Entertainment</li>
        <li className="btn">Art & Collectibles</li>
        <li className="btn">Craft Supplies</li>
        <li className="btn">Gifts & Gift Cards</li>
      </ul>
    </div>
  );

  const website_message = (
    <div className="website-message">
      <h1>Find extra-special ways to express your love.</h1>
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
          <div>{search_bar}</div>
          <div>{auth}</div>
        </nav>
      </header>
      <div>{categories}</div>
      <div>{website_message}</div>
    </div>
  );
};
