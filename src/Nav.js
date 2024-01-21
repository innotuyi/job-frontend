import React from 'react'
import { NavLink } from 'react-router-dom'
import LOGO from './images/reallogo.PNG'

function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <NavLink to="/">
    <a class="navbar-brand d-flex align-items-center text-center py-0 px-4 px-lg-5">
    <img src={LOGO} alt="Amamaza Logo" height="79" />
    </a>
    </NavLink>
    <button type="button" class="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
           <NavLink to="/">
           <a class="nav-item nav-link active">Home</a>
           </NavLink>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</a>
                <div class="dropdown-menu rounded-0 m-0">
                   <NavLink to="/job">
                   <a class="dropdown-item">Job list</a>
                   </NavLink>
                </div>
            </div>
            <div class="nav-item dropdown">
                <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Products</a>
                <div class="dropdown-menu rounded-0 m-0">
                   <NavLink to="/ProductsList">
                   <a class="dropdown-item">Product list</a>
                   </NavLink>
                </div>
            </div>
           <NavLink to="/about">
           <a href="#" class="nav-item nav-link">About</a>
           </NavLink>
            
          
           <NavLink to="/contact">
           <a  class="nav-item nav-link">Contact</a>
           </NavLink>
        </div>
    </div>
</nav>
  )
}

export default Nav