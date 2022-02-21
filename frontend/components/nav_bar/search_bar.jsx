import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return (
      <div className="search-bar">
        <input
          id="global-enhancements-search-query"
          data-id="search-query"
          data-search-input=""
          type="text"
          name="search_query"
          className="search-bar-input"
          placeholder="Search for anything"
          value="HI THERE"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button
          type="submit"
          className="search-bar-button"
          value="Search"
          aria-label="Search"
          data-id="gnav-search-submit-button"
        >
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
    )
  }
}

export default SearchBar;