import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch(
          "https://api.spoonacular.com/recipes/complexSearch?query=pasta&number=6&apiKey=e79e25cf11f848caae8bad2978bfce6e"
        );
        const data = await res.json();
        setRecipes(data.results);
      } catch (err) {
        console.error("Error fetching recipes:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="recipe-container">
      <h2>The food you were craving for</h2>

      {loading ? (
        <ShimmerUI />
      ) : (
        <div className="recipe-list">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RecipeList;
