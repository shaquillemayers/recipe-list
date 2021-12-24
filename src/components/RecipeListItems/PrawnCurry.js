/* Prawn Curry List Item Component */

import { Fragment } from "react";

const PrawnCurry = (props) => {
  // array of ingredients
  const ingredients = [
    'prawns', 'onion', 'garlic', 'ginger', 'lemon juice', 'curry powder',
    'paprika', 'canned tomato / passata / puree', 'coconut milk', 'stock cube',
    'brocoli / spinach', 'sugar snap peas'
  ];

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
      <li> Season prawns with Cayenne pepper, salt and pepper to taste, all purpose & lemon juice  </li>
      <li> Fry onion, garlic and ginger in Coconut oil / olive oil </li>
      <li> Add prawns and fry until cooked through (not over cooked), then remove from pan </li>
      <li> Add Curry powder (bit more oil if needed), Paprika and fry for a further 2 mins</li>
      <li> Add Canned tomato / passata then Coconut milk </li>
      <li> Add all purpose seasoning, stock cube and chilli (optional)  </li>
      <li> Add choice of green veg </li>
      <li> Bring to a boil - low - heat until veg is slightly cooked through </li>
      <li> Add prawns back in and cook for a further 10 mins </li>
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

export default PrawnCurry;