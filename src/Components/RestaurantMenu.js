import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const API_KEY = "e79e25cf11f848caae8bad2978bfce6e";

const RestaurantMenu = () => {

  const { resID } = useParams(); //which recipe 
  const [recipe, setRecipe] = useState(null); //storing data - recipe - to store the recipe details (title , image etc)
  const [loading, setLoading] = useState(true); //to show loading sign when data is fetching

  useEffect(() => { //run on the page load
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

    fetchRecipe(); // fetching happens here
  } , [resID]);

  useEffect(() => {
    // fetching happens here 
    } , [resID])

  return (
    <div className="recipe-container">
      <h2>The food you were craving for 🥗🍛🥙</h2>

      {loading ? (
        <h3>Loading... even turtles are faster than this! 🐢</h3>
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
      {/* this is called conditional rendering  */}
    </div>
  );
};

export default RestaurantMenu;
