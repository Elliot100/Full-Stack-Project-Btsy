import React from 'react';
import { Link } from 'react-router-dom';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const { products } = this.props;
    let product_id = this.props.match.params.id;
    let selected_product = {};

    products.forEach( product => {
      if (product_id == product.id) {
        selected_product = product;
      }
    })
  

    return (
      <div className="product-page-back-button">
        <Link className="btn" to="/products">
          back
        </Link>
        {console.log(selected_product)}
      </div>
    );
  }
}

export default ProductPage;