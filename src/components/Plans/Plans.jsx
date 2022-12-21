import React from 'react';

// Styles
import './Plans.css';

// Data
import { plansData } from '../../data/plansData';

// Assets
import whiteTick from '../../assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container'>
      <div className='blur plans-blur-1'></div>
      <div className='blur plans-blur-2'></div>
      <div
        className='section-header'
        style={{ gap: '2rem' }}
      >
        <span className='stroke-text'>prêt à commencer</span>
        <span>votre voyage</span>
        <span className='stroke-text'>maintenant avec nous</span>
      </div>

      {/* Plans Card */}
      <div className='plans'>
        {plansData.map((plan, i) => (
          <div
            className='plan'
            key={i}
          >
            {plan.icon}
            <span>{plan.name}</span>
            <span>{plan.price} €</span>

            <div className='features'>
              {plan.features.map((feature, i) => (
                <div
                  className='feature'
                  key={i}
                >
                  <img
                    src={whiteTick}
                    alt='white tick'
                  />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>Découvrir -&gt;</span>
            </div>
            <button className='btn'>Rejoindre</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
