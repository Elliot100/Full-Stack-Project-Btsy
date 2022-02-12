import React from "react";
import Cartitem from "./cartitem";

class CartitemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartitems();
  }

  render() {
    const { cartitems } = this.props;
    console.log("zdsfe", cartitems);

    if (!this.props.cartitems) {
      return <div>LOADING</div>;
    }
    return (
      <div className="home-cartitems">
        <div className="cartitem-img-frame">
          {cartitems.map((cartitem) => (
            <Cartitem key={`cartitem${cartitem.id}`} cartitem={cartitem} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartitemIndex;
