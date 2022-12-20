import React, { useRef } from 'react';

// Assets
import './Join.css';

// Librairies
import emailjs from '@emailjs/browser';

const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_nek8x9l',
        'template_ij5h4jc',
        form.current,
        'ImKrM2VOxmguNeuH5'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      className='join'
      id='join-us'
    >
      <div className='left-j'>
        <hr />
        <div>
          <span className='stroke-text'>Prêt à </span>
          <span>façonner</span>
        </div>
        <div>
          <span>votre corps </span>
          <span className='stroke-text'>avec nous ?</span>
        </div>
      </div>
      <div className='right-j'>
        <form
          ref={form}
          onSubmit={sendEmail}
          className='email-container'
        >
          <input
            type='email'
            name='user_email'
            placeholder='Entrez votre email'
          />
          <button className='btn btn-j'>Nous rejoindre</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
