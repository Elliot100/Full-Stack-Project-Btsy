import React from 'react';
import { Link } from 'react-router-dom';


class ProductPage extends React.Component {
  render() {
    return(
      <div className='product-page-back-button'>
        <Link className="btn" to="/products">back</Link>
      </div>
    );
  }
}

export default ProductPage;