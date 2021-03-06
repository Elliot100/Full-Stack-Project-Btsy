import React from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


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
    const { id, title, price, description } = this.props.product;
    let addToCartText = "Add to cart";
    let addToCartAction = () => {
      if (this.props.currentUser) {
        this.props.addToCart(id)
        .then(() => 
        this.props.history.push(`/users/${this.props.currentUser.id}/cartitems`)
        )
      } else {
        this.props.history.push(`/login`);
      }
    }
    
    return (
      <div className="product-info">
        <h1 className="product-info-title">{title}</h1>
        <div className="product-info-price">${parseFloat(price).toFixed(2)}</div>
        <div className="product-info-description">
          <h3>Description</h3>
          {description}
        </div>
        <button onClick={addToCartAction} className="growing-button">
          {addToCartText}
        </button>
      </div>
    );
  }

  render() {
    if (!this.props.product) {
      return <div>LOADING</div>
    }
    // const history = useHistory();
    
    return (
      <div>
        <div className="product-page-back-button">
          <p className="btn" onClick={() => this.props.history.goBack()}>back</p>
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