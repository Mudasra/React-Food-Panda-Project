import { useEffect, useState } from "react";

const API_KEY = "e79e25cf11f848caae8bad2978bfce6e"; 

const useFetchRecipes = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();

        const formatted = Array.isArray(json.results)
          ? json.results.map((res) => ({
              id: res.id,
              name: res.title,
              image: res.image,
              rating: (Math.random() * 2 + 3).toFixed(1),
              cuisine: "Italian",
            }))
          : [];

        setData(formatted);
      } 
      catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [url]);

  return { data, loading };
};

export default useFetchRecipes;







// import { useEffect } from "react";
// const  useFetchRecipes = () => {
//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//       const response = await fetch (
//         "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
//       );
//       const data = await response.json();
//       console.log(data);

    
//     }
//     catch (err) {}
//     }
//    fetchRestaurants();
//   }, [])
//   return <div>Home</div> 
// }

// export default useFetchRecipes;







// import { useEffect, useState } from "react";

// const useFetchRecipes = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch(
//           "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
//         );

//         const json = await response.json();
//         setData(json); // save response
//       } catch (err) {
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return { data, loading, error };
// };

// export default useFetchRecipes;







// import { useEffect, useState } from "react";

// const useFetchRecipes = () => {
//   const [data, setData] = useState([]); // ✅ array to avoid .map crash
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch(
//           "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
//         );

//         const json = await response.json();

//         // ✅ Extract restaurant list from deeply nested structure
//         const restaurants = json?.data?.cards?.find(
//           (c) => c.card?.card?.gridElements?.infoWithStyle?.restaurants
//         )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

//         console.log("Extracted restaurants:", restaurants); // ✅ visible in console

//         setData(restaurants);
//       } catch (err) {
//         console.error("Fetch error:", err);
//         setError(err.message || "Something went wrong");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchRestaurants();
//   }, []);

//   return { data, loading, error };
// };

// export default useFetchRecipes;







// import { useEffect } from "react";

// const useFetchRecipes = () => {
//   useEffect(() => {
//     const fetchRestaurants = async () => {
//       try {
//         const response = await fetch(
//           "https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=12.9628669&lng=77.57750899999999&carousel=true&third_party_vendor=1"
//         );
//         const json = await response.json();

//         // ✅ Extract restaurants safely from Swiggy structure
//         const restaurants =
//           json?.data?.cards?.find(
//             (card) =>
//               card.card?.card?.gridElements?.infoWithStyle?.restaurants
//           )?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];

//         // ✅ Format restaurant data like your Spoonacular example
//         const formatted = restaurants.map((res) => ({
//           id: res.info.id,
//           name: res.info.name,
//           image:
//             "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
//             res.info.cloudinaryImageId,
//           rating: res.info.avgRating || (Math.random() * 2 + 3).toFixed(1),
//           cuisine: res.info.cuisines?.join(", ") || "Indian",
//           promoted: Math.random() < 0.3, // random promotion tag
//         }));

//         // ✅ Log formatted restaurant data to the console
//         console.log("🍽️ Extracted Swiggy Data:", formatted);
//       } catch (err) {
//         console.error("❌ Error fetching Swiggy data:", err);
//       }
//     };

//     fetchRestaurants();
//   }, []);
// };

// export default useFetchRecipes;
