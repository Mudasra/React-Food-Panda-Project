import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import ShimmerUI from "./ShimmerUI";

const API_KEY = "e79e25cf11f848caae8bad2978bfce6e";

const RestaurantMenu = () => {
  const { resID } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(
          `https://api.spoonacular.com/recipes/${resID}/information?apiKey=${API_KEY}`
        );
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error("Error fetching recipe:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [resID]);

  return (
    <div className="recipe-container">
      <h2>The food you were craving for 😋</h2>

      {loading ? (
        // <ShimmerUI />
        <p>Loading....</p>
      ) : recipe ? (
        <div className="recipe-list">
          <div className="recipe-card">
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: recipe.summary }}></p>
            <p><strong>Ready in:</strong> {recipe.readyInMinutes} minutes</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <a href={recipe.sourceUrl} target="_blank" rel="noreferrer">
              View Full Recipe
            </a>
          </div>
        </div>
      ) : (
        <p>No recipe found.</p>
      )}
    </div>
  );
};

export default RestaurantMenu;
