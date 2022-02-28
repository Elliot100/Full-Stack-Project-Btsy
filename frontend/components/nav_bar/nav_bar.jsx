import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./search_bar";


// eslint-disable-next-line react/display-name
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { currentUser, logout, findProduct, history, location } = this.props;
    const links = {
      tab1: ["Valentine's Day", "Birthday", "Mother's Day", "Anniversary"],
      tab2: ["Accessories", "Bags & Purses", "Necklaces", "Rings", "Earrings", "Bracelets", "Body Jewelry"],
      tab3: ["Women's", "Men's", "Kids' & Baby", "Bags & Purses"],
      tab4: ["Home", "Bath & Beauty", "Pet Supplies"],
      tab5: [
        "Party Supplies",
        "Invitations & Paper",
        "Wedding Decorations",
        "Wedding Gifts",
        "Wedding Accessories",
        "Wedding Clothing",
      ],
      tab6: [
        "Baby & Toddler Toys",
        "Dolls & Action Figures",
        "Stuffed Animals",
        "Games & Puzzles",
        "Learning & School",
        "Kids' Crafts",
      ],
      tab7: ["Prints", "Photography", "Painting", "Sculpture", "Glass Art"],
      tab8: ["Home & Hobby", "Jewelry & Beauty", "Sewing & Fiber", "Papercraft", "Visual Arts", "Sculpting & Forming"],
      tab9: ["Gifts for Her", "Gifts for Kids", "Black owned Btsy Shops", "Birthday Gifts"],
    };

    const cart_icon = (
      <div>
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
        <b></b>
      </div>
    );

    const render_auth_dropdown = () => (
      <div className="auth-dropdown">
        <p>Hi {currentUser.username.split(" ")[0]}</p>
        <ul className="auth-dropdown-ul">
          <li>
            <Link className="auth-link" to="/newproduct">
              Sell a product
            </Link>
          </li>
          <li onClick={logout}>
            <a>Log Out</a>
          </li>
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

    const cat_dropdown_ul = (tab) => (
      <ul className="cat-dropdown-ul">
        {tab.map((subcategory, idx) => (
          <li key={idx}>
            <a>{subcategory}</a>
          </li>
        ))}
      </ul>
    );

    const categories = (
      <div className="categories">
        <ul className="category-items">
          <li className="cat-dropdown">Special Day Gifts{cat_dropdown_ul(links.tab1)}</li>
          <li className="cat-dropdown">Jewelry & Accessories{cat_dropdown_ul(links.tab2)}</li>
          <li className="cat-dropdown">Clothing & Shoes{cat_dropdown_ul(links.tab3)}</li>
          <li className="cat-dropdown">Home & Living{cat_dropdown_ul(links.tab4)}</li>
          <li className="cat-dropdown">Wedding & Party{cat_dropdown_ul(links.tab5)}</li>
          <li className="cat-dropdown">Toys & Entertainment{cat_dropdown_ul(links.tab6)}</li>
          <li className="cat-dropdown">Art & Collectibles{cat_dropdown_ul(links.tab7)}</li>
          <li className="cat-dropdown">Craft Supplies{cat_dropdown_ul(links.tab8)}</li>
          <li className="cat-dropdown">Gifts & Gift Cards{cat_dropdown_ul(links.tab9)}</li>
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
            <SearchBar findProduct={findProduct} history={history} location={location} />
            <div className="auth">{auth}</div>
          </nav>
        </header>
        <div>{categories}</div>
      </div>
    );
  }
}
