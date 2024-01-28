import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import config from './config'
import Sidebar from './Sidebar'
import axios from 'axios'

const ProductsList = () => {
  const APP_URL = config.apiUrl
  const imageUrl = config.imgUrl;
  const navigate = useNavigate();

  const [productList, setProductList] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get(
        `${APP_URL}/api/products`
      );
      console.log("before state", data)
      setProductList(data);
      console.log("all store properties", productList)
    }

    fetchProducts();

  }, []);


  const showEditForm  = (id) => {
    navigate(`/updateJob/${id}`);
  };



  // Handle search term changes
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    // Filter the product list based on the search term
    const filtered = productList.filter(
      (product) =>
        product.productName.toLowerCase().includes(term) ||
        product.productCategory.toLowerCase().includes(term)
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <div class="container-fluid pt-2">
        <div class="row">
          <Sidebar />
          <div className="col-md-9">
            <div className="card m-4 border-0 shadow statistics">
              <div className="card-body">
                <h3 className="mb-4">Product List</h3>
                {/* <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by name or category"
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div> */}
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Product Name</th>
                      <th scope="col">Description</th>
                      <th scope="col">Category</th>
                      <th scope="col">Photo 1</th>
                      <th scope="col">Photo 2</th>
                      <th scope="col">Photo 3</th>
                      <th scope="col">Photo 4</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product, index) => (
                      <tr key={index}>
                        <th scope="row">{product.id}</th>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.category_name}</td>
                        <td>
                          <img src={imageUrl + product.photo1} alt="Photo 1" className="img-thumbnail" width="40px" height="40px" />
                        </td>
                        <td>
                          <img src={imageUrl + product.photo2} alt="Photo 2" className="img-thumbnail" width="40px" height="40px" />
                        </td>
                        <td>
                          <img src={imageUrl + product.photo3} alt="Photo 3" className="img-thumbnail" width="40px" height="40px" />
                        </td>

                        <td>
                        <img src={imageUrl + product.photo4} alt="Photo 3" className="img-thumbnail" width="40px" height="40px" />
                        </td>
                        <td>
                            <button className="btn btn-primary"
                            
                            onClick={(e) => showEditForm(product.id)}

                            
                            >Edit</button>

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

export default ProductsList;
