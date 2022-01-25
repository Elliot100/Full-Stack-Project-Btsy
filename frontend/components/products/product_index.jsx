import React from "react";
import ProductItem from "./product_item";

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    return (
      <div>
        <ul>
          {products.map((product) => (
            <ProductItem
              key={`product${product.id}`}
              product={product}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default ProductIndex;
