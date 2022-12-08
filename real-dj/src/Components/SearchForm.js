import React from "react";
import './SearchForm.css';
// import { Link, useParams } from 'react-router-dom';
// import { Button } from 'reactstrap';

// This is the search form. It conatins both the input box and the search icon
const SearchForm = ({ searchedString, handleSubmit, handleChange }) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          autoFocus
          className="search-input"
          placeholder="Type your search"
          type="text"
          name="SearchString"
          onChange={handleChange}
          value={searchedString}
        />
      </form>
      <i class="ri-search-line search-icon" onClick={handleSubmit}
        type="submit"></i>
    </div>
  );
};

export default SearchForm;
