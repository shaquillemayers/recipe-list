/* This component renders the Home Page */

import React, { useState } from "react";
import { Fragment } from "react/cjs/react.production.min";
import CreamySalmonPasta from "../components/RecipeListItems/CreamySalmonPasta";
import PrawnCurry from "../components/RecipeListItems/PrawnCurry";
import SalmonAndPotatoes from "../components/RecipeListItems/SalmonAndPotatoes";
import TeriyakiSalmon from "../components/RecipeListItems/TeriyakiSalmon";
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
        <p>All recipes assume access to salt, pepper, cooking/olive oil and butter! :)</p>
        <div className="recipe-wrapper">
          <ul className="recipe-list">
            <TeriyakiSalmon onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} />
            
            <PrawnCurry onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} />
            
            <SalmonAndPotatoes onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} />

            <CreamySalmonPasta onShowRecipe={showRecipeHandler} currentRecipe={recipeHandler} /> 
          </ul>
        </div>
      </section>
    </Fragment>
  )
};

export default Recipe;