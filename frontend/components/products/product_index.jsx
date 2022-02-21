import React from "react";
import ProductItem from "./product_item"; 

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.location.search.substring(1)) {
      const searchTerm = this.props.location.search.substring(1);
      this.props.findProduct(searchTerm);
    } else {
      this.props.fetchProducts();
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.location.search !== prevProps.location.search) {
      if (this.props.location.search.substring(1)) {
        const searchTerm = this.props.location.search.substring(1);
        this.props.findProduct(searchTerm);
      } else {
        this.props.fetchProducts();
      }
    }
  }

  render() {
    const { products } = this.props;
    return (
      <div className="home-products">
        <div className="product-img-frame">
          {products.map((product) => (
            <ProductItem key={`product${product.id}`} product={product} props={this.props} />
          ))}
        </div>
      </div>
    );
  }
}

export default ProductIndex;
