import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import config from './config'


function ProductComponent() {
    const APP_URL = config.apiUrl
    const imageUrl = config.imgUrl;
    const navigate = useNavigate();

    const [productList, setProductList] = useState([]);
    const [products, setProduct] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);



    useEffect(() => {
        async function fetchJobs() {
            const { data } = await axios.get(
                `${APP_URL}/api/jobs`
            );
            console.log("before state", data)
            setProductList(data);
            console.log("all store properties", productList)
        }

        fetchJobs();

    }, []);

    useEffect(() => {
        async function fetchProducts() {
            const { data } = await axios.get(
                `${APP_URL}/api/products`
            );
            console.log("before state", data)
            setProduct(data);
            console.log("all store properties", products)
        }

        fetchProducts();

    }, []);

    const details = (id) => {
        navigate(`/jobDetails/${id}`);
    };


    const viewProduct = (id) => {
        navigate(`/productDetails/${id}`);
    };

    return (
        <>
             {/* ===========Product============= */}
             <div className='col-md-6'>
                            {/* <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Products</h1> */}
                            <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                                <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                                    <li class="nav-item">
                                        <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                            <h6 class="mt-n1 mb-0">Products</h6>
                                        </a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div id="tab-1" class="tab-pane fade show p-0 active">
                                        {products.map((product, index) => (
                                            <div class="card product-item mb-4" key={index}>
                                                <div class="row g-4">
                                                    <div class="col-sm-12 col-md-4">
                                                        <img
                                                            class="img-fluid border rounded card-img-top"
                                                            src={imageUrl + product.photo1}
                                                            alt={product.title}
                                                            style={{
                                                                width: "100%",
                                                                height: "auto",
                                                            }}
                                                        />
                                                    </div>
                                                    <div class="col-sm-12 col-md-8">
                                                        <div class="card-body">
                                                            <h5 class="card-title">{product.title}</h5>
                                                            <p class="card-text text-truncate"><strong>Price:</strong> Rwf {product.price}</p>
                                                            <div class="d-flex mt-3">
                                                                <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                                                <button class="btn btn-primary" onClick={(e) => viewProduct(product.id)}>View Details</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

        </>
    )
}

export default ProductComponent