import React from "react";

// eslint-disable-next-line react/display-name
export default ({ product }) => {
  
  return (
    <img className="product-img" src={product.image} />
  );
};
