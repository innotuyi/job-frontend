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

     <div class="container-fluid bg-primary mb-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style={{

        "padding": "35px"
      }}>
        <div class="container">
          <div class="row g-2">
            <div class="col-md-10">
              <div class="row g-2">
                <div class="col-md-4">
                  <input type="text" class="form-control border-0" placeholder="Keyword" />
                </div>
                <div class="col-md-4">
                  <select class="form-select border-0">
                    <option selected>Category</option>
                    <option value="1">Marketing</option>
                    <option value="2">Project Management</option>
                    <option value="3">Business</option>
                  </select>
                </div>
                <div class="col-md-4">
                  <select class="form-select border-0">
                    <option selected>Location</option>
                    <option value="1">Location 1</option>
                    <option value="2">Location 2</option>
                    <option value="3">Location 3</option>
                  </select>
                </div>
              </div>
            </div>
            <div class="col-md-2">
              <button class="btn btn-dark border-0 w-100">Search</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroPage;
