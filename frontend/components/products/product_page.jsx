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

    products.forEach((product) => {
      if (product_id == product.id) {
        selected_product = product;
      }
    });

    return (
      <div>
        <div className="product-page-back-button">
          <Link className="btn" to="/products">
            back
          </Link>
        </div>
        <div className="product-page">
          <section className="product-page-frame">
            <div className="product-page-img">
              <img src={selected_product.image} />
            </div> 
            <div className="product-info">
              <form>
                {selected_product.title}
                {selected_product.price}
                {selected_product.description}
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductPage;