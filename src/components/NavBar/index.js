import React from 'react';
import './styles.scss';

import logo from '../../assets/logo.png';
const NavBar = () => {
  return (
    <img
      src={logo}
      alt="SpaceX"
      style={{ width: 300, display: 'block', margin: 'auto' }}
    />
  );
};

export default NavBar;
