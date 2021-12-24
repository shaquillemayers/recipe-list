/* Creamy Salmon Pasta List Item Component */

import { Fragment } from "react";

const CreamySalmonPasta = (props) => {
  // array of ingredients
  const ingredients = ['salmon', 'lemon', 'rosemary', 'thyme', 'pasta', 'garlic', 'double cream', 'spinach'];

  // recipe step by step method
  const stepByStep = 
  <Fragment>
    <h2> Creamy Salmon Pasta </h2>
    <p>Ingredients: 
      {ingredients.map(ingredient => {
        if (ingredients[ingredients.length - 1] === ingredient) {
          return ` ${ingredient}.`;
        } else {
          return ` ${ingredient},`;
        }
      })}  
    </p>

    <ol>
      <li> Pre-heat oven to 200C/180C fan/gas 6 and heat large pot of water to boiling on stove </li>
      <li> In a small bowl, stir together 1 tbsp olive oil, lemon juice, lemon zest, rosemary and thyme </li>
      <li> Place salmon, skin side down, on tray and evenly spoon seasoning over salmon. Sprinkle salmon with salt and pepper & add lemon half </li>
      <li> Bake 8 mins. Meanwhile, salt pot of boiling water and cook pasta </li>
      <li> Evenly spoon seasoning over salmon. Sprinkle salmon with salt and pepper </li>
      <li> Meanwhile, heat 2 tbsp of butter in large high-sided skillet over medium heat </li>
      <li> Add 2 cloves of garlic, cook for 1 min, stirrly constantly </li>
      <li> Add cream, and some salt & pepper. </li>
      <li> Heat to boiling over medium-high heat, then reduce to medium & cook 5-6 minutes or until thickened to a thin sauce consistency, stirring frequently. Reduce heat to low </li>
      <li> Switch to grill and cook salmon at 70C until golden brown </li>
      <li> Drain pasta and add to skillet </li>
      <li> Stir in spinach and cook over low heat 1 to 2 mins or until spinach is just wilted </li>
      <li> Remove salmon from oven. Slip spatula between salmon skin and flesh to remove skin; break into large chunks over linguine </li>
      <li> Sprinkle with lemon juice </li>
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
        <img src="https://foxeslovelemons.com/wp-content/uploads/2018/10/Creamy-Salmon-Pasta-with-Spinach-2-720x720.jpg" alt="Creamy Salmon Pasta"/>
        <span>Creamy Salmon Pasta</span>
      </button>
    </li>
  )
};

export default CreamySalmonPasta;