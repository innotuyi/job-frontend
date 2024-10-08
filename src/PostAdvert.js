import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import config from './config'

import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Nav from './Nav'
import Footer from './Footer'
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css";
import { ColorRing } from "react-loader-spinner";




const APP_URL = config.apiUrl

const PostAdvert = () => {

    const navigate = useNavigate();

    const [categories, setCategory] = useState('');
    const [loading, setLoading] = useState("");
    const [name, setName] = useState('');
    const [contact, setContact] = useState('');
    const [email, setEmail] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [location, setLocation] = useState('');
    const [post, setPost] = useState('');
    const [deadline, setDeadline] = useState('');
    const [photo1, setPhoto1] = useState(null);
    const [video, setVideo] = useState(null);
    const [document, setDocument] = useState(null);




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


    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleContactChange = (e) => {
        setContact(e.target.value)
    }

    const handleEmailChange = (e) => {

        setEmail(e.target.value)
    }

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

    const handleDocumentChange = (e) => {
        const file = e.target.files[0];
        setDocument(file);
    };




    const handleSubmit = async (e) => {
        e.preventDefault();

        const employeePayload = {
            name,
            contact,
            email
        };

        const formData = new FormData();
        formData.append('title', title);
        formData.append('posted_date', post);
        formData.append('deadline', deadline);
        formData.append('location', location);
        formData.append('description', description);
        formData.append('photo1', photo1);
        formData.append('video', video);
        formData.append('document', document);


        try {

            setLoading(true);

            // Send the first request to create an employee
            const employeeResponse = await axios.post(`${APP_URL}/api/employee/create`, employeePayload);

            // If the employee creation is successful, send the second request to create a job
            const jobResponse = await axios.post(`${APP_URL}/api/jobs`, formData);
            navigate('/');

            setLoading(false);


            toast.success("Advertisment Posted successfully");

        } catch (error) {
            toast.success("Advertisment  Failed");
            console.log("Error response: ", error);
        }
    };

    return (
        <>
            <Nav />
            <div className="col-md-9 statistics">
                <div className="card m-4 border-0 shadow">
                    <div className="card-body">
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        />
                        <h3 className="mb-4">Post job here</h3>
                        <form onSubmit={handleSubmit}>


                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="productName" className="form-label">Employee</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="productName"
                                            value={name}
                                            onChange={handleNameChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-3">
                                        <label htmlFor="contactNumber" className="form-label">Contact No</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            id="contactNumber"
                                            value={contact}
                                            onChange={handleContactChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="mb-3">
                                <label htmlFor="productName" className="form-label">Contact Email</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="productName"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                />
                            </div>






                            <div className="mb-3">
                                <label htmlFor="productName" className="form-label">Position</label>
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
                            {/* <div className="mb-3">
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
            </div> */}
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
                                    type="date"
                                    value={post}
                                    className="form-control"
                                    id="photo2"
                                    onChange={handlePostChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo3" className="form-label">Deadline</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="photo3"
                                    onChange={handleDeadlineChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="photo1" className="form-label">Company Logo</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="photo1"
                                    accept="image/*"
                                    onChange={handlePhoto1Change}
                                    required
                                />
                            </div>
                            {/* <div className="mb-3">
              <label htmlFor="photo1" className="form-label">Upload video Here</label>
              <input
                type="file"
                className="form-control"
                id="photo1"
                accept="image/*"
                onChange={handleVideoChange}
              />
            </div> */}
                            <div className="mb-3">
                                <label htmlFor="photo1" className="form-label">Upload attachment/document</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="photo1"
                                    onChange={handleDocumentChange}
                                />
                            </div>
                            {loading ? (
                                <div className="text-center">
                                    <ColorRing
                                        visible={true}
                                        height="50"
                                        width="50"
                                        ariaLabel="blocks-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="blocks-wrapper"
                                        colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
                                    />
                                </div>
                            ) : (
                                <button type="submit" className="btn btn-primary">Create Job</button>
                            )}                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PostAdvert;
