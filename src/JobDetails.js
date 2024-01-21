import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
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
        async function fetchProducts() {
            try {
                const { data } = await axios.get(`${APP_URL}/api/jobs/${id}`);
                console.log("before state", data);
                setProductList(data);
                console.log("all store properties", productList);
            } catch (error) {
                console.error("Error fetching job details:", error);
            }
        }

        fetchProducts();
    }, [id]);

    useEffect(() => {
        dispatch(singleProperty(id));
    }, [dispatch, id]);

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
                       <NavLink to="/"><a className="btn btn-primary" >Go Back</a></NavLink>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default JobDetails;
