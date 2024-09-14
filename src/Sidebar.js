import React from 'react';
import { NavLink, useNavigate, Outlet } from "react-router-dom";
import axios from 'axios'
import config from './config';

const Sidebar = () => {

  const APP_URL = config.apiUrl;



  const navigate = useNavigate(); // To navigate after logout

  const handleLogout = async () => {
    try {
      // Make a request to the logout API
      await axios.post(`${APP_URL}/api/logout`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      // Remove the token from local storage
      localStorage.removeItem('token');

      // Navigate to the login page or home page
      navigate('/login');

      alert('Logged out successfully');
    } catch (error) {
      console.error('Error logging out:', error);
      alert('Failed to log out');
    }
  };




  return (
    <>
      <div class="col-md-2 sidebar-bg sidebar ">
        <ul>
          <li>
            <NavLink to='/dashboard'>
              <i class="fa fa-envelope me-3"></i> <a to="/dashboard">Dashboard</a>
            </NavLink>
          </li>
          <li>
            <NavLink to='/post'>
              <i class="fa fa-envelope me-3"></i> <a to="/createproperty">Post Job</a>

            </NavLink>
          </li>

          <li>
            <NavLink to='/productList'>
              <i class="fa fa-envelope me-3"></i> <a to="/createproperty">All Jobs</a>

            </NavLink>
          </li>
          <li>
            <NavLink to='/addProduct'>
              <i class="fa fa-envelope me-3"></i> <a to="/createproperty">Create Product</a>

            </NavLink>
          </li>
          <li>
            <NavLink to='/products'>
              <i class="fa fa-envelope me-3"></i> <a to="/mylisting">Products</a>
            </NavLink>
          </li>



          {/* <li>
       <NavLink to='/'>
       <i class="fa fa-envelope me-3"></i> <a to="/messages">Messages</a>
       </NavLink>
        </li> */}


          <li>
            <NavLink to="/dashboard">
              <i class="fa fa-envelope me-3"></i> <a>Settings</a>

            </NavLink>
          </li>

          <li>
            <NavLink onClick={handleLogout}>
              <i class="fa fa-envelope me-3"></i> <a>Logout</a>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Sidebar