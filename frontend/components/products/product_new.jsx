import React from 'react';
import FlashMessage from 'react-flash-message';

class ProductNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      image: "",
      showMessage: false
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({showMessage: false});
    if (this.state.title && this.state.description && this.state.price && this.state.image) {
          this.props.createProduct(this.state)
          .then((product) => this.props.history.push(`/products/${product.id}`));

    } else {
      this.setState({ showMessage: true });
    }
  }

  render() {
    return (
      <div className="session-form">
        <h2>Sell a product!</h2>
        <form>
          <label>
            title :
            <input type="text" value={this.title} onChange={this.handleInput("title")} />
          </label>
          <br />
          <label>
            description :
            <input type="text" value={this.description} onChange={this.handleInput("description")} />
          </label>
          <br />
          <label>
            price :
            <input type="text" value={this.price} onChange={this.handleInput("price")} />
          </label>
          <br />
          <label>
            image url :
            <input type="text" value={this.image} onChange={this.handleInput("image")} />
          </label>
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            submit
          </button>
          {this.state.showMessage && (
            <div>
              <FlashMessage duration={5000}>
                <strong>please fill out all the fields</strong>
              </FlashMessage>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default ProductNew;