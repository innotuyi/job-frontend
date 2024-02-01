import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import config from './config';
import { singleProperty } from './actions/productAction';

const APP_URL = config.apiUrl;

const JobDetails = () => {
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
    };

    const shareOnTwitter = () => {
        window.open(`https://twitter.com/intent/tweet?url=${window.location.href}`, '_blank');
    };

    const shareOnLinkedIn = () => {
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`, '_blank');
    };

    const shareOnWhatsApp = () => {
        window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(window.location.href)}`, '_blank');
    };

    return (
        <>
            <Nav />
            <div className="container mt-4 d-flex justify-content-center align-items-center">
                <div className="card p-4">
                    {error && <p>Error: {error}</p>}
                    <h2 className="mb-4 text-center">Call for Applications: {property.title}</h2>
                    <p className="mb-2 text-center">
                        <span className='text-bold'>Posted on:</span> {property.posted_date}{' '}
                        <span className='text-bold'>Deadline:</span> {property.deadline}
                    </p>
                    <p className="mb-2 text-center">
                        <span className='text-bold'>Location:</span> {property.location}
                    </p>
                    <div className="mb-4" dangerouslySetInnerHTML={{ __html: property.description }} />

                    <div className="text-center">
                        <button className="btn btn-primary" onClick={shareOnFacebook}>Share on Facebook</button>
                        <button className="btn btn-primary mx-2" onClick={shareOnTwitter}>Share on Twitter</button>
                        <button className="btn btn-primary mx-2" onClick={shareOnLinkedIn}>Share on LinkedIn</button>
                        <button className="btn btn-primary" onClick={shareOnWhatsApp}>Share on WhatsApp</button>
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
