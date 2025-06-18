const SearchBar = () => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for delicious food..."
        className="search-input"
      />
      <button className="search-button">Search</button>
    </div>
  );
};


export default SearchBar;