import React from "react";

// eslint-disable-next-line react/display-name
export default ({ cartitem }) => {
  return (
    <div className="cartitem-frame">
      <h1>{cartitem.title}</h1>
    </div>
  )
};
