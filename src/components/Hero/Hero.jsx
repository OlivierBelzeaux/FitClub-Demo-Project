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

// Libraries
import { motion } from 'framer-motion';
import NumberCounter from 'number-counter';

const Hero = () => {
  const transition = { type: 'spring', duration: 1.5 };
  const mobile = window.innerWidth <= 768 ? true : false;

  return (
    <div
      className='hero'
      id='hero'
    >
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header />
        {/* Ad */}
        <div className='the-best-ad'>
          <motion.div
            initial={{ left: mobile ? '170px' : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          ></motion.div>
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
            <span>
              <NumberCounter
                end={167}
                start={100}
                delay='3'
                postFix='+'
              />
            </span>
            <span>Coachs diplômés</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={1243}
                start={920}
                delay='4'
                postFix='+'
              />
            </span>
            <span>Membres</span>
          </div>
          <div>
            <span>
              <NumberCounter
                end={50}
                start={18}
                delay='2'
                postFix='+'
              />
            </span>
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

        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }}
          transition={transition}
          className='heart-rate'
        >
          <img
            src={heart}
            alt='heart'
          />
          <span>Rythme Cardiaque</span>
          <span>116 bpm</span>
        </motion.div>

        {/* Hero Images */}
        <img
          src={hero_img}
          alt='hero_image'
          className='hero-image'
        />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }}
          transition={transition}
          src={hero_img_back}
          alt='hero_image_back'
          className='hero-image-back'
        />

        {/* Calories */}
        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }}
          transition={transition}
          className='calories'
        >
          <img
            src={calories}
            alt='calories'
          />
          <div>
            <span>Calories brûlées</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
