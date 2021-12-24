/* Salmon & Potatoes List Item Component */

import { Fragment } from "react";

const SalmonAndPotatoes = (props) => {
  // array of ingredients
  const ingredients = ['salmon', 'lemon', 'rosemary', 'thyme', 'rice', 'choice of veg', 'potatoes'];

  // recipe step by step method
  const stepByStep = 
  <Fragment>
    <h2> Salmon & Potatoes </h2>
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
      <li> Pre-heat oven to 200C/180C fan/gas 6. Boil the potatoes for 10 mins until just tender, drain and steam-dry for a few mins </li>
      <li> Toss the potatoes in 1 tbsp of oil and 2 tbsp butter, then tip onto a baking tray </li>
      <li> Roast for 20 mins. Meanwhile, season salmon </li>
      <li> In a small bowl, stir together 1 tbsp olive oil, lemon juice, lemon zest, rosemary and thyme </li>
      <li> Begin cooking rice </li>
      <li> After the 20 mins, push the potatoes to one side and put the salmon on the other side, and add the lemon halves </li>
      <li> Evenly spoon seasoning over salmon. Sprinkle salmon with salt and pepper </li>
      <li> Return to oven and bake 8 mins </li>
      <li> Beginning cooking choice of veg </li>
      <li> Switch to grill and cook salmon at 70C until golden brown </li>
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
        <img src="https://data.thefeedfeed.com/static/2019/05/22/15585558975ce5acf9719f5.png" alt="Salmon & Potatoes" style={{transform: "rotate(270deg)"}}/>
        <span>Salmon & Potatoes</span>
      </button>
    </li>
  )
};

export default SalmonAndPotatoes;