import React from "react";

// eslint-disable-next-line react/display-name
export default ({ cartitem, props }) => {
  const remove_from_cart = (e) => {
    e.preventDefault();

    props.deleteFromCart(cartitem.product.id);
  };

  const image_title_remove = (
    <section className="image-title-remove">
      <img src={cartitem.product.image} />
      <div className="title-remove">
        <h1>{cartitem.product.title}</h1>
        <p onClick={remove_from_cart}>Remove</p>
      </div>
    </section>
  );

  return (
    <div className="cartitem-frame">
      <div className="cartitem-info-frame">
        {image_title_remove}
        {cartitem.qty}
        <p>${cartitem.product.price}</p>
      </div>
    </div>
  );
};
