import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantDetails = () => {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/swiggy");
        const json = await res.json();

        const cardData = json?.data?.cards.find(
          (card) => card?.card?.card?.id === "restaurant_grid_listing_v2"
        );

        const restaurants = cardData?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const match = restaurants.find((r) => r.info.id === id);

        if (match) setRestaurant(match.info);
      } catch (err) {
        console.error("❌ Failed to load restaurant detail:", err);
      }
    };

    fetchDetails();
  }, [id]);

  if (!restaurant) return <h2 className="p-4">Loading restaurant details...</h2>;

  return (
    <div className="mt-[9%] p-6 max-w-xl mx-auto bg-white rounded shadow">
      <img
        className="w-full h-64 object-cover rounded"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_700,h_400,c_fill/${restaurant.cloudinaryImageId}`}
        alt={restaurant.name}
      />
      <h2 className="text-2xl font-bold mt-4">{restaurant.name}</h2>
      <p className="text-gray-600">{restaurant.cuisines.join(", ")}</p>
      <p className="text-gray-700 mt-2">{restaurant.locality}, {restaurant.areaName}</p>
      <p className="text-lg mt-2 font-medium">⭐ {restaurant.avgRating}</p>
      <p className="mt-1 text-sm">{restaurant.costForTwo}</p>
    </div>
  );
};

export default RestaurantDetails;
