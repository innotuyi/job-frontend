import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>

<div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div class="container py-5">
                <div class="row g-5">
                    <div class="col-lg-4 col-md-6 offset-md-1">
                        <h5 class="text-white mb-4">Company</h5>
                        <NavLink to="/about"> <a class="btn btn-link text-white-50" href="">About Us</a></NavLink>
                        <NavLink to="/contact">  <a class="btn btn-link text-white-50" href="">Contact Us</a></NavLink>
                        <a class="btn btn-link text-white-50" href="">Our Services</a>
                        <a class="btn btn-link text-white-50" href="">Privacy Policy</a>
                        <a class="btn btn-link text-white-50" href="">Terms & Condition</a>
                    </div>
                   
                    <div class="col-lg-4 offset-md-2 col-md-6">
                        <h5 class="text-white mb-4">Contact</h5>
                        <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>Kigali,kicukiro</p>
                        <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+250788713693</p>
                        <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@amamaza.rw</p>
                        <div class="d-flex pt-2">
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                            <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    
                </div>
            </div>
           
        </div>
    
    </>
  )
}

export default Footer