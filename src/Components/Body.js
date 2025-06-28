// by spoonacular api - but it has limited requests per day  

import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useFetchRecipes from "../utils/useFetch"; // custom hook to fetch data


const API_KEY = "e79e25cf11f848caae8bad2978bfce6e";
const URL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=6&apiKey=${API_KEY}`;

const Body = () => {

  const { data, loading } = useFetchRecipes(URL);
  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

    useEffect(() => {
    setRestaurants(data);
    setAllRestaurants(data);
  }, [data]);


  const handleFilter = (filterParam) => {
    if (filterParam === "topRated") {
      const filtered = allRestaurants.filter((r) => parseFloat(r.rating) > 4.2);
      setRestaurants(filtered);
    } else {
      const filtered = allRestaurants.filter((r) =>
        r.name.toLowerCase().includes(filterParam.toLowerCase())
      );
      setRestaurants(filtered);
    }
  };

  return (
    <div className="body">
      <div className="search">
        <SearchBar onFilter={handleFilter} />
      </div>

      <div className="res-container">
        {loading ? (
          <ShimmerUI />
        ) : (
          restaurants.map((r) => (
            <Link key={r.id} to={`/restaurant/${r.id}`} className="card-link">
              <RestaurantCard
                id={r.id}
                name={r.name}
                image={r.image}
                rating={r.rating}
                cuisine={r.cuisine}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;

