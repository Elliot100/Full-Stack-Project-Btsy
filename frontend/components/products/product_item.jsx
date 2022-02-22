import React from "react";
const MAX_LENGTH = 30;

// eslint-disable-next-line react/display-name
export default ({ product, props }) => {

  const handleClick = e => {
    e.preventDefault();

    props.history.push(`/products/${product.id}`);
  };
  
  return (
    <div className="product-index">
      <img onClick={handleClick} className="product-img imagedropshadow" src={product.image} />
      <p>{`${product.title.substring(0, MAX_LENGTH)}`}</p>
      <a>${product.price}</a>
    </div>
  );
};
