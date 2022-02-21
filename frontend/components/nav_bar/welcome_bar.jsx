import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
export default ({ currentUser }) => {

  const website_message = currentUser ? (
      <div/>
  ) : (
    <div className="website-message">
      <h1>Find extra-special ways to express your love.</h1>
    </div>
  );

  return (
  <div>{website_message}</div>
  )
};
