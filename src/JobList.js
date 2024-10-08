import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import axios from 'axios'
import config from './config'
import ProductComponent from './ProductComponent'
import Nav from './Nav'
import Footer from './Footer'

const JobList = () => {
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
              `${APP_URL}/api/visibleJobs`
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
     <Nav/>

     <div class="container-xxl py-5">
                <div class="container">
                <div className='col-md-12'>
                   <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
                        <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
                            <li class="nav-item">
                                <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                                    <h6 class="mt-n1 mb-0">Featured</h6>
                                </a>
                            </li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">

                                {productList.map((product, index) => (

                                    <div class="job-item p-4 mb-4">
                                        <div class="row g-4">
                                            <div class="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img class="flex-shrink-0 img-fluid border rounded" src={imageUrl + product.photo1} alt="" style={{
                                                    width: "80px",
                                                    height: "80px",


                                                }} />
                                                <div class="text-start ps-4">
                                                    <h5 class="mb-3">{product.title}

                                                    </h5>
                                                    <span class="text-truncate me-3"><i class="fa fa-map-marker-alt text-primary me-2"></i>{product.location}</span>
                                                    <span class="text-truncate me-3"><i class="far fa-clock text-primary me-2"></i>Full Time</span>
                                                </div>
                                            </div>
                                            <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div class="d-flex mb-3">
                                                    <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                                                   
                                                    <button class="btn btn-primary" onClick={(e) => details(product.slug)}>View Details</button>
                                                  
                                                </div>
                                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Posted On:{product.posted_date} </small>

                                                <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Deadline: {product.deadline}</small>
                                            </div>
                                        </div>
                                    </div>
                                ))}



                            </div>

                        </div>
                    </div>
                   </div>
                </div>
            </div>

     <Footer/>


    </>
  )
}

export default JobList