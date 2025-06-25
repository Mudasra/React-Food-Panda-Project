// by api call

import RestaurantCard from "./RestaurantCard";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";


const Body = () => {

  const [restaurants, setRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
      );
      const json = await response.json();
      console.log("Full JSON:", json);

      const cardList = json?.data?.cards || [];
      let restaurantArray = [];

      for (const cardObj of cardList) {
        const arr =
          cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (Array.isArray(arr)) {
          restaurantArray = arr;
          break;
        }
      }

      console.log("Found restaurant array of length:", restaurantArray.length);

      const formatted = restaurantArray.map((res) => ({
        id: res.info.id,
        name: res.info.name,
        image: `https://media-assets.swiggy.com/swiggy/image/upload/${res.info.cloudinaryImageId}`,
        rating: res.info.avgRating,
        cuisine: res.info.cuisines.join(", "),
      }));

      setRestaurants(formatted);
      setAllRestaurants(formatted);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };
  

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
      {/* conditional rendering - if you have a condition and you render according to the condition   */}
      <div className="res-container">
        {restaurants.length === 0 ? (
          // <p>Loading...</p>
          <ShimmerUI />
        ) : (
          restaurants.map((r) => (
            <RestaurantCard
              key={r.id}
              name={r.name}
              image={r.image}
              rating={r.rating}
              cuisine={r.cuisine}
            />
          ))
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Body;













// by manually putting dummy data

// import RestaurantCard from "./RestaurantCard";
// import restaurantList from "../utils/MockData";
// import SearchBar from "./SearchBar.js";
// import Footer from "./Footer.js"
// import { useState , useEffect } from "react";

// const Body = () => {

//   const [restaurants , setRestaurants] = useState(restaurantList);

//   const filterTopRated = () => {
//     const filtered = restaurantList.filter(res => parseFloat(res.rating) > 4);
//     setRestaurants(filtered);
//   };

//   return (
//     <div className="body">
//       <div className="search">
//         <SearchBar onFilter={filterTopRated}/>
//       </div>

//        <div className="res-container">
//          {restaurants.map((res) => (
//           <RestaurantCard
//           key = {res.id}
//           name = {res.name}
//           image = {res.image}
//           rating = {res.rating}
//           cuisine = {res.cuisine}
//           />
//         ) )}
//       </div>

//       <Footer/>

//     </div>
//   )

// }

// export default Body;

