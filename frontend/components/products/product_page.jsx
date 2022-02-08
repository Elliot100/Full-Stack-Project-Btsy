import React from 'react';
import { Link } from 'react-router-dom';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleProduct();
  }

  product_image() {
    const { image } = this.props.product;
    return <img src={image} />;
  }

  product_info() {
    const { title, price, description } = this.props.product;
    return (
      <div className="product-info">
        <h1 className="product-info-title">{title}</h1>
        <div className="product-info-price">${price}</div>
        <div className="product-info-description">
          <h3>Description</h3>
          {description}
        </div>
        <button className="growing-button" type="submit">
          Add to cart
        </button>
      </div>
    );
  }

  render() {
    if (!this.props.product) {
      return <div>LOADING</div>
    }
    
    return (
      <div>
        <div className="product-page-back-button">
          <Link className="btn" to="/products">
            back
          </Link>
        </div>
        <div className="product-page">
          <section className="product-page-frame">
            <div className="product-page-img">{this.product_image()}</div>
            {this.product_info()}

          </section>
        </div>
      </div>
    );
  }
}

export default ProductPage;