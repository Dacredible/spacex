import React from 'react';
import './styles.scss';
import logo from '../../assets/logo--white.png';

const NavBar = () => (
  <header>
    <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block' }} />
  </header>
);

export default NavBar;
