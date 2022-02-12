import React from "react";

// eslint-disable-next-line react/display-name
export default ({ cartitem, props }) => {
  // const handleClick = (e) => {
  //   e.preventDefault();

  //   props.history.push(`/cartitems/${cartitem.id}`);
  // };

  return <div className="cartitem-img imagedropshadow" >{cartitem.product_id}</div>;
};
