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
    <div>
      <Link className="btn" to="/signup">
        Sign Up
      </Link>
      <Link className="btn" to="/login">
        Log In
      </Link>
    </div>
  );

  return (
    <header className="nav-bar">
      <h1 className="logo">
        <Link className="btn" to="/">
          Btsy
        </Link>
      </h1>
      <div>{display}</div>
    </header>
  );
};
