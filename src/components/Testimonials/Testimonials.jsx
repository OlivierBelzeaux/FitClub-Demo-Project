import React, { useState } from 'react';

// Styles
import './Testimonials.css';

// Assets
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

// Librairies
import { motion } from 'framer-motion';

// Data
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
  const transition = { type: 'spring', duration: 3 };
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;

  return (
    <div
      className='testimonials'
      id='testimonials'
    >
      <div className='left-t'>
        <span>Témoignages</span>
        <span className='stroke-text'> Ce qu'ils disent </span>
        <span>de nous</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <div style={{ color: 'var(--orange)' }}>
          <span>{testimonialsData[selected].name}</span>
          {' - '}
          {testimonialsData[selected].status}
        </div>
      </div>
      <div className='right-t'>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 1 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 1 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt='testimonial image'
        />
        <div className='arrows'>
          <img
            onClick={() => {
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1);
            }}
            src={leftArrow}
            alt='arrow left'
          />
          <img
            onClick={() => {
              selected === testimonialLength - 1
                ? setSelected(0)
                : setSelected((prev) => prev + 1);
            }}
            src={rightArrow}
            alt='arrow right'
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
