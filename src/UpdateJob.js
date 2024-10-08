import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";

import axios from 'axios'
import config from './config'
import { singleProduct } from './actions/productAction'

const APP_URL = config.apiUrl


const UpdateProduct = () => {

    const navigate = useNavigate();

    const ProductDetails = useSelector((state) => state.productDetails);

    const { error, product } = ProductDetails;

    const { id } = useParams();
    const dispatch = useDispatch();



    const [categories, setCategory] = useState(null);

    const [productName, setProductName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [photo1, setPhoto1] = useState(null);
    const [photo2, setPhoto2] = useState(null);
    const [photo3, setPhoto3] = useState(null);
    const [photo4, setPhoto4] = useState(null);

    

    useEffect(() => {
        async function fetchCategories() {

            console.log("all product update state", product)
            setProductName(product.name)
            setPrice(product.price)
            setDescription(product.description)
            setProductCategory(product.categoryID)
            setPhoto1(product.photo1)
            setPhoto2(product.photo2)
            setPhoto3(product.photo3)
            setPhoto4(product.photo4)


        }

        fetchCategories();

    }, []);

    useEffect(() => {
        async function Categories() {
            const { data } = await axios.get(
                `${APP_URL}/api/categories`
            );
            console.log("before state", data)
            setCategory(data);
            console.log("all catgories", categories)
        }

        Categories();

    }, []);

    const handleProductNameChange = (e) => {
        setProductName(e.target.value);
    };

   const handlePriceChange = (e) => {

    setPrice(e.target.value)
   }

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    }

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

    useEffect(() => {
        dispatch(singleProduct(id));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();



        const isValidFile = (file) => {
            // Check if the file exists and has a 'type' property
            if (file && file.type) {
                // Implement file validation logic (e.g., check file type and size)
                // Return true if the file is valid, false otherwise
                return file.type.startsWith('image/') && file.size <= 2048 * 1024; // Example: Max size is 2048 KB
            }
            // Return false if file or file.type is undefined
            return false;
        };
        

        const formData = new FormData();
        formData.append('name', productName);
        formData.append('description', productName);
        formData.append('price', price);
        formData.append('categoryID', productCategory);
        formData.append('description', description);

        // Append files only if they are valid
    if (isValidFile(photo1)) {
        formData.append('photo1', photo1);
    }
    if (isValidFile(photo1)) {
        formData.append('photo2', photo2);
    }
    if (isValidFile(photo1)) {
        formData.append('photo3', photo3);
    }
    if (isValidFile(photo1)) {
        formData.append('photo4', photo4);
    }



  

        axios
            .post(`${APP_URL}/api/products/${id}`, formData)
            .then(function (response) {
                navigate('/productList');
            })
            .catch(function (error) {
                console.log("Error response: ", error.response.data.errors);
            });


          
    };

    return (
        <div className="col-md-9 statistics">
            <div className="card m-4 border-0 shadow">
                <div className="card-body">
                    <h3 className="mb-4">Edit Product</h3>
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
                            <label htmlFor="productName" className="form-label">Product Price</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productName"
                                value={price}
                                onChange={handlePriceChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="productName" className="form-label">Product Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="productName"
                                value={description}
                                onChange={handleDescriptionChange}
                                required
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
                        </div> <div className="mb-3">
                            <label htmlFor="photo1" className="form-label">Photo1</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo1"
                                accept="image/*"
                                onChange={handlePhoto1Change}
                            />
                            {photo1 && <p>Selected file: {photo1.name}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photo1" className="form-label">Photo2</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo1"
                                accept="image/*"
                                onChange={handlePhoto2Change}
                            />
                            {photo1 && <p>Selected file: {photo1.name}</p>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="photo1" className="form-label">Photo3</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo1"
                                accept="image/*"
                                onChange={handlePhoto3Change}
                            />
                            {photo1 && <p>Selected file: {photo3.name}</p>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="photo1" className="form-label">Photo4</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo1"
                                accept="image/*"
                                onChange={handlePhoto4Change}
                            />
                            {photo1 && <p>Selected file: {photo4.name}</p>}
                        </div>
                        
                        
                        
                        {/* <div className="mb-3">
                            <label htmlFor="photo2" className="form-label">Photo 2</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo2"
                                accept="image/*"
                                onChange={handlePhoto2Change}
                            />
                            {photo2 && <p>Selected file: {photo2.name}</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="photo3" className="form-label">Photo 3</label>
                            <input
                                type="file"
                                className="form-control"
                                id="photo3"
                                accept="image/*"
                                onChange={handlePhoto3Change}
                            />
                            {photo3 && <p>Selected file: {photo3.name}</p>}
                        </div> */}

                        <button type="submit" className="btn btn-primary">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default UpdateProduct