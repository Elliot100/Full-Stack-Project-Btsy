import React from 'react';
import { Link } from 'react-router-dom';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: props.location.search.slice(1) || "",
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleDropdown = this.handleDropdown.bind(this);
  }

  componentDidMount() {
    var elements = document.getElementsByClassName("search-dropdown-ul");
    var searchbar = document.getElementsByClassName("search-bar");
    const element = elements[0];

    document.addEventListener("click", function (e) {
      if (e.target !== element && !searchbar[0].contains(e.target)) {
        element.style.display = "none";
      }
    });
  }

  componentWillUnmount() {
    // remve event listener 
  }

  handleInput(e) {
    this.setState({ search: e.target.value });
  }

  handleClick(e) {
    e.preventDefault();
    var elements = document.getElementsByClassName("search-dropdown-ul");
    elements[0].style.display = "none";
    this.props.findProduct(this.state.search).then(() => {
      this.props.history.push(`/?${this.state.search}`);
    });
  }

  handleDropdown(search) {
    var elements = document.getElementsByClassName("search-dropdown-ul");
    elements[0].style.display = "none";
    this.setState({ search });
    this.props.findProduct(search).then(() => {
      this.props.history.push(`/?${search}`);
    });
  }

  search_dropdown() {
    return (
      <ul className="search-dropdown-ul">
        <li className="popular-right-now">
          <b>Popular right now</b>
        </li>
        <li onClick={() => this.handleDropdown("pants")}>
          <a> pants</a>
        </li>
        <li onClick={() => this.handleDropdown("hat")}>
          <a>hat</a>
        </li>
        <li onClick={() => this.handleDropdown("yarn")}>
          <a>yarn</a>
        </li>
        <li onClick={() => this.handleDropdown("slippers")}>
          <a>slippers</a>
        </li>
        <li onClick={() => this.handleDropdown("flowers")}>
          <a>flowers</a>
        </li>
      </ul>
    );
  }

  render_search_dropdown() {
    var elements = document.getElementsByClassName("search-dropdown-ul");
    elements[0].style.display = "flex";
  }

  handleKeyPress(e) {
    if (e.key === "Enter") {
      var elements = document.getElementsByClassName("search-dropdown-ul");
      elements[0].style.display = "none";
      this.props.findProduct(this.state.search).then(() => {
        this.props.history.push(`/?${this.state.search}`);
      });
    }
  }

  render() {
    return (
      <div className="search-bar">
        {this.search_dropdown()}
        <input
          onChange={this.handleInput}
          id="global-enhancements-search-query"
          data-id="search-query"
          data-search-input=""
          type="text"
          name="search_query"
          className="search-bar-input"
          placeholder="Search for anything"
          value={this.state.search}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onKeyPress={this.handleKeyPress}
          onClick={this.render_search_dropdown}
        />

        <button className="search-bar-button" onClick={this.handleClick}>
          <span className="search-bar-button-icon">
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18ZM10,4a6,6,0,1,0,6,6A6.007,6.007,0,0,0,10,4Z"></path>
              <path d="M21,22a1,1,0,0,1-.707-0.293l-4-4a1,1,0,0,1,1.414-1.414l4,4A1,1,0,0,1,21,22Z"></path>
            </svg>
          </span>
        </button>
      </div>
    );
  }
}

export default SearchBar;