import React from 'react';

class ProductNew extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      price: "",
      image: "",
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
    this.props.createProduct(this.state)
      .then((product) => this.props.history.push(`/products/${product.id}`));
    // this.props.login(this.state).then(() => this.props.history.push("/products"));

    // () => {
    //   this.props.addToCart(id).then(() => this.props.history.push(`/users/${this.props.currentUser.id}/cartitems`));
    // };

    // https://st4.depositphotos.com/16549710/31382/i/1600/depositphotos_313828130-stock-photo-concrete-pot-modern-geometric-concrete.jpg
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
            <input type="text" value={this.image_url} onChange={this.handleInput("image")} />
          </label>
          <br />
          <button className="growing-button" onClick={this.handleSubmit}>
            submit
          </button>
          {/* <br />
          or
          <button className="growing-button" onClick={this.handleDemoUser}>
            Log in as Demo User
          </button> */}
        </form>
      </div>
    );
  }
}

export default ProductNew;