import React from 'react';
import { Link } from 'react-router-dom';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchSingleProduct();
  }

  render() {
    if (!this.props.product) {
      return <div>LOADING</div>
    }
    
    const {image, title, price, description} = this.props.product;
    // console.log(this.props.product);

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
              <img src={image} />
            </div>
            <div className="product-info">
              <form>
                {title}
                {price}
                {description}
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductPage;