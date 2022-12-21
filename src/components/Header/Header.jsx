import React, { useState } from 'react';
import { Link } from 'react-scroll';

// Styles
import './Header.css';

// Assets
import Logo from '../../assets/logo.png';
import Bars from '../../assets/bars.png';

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className='header'>
      <img
        src={Logo}
        alt='Logo'
        className='logo'
      />

      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: 'var(--appColor)',
            padding: '0.5rem',
            borderRadius: '5px',
          }}
        >
          <img
            src={Bars}
            alt='hamburger menu'
            style={{ width: '1.5rem', height: '1.5rem' }}
            onClick={() => setMenuOpened(true)}
          />
        </div>
      ) : (
        <ul className='header-menu'>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass='active'
              to='hero'
              span={true}
              smooth={true}
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='programs'
              span={true}
              smooth={true}
            >
              Programmes
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='reasons'
              span={true}
              smooth={true}
            >
              À Propos
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='plans'
              span={true}
              smooth={true}
            >
              Tarifs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              to='testimonials'
              span={true}
              smooth={true}
            >
              Témoignages
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
