import React from "react";
import Cartitem from "./cartitems";

class CartitemIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchCartitems();
  }

  render() {
    const { cartitems } = this.props;
    return (
      <div className="home-cartitems">
        <div className="cartitem-img-frame">
          {cartitems.map((cartitem) => (
            <Cartitem key={`cartitem${cartitem.id}`} cartitem={cartitem} props={this.props} />
          ))}
        </div>
      </div>
    );
  }
}

export default CartitemIndex;
