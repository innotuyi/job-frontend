import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import config from './config';
import Sidebar from './Sidebar';

const ProductList = () => {
  const APP_URL = config.apiUrl;
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(`${APP_URL}/api/jobs`);
      setProductList(data);
      setFilteredProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const showEditForm = (id) => {
    navigate(`/updateJob/${id}`);
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = productList.filter(
      (product) =>
        product.title.toLowerCase().includes(term) ||
        product.category_name.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  const incrementViews = async (id) => {
    try {
      await axios.post(`${APP_URL}/api/jobs/${id}/increment-views`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        }
      });
      // Optionally, you can fetch the updated product list to reflect changes
      fetchProducts(); 
    } catch (error) {
      console.error('Error incrementing views:', error);
    }
  };

  return (
    <>
      <div className="container-fluid pt-2">
        <div className="row">
          <Sidebar />
          <div className="col-md-9">
            <div className="card m-4 border-0 shadow statistics">
              <div className="card-body">
                <h3 className="mb-4">Job List</h3>
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Description</th>
                      <th scope="col">Views</th>
                      <th scope="col">Category</th>
                      <th scope="col">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredProducts.map((product, index) => (
                      <tr key={index}>
                        <th scope="row">{product.id}</th>
                        <td>{product.title}</td>
                        <td>{product.description}</td>
                        <td>{product.views_count}</td>
                        <td>{product.category_name}</td>
                        <td>
                          <button
                            className="btn btn-primary me-2"
                            onClick={() => incrementViews(product.id)}
                          >
                            Increment Views
                          </button>
                          {/* <button
                            className="btn btn-secondary"
                            onClick={() => showEditForm(product.id)}
                          >
                            Edit
                          </button> */}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductList;
