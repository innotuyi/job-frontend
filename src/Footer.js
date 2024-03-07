import React from 'react';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <footer className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-4 col-md-6 offset-md-1">
            <h5 className="text-white mb-4">Company</h5>
            <NavLink to="/about"> <a className="btn btn-link text-white-50" href="">About Us</a></NavLink>
            <NavLink to="/contact">  <a className="btn btn-link text-white-50" href="">Contact Us</a></NavLink>
            <a className="btn btn-link text-white-50" href="">Our Services</a>
            <a className="btn btn-link text-white-50" href="">Privacy Policy</a>
            <a className="btn btn-link text-white-50" href="">Terms & Condition</a>
          </div>
          <div className="col-lg-4 offset-md-2 col-md-6">
            <h5 className="text-white mb-4">Contact</h5>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Kigali, Kicukiro</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+250785231269</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@amamaza.rw</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="https://twitter.com/amamazar78"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://web.facebook.com/profile.php?id=61556137320346"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.youtube.com/channel/UC13rOKwv8W1vfwtZZVos-pA"><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href="https://www.linkedin.com/in/amamaza-amamaza-6278212b1/"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-12 text-center">
            <p className="text-white-50 mb-0">© 2024 Amamaza Group. All rights reserved.</p>
            <p className="text-white-50 mb-0">Website: <a href="https://www.amamaza.rw" className="text-white">www.amamaza.rw</a></p> {/* Add your website URL */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
