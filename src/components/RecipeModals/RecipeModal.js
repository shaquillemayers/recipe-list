import Modal from "../UI/Modal";

const RecipeModal = (props) => {
  return (
    <Modal onHideRecipe={props.onHideRecipe}>
      <div className="recipe-modal">
        {props.currentRecipe}
      </div>
      <div className="actions">
        <button className="close-button" onClick={props.onHideRecipe}>Close</button>
      </div>
    </Modal>
  )
};

export default RecipeModal;