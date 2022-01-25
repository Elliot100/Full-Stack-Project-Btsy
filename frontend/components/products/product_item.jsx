import React from "react";

// eslint-disable-next-line react/display-name
export default ({ product, props }) => {

  const handleClick = e => {
    e.preventDefault();
    props.history.push(`/products/${product.id}`);
  };
  
  return (
    <button onClick={handleClick}>
      <img className="product-img" src={product.image} />
    </button>
  );
};
