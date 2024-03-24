import React from 'react';
import { NavLink } from 'react-router-dom';
import Gud from './images/gud.jpg'

const HeroPage = () => {
  return (
    <div className="page-container" style={{
      backgroundImage: `url(${Gud})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      flexDirection: 'column', // Stack elements vertically
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      textAlign: 'center',
      height: '500px' // Adjust the value as needed
    }}>
      <h1>Reach Your Audience in Any Part of The World</h1>
      <h4 className='text-light'>Advertise your products and services to a worldwide audience</h4>
      <NavLink to="/PostAdvert">
        <a className="btn btn-primary">Start Advertising</a>
      </NavLink>
    </div>
  );
}

export default HeroPage;
