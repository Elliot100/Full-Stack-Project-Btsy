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
      showMessage: false,
      showPriceMessage: false,
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
    this.setState({showPriceMessage: false});

    if (isNaN(this.state.price)) {
      this.setState({ showPriceMessage: true });
    } else if (this.state.title && this.state.description && this.state.price) {
        if (!this.state.image) {
          this.props
            .createProduct({
              title: this.state.title,
              description: this.state.description,
              price: this.state.price,
              image:
                "https://media.istockphoto.com/vectors/default-image-icon-vector-missing-picture-page-for-website-design-or-vector-id1357365823?b=1&k=20&m=1357365823&s=170667a&w=0&h=y6ufWZhEt3vYWetga7F33Unbfta2oQXCZLUsEa67ydM="
            })
            .then((res) => {
              this.props.history.push(`/products/${res.product.id}`);
            });
        } else {
          this.props.createProduct(this.state)
          .then((res) => {
            this.props.history.push(`/products/${res.product.id}`)
          });
        }
    } else {
      this.setState({ showMessage: true });
    } 
  } 

  render() {
    return (
      <div className="session-form">
        <h2>Sell a product!</h2>
        <form className="message-container">
          <label>title</label>
          <input type="text" value={this.title} onChange={this.handleInput("title")} />
          <br />
          <label>description</label>
          <input type="text" value={this.description} onChange={this.handleInput("description")} />
          <br />
          <label>price</label>
          <input type="text" value={this.price} onChange={this.handleInput("price")} />
          <br />
          {this.state.showPriceMessage && (
            <div className="newproduct-price-message">
              <FlashMessage duration={5000}>
                <p>please enter a valid number</p>
              </FlashMessage>
            </div>
          )}
          <label>image url</label>
          <input type="text" value={this.image} onChange={this.handleInput("image")} />
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            Submit
          </button>
          {this.state.showMessage && (
            <div className="newproduct-message">
              <FlashMessage duration={5000}>
                <p>please fill out first 3 fields</p>
              </FlashMessage>
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default ProductNew;