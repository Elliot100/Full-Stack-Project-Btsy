import React from "react";

// eslint-disable-next-line react/display-name
export default ({ cartitem }) => {
  return (
    <div className="cartitem-frame">
      <div className="cartitem-info-frame">
        <img src={cartitem.image}/>
        <h1>{cartitem.title}</h1>
        <p>${cartitem.price}</p>
      </div>
    </div>
  );
};
