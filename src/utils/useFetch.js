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

        const formatted = json.results.map((res) => ({
          id: res.id,
          name: res.title,
          image: res.image,
          rating: (Math.random() * 2 + 3).toFixed(1),
          cuisine: "Italian", // You can later make this dynamic if needed
        }));

        setData(formatted);
      } catch (err) {
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
