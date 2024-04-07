import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import config from './config';
import { singleProperty } from './actions/productAction';
import { Helmet } from 'react-helmet';


const APP_URL = config.apiUrl;

const JobDetails = () => {
    const imageUrl = config.imgUrl;
    const [productList, setProductList] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const navigate = useNavigate();
    const propertyDetails = useSelector((state) => state.propertyDetails);
    const { error, property } = propertyDetails;
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(singleProperty(id));
    }, []);

    const shareOnFacebook = () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`, '_blank');
        window.location.reload()
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank');
        window.location.reload()

    };

    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank');
        window.location.reload()

    };

    const shareOnWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
        window.location.reload()

    };

    const shareOnGmail = () => {
        const subject = encodeURIComponent("Check out this link!");
        const body = encodeURIComponent(`I thought you might find this link interesting: ${window.location.href}`);
        window.open(`mailto:?subject=${subject}&body=${body}`);
        window.location.reload()

    };


    return (
        <>
          <Helmet>
                {/* Open Graph Protocol meta tags */}
                <meta property="og:title" content={property.title} />
                <meta property="og:description" content={property.description} />
                <meta property="og:image" content={imageUrl + property.photo1} />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:type" content="website" />

                {/* Twitter Card meta tags */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={property.title} />
                <meta name="twitter:description" content={property.description} />
                <meta name="twitter:image" content={imageUrl + property.photo1} />
                <meta name="twitter:url" content={window.location.href} />
            </Helmet>
            <Nav />
            <div className="container mt-4 d-flex justify-content-center align-items-center">
                <div className="card p-4">
                    {error && <p>Error: {error}</p>}
                    <div className="text-center">
                        <img src={imageUrl + property.photo1} alt="Company Logo" className="mb-4" style={{ width: '150px' }} />
                    </div>


                    <h2 className="mb-4 text-center">{property.title}</h2>
                    {property.video && (
                        <div className="media" style={{ display: 'flex', justifyContent: 'center' }}>
                            <video src={imageUrl + property.video} className="align-self-center mr-3" style={{ width: '400px', maxHeight: '100%' }} controls />
                        </div>
                    )}

                    <p className="mb-2 text-center">
                        <span className='text-bold'>Posted on:</span> {property.posted_date}{' '}
                        <span className='text-bold'>Deadline:</span> {property.deadline}
                    </p>
                    <p className="mb-2 text-center">
                        <span className='text-bold'>Location:</span> {property.location}
                    </p>
                    <div className="mb-4" dangerouslySetInnerHTML={{ __html: property.description }} />

                    {property.document && (
                        <p className="mb-2 text-center">
                            <span className='text-bold'>View attachment:</span> <a href={imageUrl + property.document} target="_blank" rel="noopener noreferrer">{property.document}</a>
                        </p>
                    )}



                    <div className="text-center">
                        <button className="btn btn-primary" onClick={shareOnFacebook}><i className="fab fa-facebook-f"></i></button>
                        <button className="btn btn-primary mx-2" onClick={shareOnTwitter}><i className="fab fa-twitter"></i></button>
                        <button className="btn btn-primary mx-2" onClick={shareOnLinkedIn}><i className="fab fa-linkedin-in"></i></button>
                        <button className="btn btn-primary" onClick={shareOnWhatsApp}><i className="fab fa-whatsapp" aria-hidden="true"></i></button>
                        <button className="btn btn-primary mx-2" onClick={shareOnGmail}><i className="fas fa-envelope"></i></button>
                    </div>

                    <div className="text-center mt-3">
                        <NavLink to="/">
                            <a className="btn btn-primary">Go Back</a>
                        </NavLink>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default JobDetails;
