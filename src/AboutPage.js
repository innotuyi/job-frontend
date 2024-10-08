import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

const AboutPage = () => {
  const contactInfo = {
    location: "Located in Kicukiro district, Niboye sector, Nyakabanda cell, Nyarurembo village, Comright house opposite Prince House, Rwandex-Remera road",
    email: "info@amamaza.rw",
    tel: "+250785231269"
  };

  return (
    <>
      <Nav />

      <div className="container mt-4">
        <h1>About Amamaza Group</h1> {/* Updated heading for better SEO */}
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Contact Information</h5> {/* Updated card title for better clarity */}
            <p className="card-text">{contactInfo.location}</p>
            <p className="card-text">Email: {contactInfo.email}</p> {/* Updated card text for better clarity */}
            <p className="card-text">Tel: {contactInfo.tel}</p> {/* Updated card text for better clarity */}
          </div>
        </div>

        <div className="mt-4">
          <h2>Amamaza Group Overview</h2> {/* Updated heading for better SEO */}
          <p>Amamaza Group is a vibrant and youth-led digital advertising company committed to empowering businesses in Rwanda and beyond to thrive in the digital era. Through innovative strategies and a deep understanding of digital platforms, we provide cost-effective advertising solutions tailored to meet the diverse needs of our clients. Our youth-led approach brings fresh perspectives and creative energy to every project, ensuring dynamic and impactful results.</p>

          <h3>Mission Statement</h3>
          <p>At Amamaza Group, our mission is to revolutionize the digital advertising landscape by offering affordable and cutting-edge solutions that empower businesses to connect with their audience in meaningful ways, driving growth and fostering lasting relationships.</p>

          <h3>Services</h3>
          <ol>
            <li><strong>Website Advertising:</strong> Through Amamaza Group Website (www.amamaza.rw) we offer:
              <ul>
                <li>Job Advertisements</li>
                <li>Tender Advertisements</li>
              </ul>
            </li>
            <li><strong>Social Media Advertising:</strong>
              <ul>
                <li>Twitter Advertising</li>
                <li>Facebook Advertising</li>
                <li>Instagram Advertising</li>
              </ul>
            </li>
            <li><strong>Digital Marketing Consultation:</strong>
              <ul>
                <li>Strategic Planning</li>
                <li>Campaign Optimization</li>
              </ul>
            </li>
            <li><strong>Creative Services:</strong>
              <ul>
                <li>Ad Design</li>
                <li>Content Creation</li>
              </ul>
            </li>
          </ol>

          <h3>Key Differentiators</h3>
          <ul>
            <li>Youth-Led Innovation</li>
            <li>Affordable Pricing</li>
            <li>Targeted Advertising</li>
            <li>Local Expertise</li>
            <li>Transparent Communication</li>
          </ul>

          <p>Contact Us: Ready to elevate your digital advertising efforts and reach your target audience effectively? Contact Amamaza Group today for a consultation and discover how we can help you achieve your marketing goals at minimum prices.</p>
          <p>Website: <a href="https://www.amamaza.rw">www.amamaza.rw</a></p>
          <p>Twitter: <a href="https://twitter.com/amamazar78">@amamazar78</a></p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AboutPage;
