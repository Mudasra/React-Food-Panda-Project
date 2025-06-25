import { useState } from "react";

const SearchBar = ({ onFilter }) => {
  const [searchText, setsearchText] = useState("");
  // whenever state variable updates, react triggers a reconciliation cycle (re-render its component)

  // react is rerendering the whole component but is just updating the part of the component that has changed
  console.log("body rendered");
  return (
    <div className="Search-container">
      <input
        type="text"
        className="search-input"
        onChange={(e) => {
          setsearchText(e.target.value);
        }}
        value={searchText}
        placeholder="Search the food"
      />

      <button
        className="search-button"
        value={searchText}
        onClick={() => {
          onFilter(searchText);
        }}
      >
        Search
      </button>

      <button
        className="search-button"
        onClick={() => {
          onFilter("topRated");
        }}
      >
        Top Restaurants
      </button>
    </div>
  );
};

export default SearchBar;
