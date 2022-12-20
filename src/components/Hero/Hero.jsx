import React from 'react';

//  Styles
import './Hero.css';

// Assets
import hero_img from '../../assets/hero_image.png';
import hero_img_back from '../../assets/hero_image_back.png';
import heart from '../../assets/heart.png';
import calories from '../../assets/calories.png';

// Components
import Header from '../Header/Header';

const Hero = () => {
  return (
    <div className='hero'>
      <div className='left-h'>
        <Header />
        {/* Ad */}
        <div className='the-best-ad'>
          <div></div>
          <span>Le meilleur fitness club de la ville</span>
        </div>

        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Façonnez </span>
            <span>votre corps idéal</span>
          </div>
          <div>
            <span>
              Ici, nous vous aiderons à façonner et à construire votre corps
              idéal et à vivre pleinement votre vie
            </span>
          </div>
        </div>

        {/* Figures */}
        <div className='figures'>
          <div>
            <span>+ 140</span>
            <span>Coachs diplômés</span>
          </div>
          <div>
            <span>+ 1247</span>
            <span>Membres</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Programmes d'entraînements</span>
          </div>
        </div>

        {/* Hero Buttons */}
        <div className='hero-buttons'>
          <button className='btn'>Commencer</button>
          <button className='btn'>En savoir plus</button>
        </div>
      </div>
      <div className='right-h'>
        <button className='btn'>Nous rejoindre</button>

        <div className='heart-rate'>
          <img
            src={heart}
            alt='heart'
          />
          <span>Rythme Cardiaque</span>
          <span>116 bpm</span>
        </div>

        {/* Hero Images */}
        <img
          src={hero_img}
          alt='hero_image'
          className='hero-image'
        />
        <img
          src={hero_img_back}
          alt='hero_image_back'
          className='hero-image-back'
        />

        {/* Calories */}
        <div className='calories'>
          <img
            src={calories}
            alt='calories'
          />
          <div>
            <span>Calories brûlées</span>
            <span>220 kcal</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
