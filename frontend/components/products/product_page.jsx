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
        <form>
          {title}
          {price}
          {description}
        </form>
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
            <div className="product-page-img">
              {this.product_image()}
            </div>
            {this.product_info()}
          </section>
        </div>
      </div>
    );
  }
}

export default ProductPage;