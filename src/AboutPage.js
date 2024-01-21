import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const AboutPage = () => {
  const companyInfo = {
    profile: "With Amamaza created in March 2018, Amamaza is a privately held company providing services in the area of online advertisement and e-commerce.",
    mission: "Amamaza's key mission is 'easing the communication between employers and job seekers, buyers and sellers in Rwanda and beyond using online technologies'.",
    jobAdvertising: "Amamaza's website provides an easy and optimal way of advertising your job vacancies to have a high quality of applications and increase the chances to find the right candidates.",
    ecommerce: "Our website facilitates buying and selling goods and services online. We drive online sales."
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h1>About Us</h1>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Our Profile</h5>
            <p className="card-text">{companyInfo.profile}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Mission</h5>
            <p className="card-text">{companyInfo.mission}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Job Advertising</h5>
            <p className="card-text">{companyInfo.jobAdvertising}</p>
          </div>
        </div>

        <div className="card mt-3">
          <div className="card-body">
            <h5 className="card-title">Ecommerce</h5>
            <p className="card-text">{companyInfo.ecommerce}</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mt-4">
          <h2>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Your Name</label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Your Email</label>
              <input type="email" className="form-control" id="email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea className="form-control" id="message" rows="4"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
