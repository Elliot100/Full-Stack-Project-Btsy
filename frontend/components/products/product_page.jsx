import React from 'react';
import { Link } from 'react-router-dom';


class ProductPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      image: "",
      description: ""
    };
  }

  componentDidMount() {
    this.props.fetchSingleProduct();
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.products !== prevProps.products) {
  //     const { products } = this.props;
  //     let product_id = this.props.match.params.id;

  //     products.forEach((product) => {
  //       if (product_id == product.id) {
  //         // selected_product = product;
  //         this.setState(product);
  //       }
  //     });
  //   }
  // }

  helperFunction() {
    console.log(this.props)
  }

  render() {
    console.log("asdfada", this.props);

    if (this.props.products.length === 0) {
      return <div>LOAIDIGNASDFA</div>
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
              <img src={this.image} />
            </div> 
            <div className="product-info">
              <form>
                {this.title}
                {this.price}
                {this.description}
              </form>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default ProductPage;