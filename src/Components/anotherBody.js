// by spoonacular api - but it has limited requests per day  

import RestaurantCard , { Promoted } from "./RestaurantCard";
import SearchBar from "./SearchBar";
import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useFetchRecipes from "../utils/useFetch"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflineGame from "../utils/OfflineGame"; 



const API_KEY = "e79e25cf11f848caae8bad2978bfce6e";
const URL = `https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=6&apiKey=${API_KEY}`;

const Body = () => {

  // const { data, loading } = useFetchRecipes(URL);
  // const [restaurants, setRestaurants] = useState([]);
  // const [allRestaurants, setAllRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <OfflineGame />


  const PromotedRestaurant = Promoted(RestaurantCard);

  // by spoonacular api 
  //   useEffect(() => {
  //   setRestaurants(data);
  //   setAllRestaurants(data);
  // }, [data]);




  // by dummy api 
  //   useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const response = await fetch(
  //     "https://raw.githubusercontent.com/namastedev/namaste-react/refs/heads/main/swiggy-api"
  //     );
  //     const json = await response.json();
  //     console.log("Full JSON:", json);

  //     const cardList = json?.data?.cards || [];
  //     let restaurantArray = [];

  //     for (const cardObj of cardList) {
  //       const arr =
  //         cardObj?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //       if (Array.isArray(arr)) {
  //         restaurantArray = arr;
  //         break;
  //       }
  //     }
 
  //  console.log(JSON.stringify(json, null, 2));
  //     console.log("Found restaurant array of length:", restaurantArray.length);

  //     const formatted = restaurantArray.map((res) => ({
  //       id: res.info.id,
  //       name: res.info.name,
  //       image: `https://media-assets.swiggy.com/swiggy/image/upload/${res.info.cloudinaryImageId}`,
  //       rating: res.info.avgRating,
  //       cuisine: res.info.cuisines.join(", "),
  //     }));

  //     setRestaurants(formatted);
  //     setAllRestaurants(formatted);
  //   } catch (err) {
  //     console.error("Error fetching data:", err);
  //   }
  // };



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

      <div>
        useFetchRestaurants();
        return null;
      </div>


      {/* <div className="res-container flex flex-wrap">
        {loading ? (
          <ShimmerUI />
         ) : 
          restaurants.map((r) => (
            <Link key={r.id} to={`/restaurant/${r.id}`} className="card-link">
              {r.promoted ? (
                <PromotedRestaurant
                id={r.id}
                name={r.name}
                image={r.image}
                rating={r.rating}
                cuisine={r.cuisine}
                />
              ) : 
               <RestaurantCard
                id={r.id}
                name={r.name}
                image={r.image}
                rating={r.rating}
                cuisine={r.cuisine}
              />
              }
            </Link>
          ))}
      </div> */}
    </div>
  );
};

export default Body;














// // by spoonacular api - but it has limited requests per day  

// import RestaurantCard , { Promoted } from "./RestaurantCard";
// import SearchBar from "./SearchBar";
// import { useState, useEffect } from "react";
// import ShimmerUI from "./ShimmerUI";
// import { Link } from "react-router-dom";
// import useFetchRecipes from "../utils/useFetch"; 
// import useOnlineStatus from "../utils/useOnlineStatus";
// import OfflineGame from "../utils/OfflineGame"; 

// const Body = () => {

//   const onlineStatus = useOnlineStatus();
//   if (onlineStatus === false) return <OfflineGame />


//        useFetchRecipes();
//         return null;


//   const handleFilter = (filterParam) => {
//     if (filterParam === "topRated") {
//       const filtered = allRestaurants.filter((r) => parseFloat(r.rating) > 4.2);
//       setRestaurants(filtered);
//     } else {
//       const filtered = allRestaurants.filter((r) =>
//         r.name.toLowerCase().includes(filterParam.toLowerCase())
//       );
//       setRestaurants(filtered);
//     }
//   };

//   return (
//     <div className="body">
//       <div className="search">
//         <SearchBar onFilter={handleFilter} />
//       </div>

//     </div>
//   );
// };

// export default Body;

