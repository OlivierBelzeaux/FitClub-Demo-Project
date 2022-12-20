import React from 'react';

// Styles
import './Header.css';

// Assets
import Logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className='header'>
      <img
        src={Logo}
        alt='Logo'
        className='logo'
      />
      <ul className='header-menu'>
        <li>Accueil</li>
        <li>Programmes</li>
        <li>À Propos</li>
        <li>Tarifs</li>
        <li>Témoignages</li>
      </ul>
    </div>
  );
};

export default Header;
