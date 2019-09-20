import React from 'react';
import { NavLink } from 'react-router-dom';

import './styles.scss';
import logo from '../../assets/spacex_logo.svg';

const NavBar = () => (
  <header className="header">
    <div className="logo__container">
      <img className="logo" src={logo} alt="SpaceX-logo" />
    </div>
    <ul className="nav-item__container">
      <li className="nav-item">
        <NavLink to="/launches">Launches</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/vehicles">Vehicles</NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </header>
);

export default NavBar;
