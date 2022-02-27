import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/display-name
export default ({ currentUser, location }) => {

  const website_message = currentUser? (
      <div />
    ) : (
      location.search.substring(1) ? (<div/>) 
      : (
      <div className="website-message">
        {/* {console.log(location.search.substring(1))} */}
        {/* this.props.location.search.substring(1) */}
        <h1>Shop for handmade, vintage, custom, and unique gifts for everyone</h1>
      </div>
      )
    );

  return (
  <div>{website_message}</div>
  )
};
