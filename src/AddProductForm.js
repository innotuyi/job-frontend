import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import config from './config'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const APP_URL = config.apiUrl

const AddProductForm = () => {

  const navigate = useNavigate();

  const [categories, setCategory] = useState('');
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);
  const [photo3, setPhoto3] = useState(null);
  const [photo4, setPhoto4] = useState(null);


  // useEffect(() => {
  //   async function fetchCategories() {
  //     const { data } = await axios.get(
  //       `${APP_URL}/api/categories`
  //     );
  //     console.log("before state", data)
  //     setCategory(data);
  //     console.log("all catgories", categories)
  //   }

  //   fetchCategories();

  // }, []);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };
  

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handlePhoto1Change = (e) => {
    const file = e.target.files[0];
    setPhoto1(file);
  };

  const handlePhoto2Change = (e) => {
    const file = e.target.files[0];
    setPhoto2(file);
  };

  const handlePhoto3Change = (e) => {
    const file = e.target.files[0];
    setPhoto3(file);
  };

  const handlePhoto4Change = (e) => {
    const file = e.target.files[0];
    setPhoto4(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', productName);
    formData.append('categoryID', productCategory);
    formData.append('price', price);
    formData.append('description', description);
    formData.append('photo1', photo1);
    formData.append('photo2', photo2);
    formData.append('photo3', photo3);
    formData.append('photo4', photo4);

    axios
      .post(`${APP_URL}/api/products`, formData)
      .then(function (response) {
        navigate('/products');
      })
      .catch(function (error) {
        console.log("Error response: ", error.response.data.errors);
      });

  };

  return (
    <div className="col-md-9 statistics">
      <div className="card m-4 border-0 shadow">
        <div className="card-body">
          <h3 className="mb-4">Add Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Name</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={productName}
                onChange={handleProductNameChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Price</label>
              <input
                type="number"
                className="form-control"
                id="price"
                value={price}
                onChange={handlePriceChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Product Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">Product Category</label>
              <select
                className="form-select"
                id="productCategory"
                value={productCategory}
                onChange={handleProductCategoryChange}
              >
                <option value="" disabled>Select Category</option>
                {Array.isArray(categories) &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}




              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="photo1" className="form-label">Photo 1</label>
              <input
                type="file"
                className="form-control"
                id="photo1"
                accept="image/*"
                onChange={handlePhoto1Change}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo2" className="form-label">Photo 2</label>
              <input
                type="file"
                className="form-control"
                id="photo2"
                accept="image/*"
                onChange={handlePhoto2Change}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo3" className="form-label">Photo 3</label>
              <input
                type="file"
                className="form-control"
                id="photo3"
                accept="image/*"
                onChange={handlePhoto3Change}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo3" className="form-label">Photo 4</label>
              <input
                type="file"
                className="form-control"
                id="photo4"
                accept="image/*"
                onChange={handlePhoto4Change}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductForm;
