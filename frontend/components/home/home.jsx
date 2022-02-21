import React from "react";
import ProductIndexContainer from '../products/product_index_container';

// eslint-disable-next-line react/display-name
export default () => {
  const website_message = (
    <div className="website-message">
      <h1>Find extra-special ways to express your love.</h1>
    </div>
  );

  const home_products = (
    <div className="home-products">
      <div className="product-img-frame">
        <img
          className="product-img imagedropshadow"
          src="https://media.istockphoto.com/photos/leather-minimalist-wallet-picture-id916776140?k=20&m=916776140&s=170667a&w=0&h=_GqFjqKp8_LP5_FFeMapbVFzMw7UMxEyiWNhLQYMasE="
        />
        <img
          className="product-img imagedropshadow"
          src="https://homesourcetx-wpengine.netdna-ssl.com/wp-content/uploads/2021/02/Industrial-and-wooden-desk.jpg"
        />
        <img
          className="product-img imagedropshadow"
          src="https://media.istockphoto.com/photos/yellow-artistic-lamp-with-rock-and-wooden-basement-on-the-table-picture-id1127365483?k=20&m=1127365483&s=170667a&w=0&h=mMKNACPJma1MCZPKJJsIZFzUMkVjxSxihn65Al-Zjq0="
        />
        <img
          className="product-img imagedropshadow"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ6eg1NED1_i7sG-GRzpTxaht2SOIGRG7XSA&usqp=CAU"
        />
        <img className="product-img imagedropshadow" src="https://www.kids-world.com/images/LO886.jpg" />
      </div>
    </div>
  );

  return (
    <div>
      <div>{website_message}</div>
      <div>{ProductIndexContainer}</div>
    </div>
  );
};
