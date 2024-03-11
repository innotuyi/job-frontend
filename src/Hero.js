import React from 'react';
import { NavLink } from 'react-router-dom';

const HeroPage = () => {
  return (
    <div className="hero-container" style={{ backgroundColor: '#f8f9fa ! important', color: '#333 ! important' }}> {/* Adjust background and text color */}
      <div className="hero-content">
        <h1>Reach Your Audience in Any Part of The World</h1>
        <h4 className='text-light'>Advertise your products and services to a worldwide audience</h4> {/* Corrected spelling */}
        <NavLink to="/PostAdvert">
        <a className="btn btn-primary">Start Advertising</a>

        </NavLink>
      
      </div>
    </div>
  );
}

export default HeroPage;
