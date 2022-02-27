import React from "react";
import ProductItem from "./product_item"; 

class ProductIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numSearchResult: 0,
    }
  }

  componentDidMount() {
    if (this.props.location.search.substring(1)) {
      const searchTerm = this.props.location.search.substring(1);
      this.props
        .findProduct(searchTerm)
        .then((products) => this.setState({ numSearchResult: products.products.length }));
    } else {
      this.props.fetchProducts();
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.location.search !== prevProps.location.search) {
      if (this.props.location.search.substring(1)) {
        const searchTerm = this.props.location.search.substring(1);
        this.props.findProduct(searchTerm)
          .then((products) => this.setState({numSearchResult: products.products.length}));
      } else {
        this.props.fetchProducts();
      }
    }
  }

  numSearchResults() {
    if (this.props.location.search.substring(1)) {
      return (
        <div className="search-results">
          <h1>{this.state.numSearchResult} search results </h1>
        </div>
      );
    }
  }

  render() {
    const { products } = this.props;

    return (
      <div>
        {this.numSearchResults()}
        <div className="home-products">
          <div className="product-img-frame">
            {products.map((product) => (
              <ProductItem key={`product${product.id}`} product={product} props={this.props} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductIndex;
