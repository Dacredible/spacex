import React from 'react';
import './styles.scss';
import logo from '../../assets/logo--black.png';

const NavBar = () => (
  <header className="header">
    <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block' }} />
    <ul className="nav-item__container">
      <li>Launches</li>
      <li>Vehicles</li>
      <li>About</li>
    </ul>
  </header>
);

export default NavBar;
