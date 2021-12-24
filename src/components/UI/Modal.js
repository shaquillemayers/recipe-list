/* 
  This is a UI component, used to display the Cart modal. 
  This modal is portalled to a different DOM element to the rest of the code.
*/

import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';

// Lightweight component, used to blur the page content slightly.
const Backdrop = (props) => {
  return <section className="backdrop" onClick={props.onHideRecipe}></section>
};

// Overlay where the Cart infomation will be diplayed
const ModalOverlay = (props) => {
  return (
    <section className="modal">
      {props.children}
    </section>
  )
}

// Variable name given to the DOM element that these components will be portalled to.
const portalElement = document.getElementById('overlays');

// Modal component to render both Backdrop & ModalOverlay, as well as portal them outside of the #root div, keeping the modal separate from the rest of the code
const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onHideRecipe={props.onHideRecipe} />, portalElement)}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>, portalElement
      )}
    </Fragment>
  )
};

export default Modal;