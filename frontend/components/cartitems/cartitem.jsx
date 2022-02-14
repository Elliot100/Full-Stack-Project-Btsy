import React from "react";

// eslint-disable-next-line react/display-name
export default ({ cartitem, props }) => {
  const remove_from_cart = (e) => {
    e.preventDefault();

    props.deleteFromCart(cartitem.id);
  };

  const image_title_remove = (
    <section className="image-title-remove">
      <img src={cartitem.image} />
      <div className="title-remove">
        <h1>{cartitem.title}</h1>
        <p onClick={remove_from_cart}>Remove</p>
      </div>
    </section>
  );

  return (
    <div className="cartitem-frame">
      <div className="cartitem-info-frame">
        {image_title_remove}
        <p>${cartitem.price}</p>
      </div>
    </div>
  );
};
