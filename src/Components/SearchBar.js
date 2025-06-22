const SearchBar = ({onFilter}) => {
  return (
    <div className="Search-container">
      <input type="text" placeholder="Click to get the top rated restaurants" className="search-input" disabled/> 
       <button className="search-button" onClick={onFilter}>Top Restaurants</button> 
     </div>
  );
}

export default SearchBar;