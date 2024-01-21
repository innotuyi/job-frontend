import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import config from './config'
import ProductComponent from './ProductComponent'
import JobComponent from './JobComponent'


function Job() {
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



    return (
        <>
            <div class="container-xxl py-5">
                <div class="container">
                    <div className='row'>
                        <JobComponent/>
              
                   {/* ===========Product============= */}
                   <ProductComponent/>

                   </div>
                </div>
            </div>
        </>
    )
}

export default Job