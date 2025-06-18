import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/MockData";
import SearchBar from ".\SearchBar.js";
import Footer from "./Footer.js"

const Body =() =>{
  return (
    <div className="body">
      <div className="search">
        <SearchBar/>
      </div>

      <div className="res-container">
        {restaurantList.map((res) => (
          <RestaurantCard
          key = {res.id}
          name = {res.name}
          image = {res.image}
          rating = {res.rating}
          cuisine = {res.cuisine}
          />
        )

        )}
      </div>

      <Footer/>
    </div>
  )
}

export default Body;