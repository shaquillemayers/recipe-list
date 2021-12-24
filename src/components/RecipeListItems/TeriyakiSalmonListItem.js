/* Teriyaki Salmon List Item Component */

import { Fragment, useState } from "react";

const TeriyakiSalmonListItem = (props) => {
  // ingredients state
  // const [ingredients, setIngredients] = useState('');


  // array of ingredients
  // setIngredients(['salmon', 'soy sauce', 'all purpose', 'garlic', 'sriracha', 'honey']);

  const ingredients = ['salmon', 'soy sauce', 'all purpose', 'garlic', 'sriracha', 'honey'];

  // recipe step by step method
  const stepByStep = 
  <Fragment>
    <h2> Teriyaki Salmon </h2>
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
        <img src="https://spicysouthernkitchen.com/wp-content/uploads/teriyaki-salmon-5.jpg" alt="Teriyaki Salmon" />
        <span>Teriyaki Salmon</span>
      </button>
    </li>
  )
};

export default TeriyakiSalmonListItem;