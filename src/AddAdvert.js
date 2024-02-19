import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import config from './config'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const APP_URL = config.apiUrl

const AddAdvert = () => {

  const navigate = useNavigate();

  const [categories, setCategory] = useState('');

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [location, setLocation] = useState('');
  const [post, setPost] = useState('');
  const [deadline, setDeadline] = useState('');
  const [photo1, setPhoto1] = useState(null);
  const [video, setVideo] = useState(null);



//   useEffect(() => {
//     async function fetchCategories() {
//       const { data } = await axios.get(
//         `${APP_URL}/api/categories`
//       );
//       console.log("before state", data)
//       setCategory(data);
//       console.log("all catgories", categories)
//     }

//     fetchCategories();

//   }, []);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (event, editor) => {
    const data = editor.getData();
    setDescription(data);
  };
  

  const handleProductCategoryChange = (e) => {
    setProductCategory(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handlePostChange = (e) => {
    setPost(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };


  const handlePhoto1Change = (e) => {
    const file = e.target.files[0];
    setPhoto1(file);
  };


  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    setVideo(file);
  };




  const handleSubmit = (e) => {
    e.preventDefault();

   const formData = new FormData();
    formData.append('title', title);
    formData.append('posted_date', post);
    formData.append('deadline', deadline);
    formData.append('location', location);
    formData.append('description', description);
    formData.append('photo1', photo1);
   
    axios
      .post(`${APP_URL}/api/jobs`, formData)
      .then(function (response) {
        navigate('/productList');
      })
      .catch(function (error) {
        console.log("Error response: ", error);
      });

  };

  return (
    <div className="col-md-9 statistics">
      <div className="card m-4 border-0 shadow">
        <div className="card-body">
          <h3 className="mb-4">Post Job</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                id="productName"
                value={title}
                onChange={handleTitleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productName" className="form-label">Description</label>
              <CKEditor
                editor={ClassicEditor}
                data={description}
                onChange={handleDescriptionChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="productCategory" className="form-label">Job Category</label>
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
              <label htmlFor="photo1" className="form-label">Location</label>
              <input
                type="text"
                value={location}
                className="form-control"
                id="photo1"
                onChange={handleLocationChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo2" className="form-label">Posted date</label>
              <input
                type="text"
                value = {post}
                className="form-control"
                id="photo2"
                onChange={handlePostChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo3" className="form-label">Deadline</label>
              <input
                type="text"
                className="form-control"
                id="photo3"
                onChange={handleDeadlineChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="photo1" className="form-label">Logo</label>
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
              <label htmlFor="photo1" className="form-label">Upload video Here</label>
              <input
                type="file"
                className="form-control"
                id="photo1"
                accept="image/*"
                onChange={handleVideoChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAdvert;
