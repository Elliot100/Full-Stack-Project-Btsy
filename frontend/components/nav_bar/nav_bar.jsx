import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
export default ({ currentUser, logout }) => {
  const display = currentUser ? (
    <div>
      <p>Hello {currentUser.username}</p>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
    <div className="nav-bar-items">
      <Link className="btn" to="/signup">
        Sign Up
      </Link>
      <Link className="btn" to="/login">
        Log In
      </Link>
    </div>
  );

  return (
    <header className="header">
      <nav className="nav-bar">
        <div>
          <Link className="logo" to="/">
            Btsy
          </Link>
        </div>
        <div>{display}</div>
      </nav>
    </header>
  );
};
