import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Nav from './Nav';
import Footer from './Footer';
import axios from 'axios';
import config from './config';
import { singleProduct } from './actions/productAction';



//const APP_URL = config.apiUrl;

const ProductDetails = () => {
    const imageUrl = config.imgUrl;

   // const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const productDetails = useSelector((state) => state.productDetails);
    const { error, product } = productDetails;
    const { id } = useParams();
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(singleProduct(id));
    }, []);

    return (
        <>
            <Nav />
            <div className="container mt-4">
                <div className="card p-4">
                    {error && <p>Error: {error}</p>}
                    <h2 className="mb-4 text-center">Product Details: {product.name}</h2>
                    <p className="mb-2 text-center">
                        <span className="text-bold">Price:</span> Rwf{product.price}
                    </p>
                    <div className="row mb-4">
                        <div className="col-md-6 mb-3">
                            <img
                                src={imageUrl + product.photo1}
                                alt={`${product.name} - Photo 1`}
                                className="img-fluid border rounded"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img
                                src={imageUrl + product.photo2}
                                alt={`${product.name} - Photo 2`}
                                className="img-fluid border rounded"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img
                                src={imageUrl + product.photo3}
                                alt={`${product.name} - Photo 3`}
                                className="img-fluid border rounded"
                                style={{ width: '100%' }}
                            />
                        </div>
                        <div className="col-md-6 mb-3">
                            <img
                                src={imageUrl + product.photo4}
                                alt={`${product.name} - Photo 4`}
                                className="img-fluid border rounded"
                                style={{ width: '100%' }}
                            />
                        </div>
                    </div>
                    <p className="mb-2 text-center">
                        <span className="text-bold">Description:</span>
                        <div dangerouslySetInnerHTML={{ __html: product.description }} />
                    </p>
                    <div className="text-center">
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

export default ProductDetails;
