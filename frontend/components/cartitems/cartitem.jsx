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

  const handleQtyChange = (e) => {
    // console.log("qty", e.target.value);
    props.updateFromCart(cartitem.id, e.target.value);
  };



  const cartitem_qty_dropdown = (
    <select value={cartitem.qty} onChange={handleQtyChange}>
      <option defaultValue="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  );

  return (
    <div className="cartitem-frame">
      <div className="cartitem-info-frame">
        {image_title_remove}
        {cartitem_qty_dropdown}{cartitem.qty}
        <p>${cartitem.product.price}</p>
      </div>
    </div>
  );
};

{/* <select onchange="window.location.href = this.value">
  <option value="#" selected="selected">1</option>
  <option value="#">2</option>
  <!--<option disabled>2</option>-->
  <option value="#">3</option>
  <option value="#">4</option>
  <option value="#">5</option>
  <option value="#">6</option>
  <option value="#">7</option>
  <option value="#">8</option>
  <option value="#">9</option>
</select> */}
