import React from 'react';

// Styles
import './Reasons.css';

// Assets
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import image3 from '../../assets/image3.png';
import image4 from '../../assets/image4.png';
import nb from '../../assets/nb.png';
import adidas from '../../assets/adidas.png';
import nike from '../../assets/nike.png';
import tick from '../../assets/tick.png';

const Reasons = () => {
  return (
    <div
      className='reasons'
      id='reasons'
    >
      <div className='left-r'>
        <img
          src={image1}
          alt='image 1'
        />
        <img
          src={image2}
          alt='image 2'
        />
        <img
          src={image3}
          alt='image 3'
        />
        <img
          src={image4}
          alt='image 4'
        />
      </div>
      <div className='right-r'>
        <span>Quelques raisons</span>
        <div>
          <span className='stroke-text'>pourquoi </span>
          <span>nous choisir ?</span>
        </div>
        <div className='details-r'>
          <div>
            <img
              src={tick}
              alt='tick'
            ></img>
            <span>Plus de 140 coachs diplômés</span>
          </div>
          <div>
            <img
              src={tick}
              alt='tick'
            />
            <span>entraînez-vous plus intelligemment et plus rapidement</span>
          </div>
          <div>
            <img
              src={tick}
              alt='tick'
            />
            <span>1 programme gratuit pour les nouveaux inscrits</span>
          </div>
          <div>
            <img
              src={tick}
              alt='tick'
            />
            <span>des partenaires fiables</span>
          </div>
        </div>
        <span
          style={{
            color: 'var(--gray)',
            fontWeight: 'normal',
          }}
        >
          Nos partenaires
        </span>
        <div className='partners'>
          <img
            src={nb}
            alt='logo new balance'
          />
          <img
            src={adidas}
            alt='logo adidas'
          />
          <img
            src={nike}
            alt='logo nike'
          />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
