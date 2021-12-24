/* This component renders the Home Page */

import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import PrawnCurryListItem from "../components/RecipeListItems/PrawnCurryListItem";
import SalmonAndPotatoesListItem from "../components/RecipeListItems/SalmonAndPotatoesListItem";
import TeriyakiSalmonListItem from "../components/RecipeListItems/TeriyakiSalmonListItem";
import RecipeModal from "../components/RecipeModals/RecipeModal";

const Recipe = () => {
  // recipeModalIsShown state, used to conditionally render Recipe modal
	const [recipeModalIsShown, setRecipeModalIsShown] = useState(false);

  // state of recipe
  const [currentRecipe, setCurrentRecipe] = useState('');

  // For conditional rendering of Recipe modal
  const showRecipeHandler = () => {
    setRecipeModalIsShown(true);
  };

  // For conditional rendering of Recipe modal
  const hideRecipeHandler = () => {
    setRecipeModalIsShown(false);
  }

  // Handles recipes passed from List Items
  const recipeHandler = (stepByStep) => {
    setCurrentRecipe(stepByStep);
  };


  return(
    <Fragment>
      {recipeModalIsShown && <RecipeModal currentRecipe={currentRecipe} onHideRecipe={hideRecipeHandler}/>}
    
      <section className="wrapper">
        <h1>Recipes!</h1>
        <p>Add all ingredients, step by steps, est time to cook, and my own local pics!</p>
        <div className="recipe-wrapper">
          <ul className="recipe-list">
            <TeriyakiSalmonListItem onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} />
            
            <PrawnCurryListItem onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} />
            
            <SalmonAndPotatoesListItem onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} />
            
            <li className="recipe-item">
              <button>
                <img src=""/>
                <span>Salmon pasta</span>
              </button>
            </li>
            
          </ul>
        </div>
      </section>
    </Fragment>
  )
};

export default Recipe;