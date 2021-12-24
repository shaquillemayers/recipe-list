/* This component renders the header, displaying the logo, product page link and basket icon */

import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../logo.svg';

import '../../App.css';

const Header = (props) => {

  return (
    <header>
      <NavLink to='/'>
        <img src={logo} alt="logo" className="logo"/>
      </NavLink>

      <NavLink to='/recipes' className='products-link'>
        Recipes
      </NavLink>
    </header>
  )
};

export default Header;