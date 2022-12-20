import React from 'react';

// Styles
import './Programs.css';

// Assets
import rightArrow from '../../assets/rightArrow.png';

// Data
import { programsData } from '../../data/programsData';

const Programs = () => {
  return (
    <div
      className='programs'
      id='programs'
    >
      {/* header */}
      <div className='section-header'>
        <span className='stroke-text'>Explorez nos</span>
        <span>programmes</span>
        <span className='stroke-text'>pour vous façonner</span>
      </div>

      <div className='program-categories'>
        {programsData.map((program, i) => (
          <div
            className='category'
            key={i}
          >
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className='join-now'>
              <span>Nous Rejoindre</span>
              <img
                src={rightArrow}
                alt='Right Arrow'
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
