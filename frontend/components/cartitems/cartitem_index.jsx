import React from "react";
import Cartitem from "./cartitem";
import { Link } from "react-router-dom";

class CartitemIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemstotal: 0,
      subtotal: 0,
      shipping: 0,
      total: 0,
      totalcartitems: 0,
    };
  }

  componentDidMount() {
    this.props.fetchCartitems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.cartitems !== prevProps.cartitems) {
      let itemstotal = 0.00;
      this.props.cartitems.forEach(cartitem => {
        itemstotal += parseFloat(cartitem.product.price * cartitem.qty);
      });
      this.setState({
        itemstotal,
        subtotal: itemstotal,
        shipping: itemstotal * 0.048,
        total: itemstotal + (itemstotal * 0.048)
      });
      var totalcartitems = 0;
      this.props.cartitems.forEach(cartitem => totalcartitems += cartitem.qty);
      this.setState({totalcartitems});

      var user = this.props.currentUser;
      user.totalcartitems = totalcartitems;
    }
  }

  cart_nav() {
    return (
      <div className="cart-nav-frame">
        <div className="cart-nav">
          <p>{this.state.totalcartitems} items in your cart</p>
          <Link className="keep-shopping" to="/products">Keep shopping</Link>
        </div>
      </div>
    );
  }

  checkout_frame() {
    return (
      <div className="checkout-frame">
        <div className="checkout">
          <div className="items-total border-bottom checkout-styles">
            <p>Item(s) total</p>
            <p>${this.state.itemstotal.toFixed(2)}</p>
          </div>
          <div className="subtotal checkout-styles">
            <p>Subtotal</p>
            <p>${this.state.subtotal.toFixed(2)}</p>
          </div>
          <div className="shipping border-bottom checkout-styles">
            <p>Shipping</p>
            <p>${this.state.shipping.toFixed(2)}</p>
          </div>
          <div className="total checkout-styles">
            <p>Total</p>
            <p>${this.state.total.toFixed(2)}</p>
          </div>
          <button className="growing-button">Proceed to checkout</button>
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
        <div className="frame">
          <div className="frame-left">
            {cartitems.map((cartitem) => {
              return <Cartitem key={`cartitem${cartitem.product.id}`} cartitem={cartitem} props={this.props} />;
            })}
          </div>
          {this.checkout_frame()}
        </div>
      </div>
    );
  }
}

export default CartitemIndex;
