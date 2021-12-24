/* This component renders the header, displaying the logo, product page link and basket icon */

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.png';

import '../../App.css';

const Header = (props) => {

  return (
    <header>
      <NavLink to='/' className="logo">
        <img src={logo} alt="logo" className="logo"/>
      </NavLink>

      <NavLink to='/recipes' className='recipes-link'>
        Recipes
      </NavLink>
    </header>
  )
};

export default Header;