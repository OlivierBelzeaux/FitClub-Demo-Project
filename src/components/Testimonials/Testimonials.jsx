import React, { useState } from 'react';

// Styles
import './Testimonials.css';

// Assets
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

// Data
import { testimonialsData } from '../../data/testimonialsData';

const Testimonials = () => {
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
        <span>{testimonialsData[selected].review}</span>
        <div style={{ color: 'var(--orange)' }}>
          <span>{testimonialsData[selected].name}</span>
          {' - '}
          {testimonialsData[selected].status}
        </div>
      </div>
      <div className='right-t'>
        <div></div>
        <div></div>
        <img
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
