import React from "react";
import Cartitem from "./cartitem";
import { Link } from "react-router-dom";

class CartitemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartitems();
  }

  cart_nav() {
    return (
      <div className="cart-nav-frame">
        <div className="cart-nav">
          <p>{this.props.cartitems.length} items in your cart</p>
          <Link to="/products">Keep shopping</Link>
        </div>
      </div>
    );
  }

  render() {
    const { cartitems } = this.props;

    if (!this.props.cartitems) {
      return <div>LOADING</div>;
    }
    return (
      <div>
        {this.cart_nav()}
        <div>
          {cartitems.map((cartitem) => (
            <Cartitem key={`cartitem${cartitem.id}`} cartitem={cartitem} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartitemIndex;
