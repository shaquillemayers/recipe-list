/* Prawn Curry List Item Component */

import { Fragment } from "react";

const PrawnCurryListItem = (props) => {
  // array of ingredients
  const ingredients = ['prawns', 'potatoes'];

  // recipe step by step method
  const stepByStep = 
  <Fragment>
    <h2> Prawn Curry </h2>
    <p>Ingredients: 
      {ingredients.map(ingredient => {
        if (ingredients.at(-1) === ingredient) {
          return ` ${ingredient}.`;
        } else {
          return ` ${ingredient},`;
        }
      })}  
    </p>

    <ol>
      <li> Season salmon with salt / pepper / All purpose </li>
      <li> Coat in corn flour </li>
      <li> Fry in olive oil (skin on the pan - 4 mins) </li>
      <li> Add garlic and ginger to oil </li>
      <li> Add soy sauce </li>
      <li> Add sriracha </li>
      <li> Add honey to taste </li>
      <li> Spoon sauce over salmon and flip </li>
      <li> Fry other side for another 4 mins </li>
    </ol>
  </Fragment>
  ;

  // Handles recipe button click. Displays modal and passes stepByStep recipe up via props 
  const recipeButtonHandler = () => {
    props.currentRecipe(stepByStep);
    props.onShowRecipe();
  };

  return (
    <li className="recipe-item">
      <button onClick={recipeButtonHandler}>
        <img src="https://static.toiimg.com/thumb/84012482.cms?imgsize=471377&width=800&height=800" alt="Prawn Curry"/>
        <span>Prawn Curry</span>
      </button>
    </li>
  )
};

export default PrawnCurryListItem;