import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const ContactPage = () => {
  const contactInfo = {
    location: "Located in Kicukiro district, Niboye sector, Nyakabanda cell, Nyarurembo village, Comright house opposite Prince House, Rwandex-Remera road",
    email: "amamazagroup@gmail.com",
    tel: "+250788713693"
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h1>Contact Us</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Location</h5>
            <p className="card-text">{contactInfo.location}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Email</h5>
            <p className="card-text">{contactInfo.email}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">TEL</h5>
            <p className="card-text">{contactInfo.tel}</p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;