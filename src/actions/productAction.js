import {
    PRODUCT_REQUEST,
    PRODUCT_SUCCESS,
    PRODUCT_FAIL,

    PROPERTY_DETAILS_REQUEST,
    PROPERTY_DETAILS_SUCCESS,
    PROPERTY_DETAILS_FAIL,

    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL

  } 
  from "../actions/types";

import config from '../config'

 import axios from "axios";

 const  APP_URL = config.apiUrl


  export const listProducts = () => async (dispatch) => {
    try {
      
      dispatch({ type: PRODUCT_REQUEST });
  
      const response = await axios.get(
        `${APP_URL}/api/jobs`
      );
      dispatch({
        type: PRODUCT_SUCCESS,
        payload: response.data,
      });
      console.log("products.........",response.data)

    } catch (error) {
      dispatch({ type: PRODUCT_FAIL, payload: error });
      console.log("error:", error);
    }
  };
  

  export const singleProperty = (id,slug) => async (dispatch) => {
    try {
      dispatch({ type: PROPERTY_DETAILS_REQUEST });
  
      // Fetch property details
      const response = await axios.get(`${APP_URL}/api/jobs/${slug}`);
      dispatch({ type: PROPERTY_DETAILS_SUCCESS, payload: response.data });
  
      // Increment view count
      try {
        const responseData = await axios.post(`${APP_URL}/api/job/${id}`);
        if (!responseData.ok) {
          throw new Error('Failed to increment view count');
        }
      } catch (error) {
        // Handle error when incrementing view count
        console.error('Error incrementing view count:', error);
      }
    } catch (error) {
      dispatch({ type: PROPERTY_DETAILS_FAIL, payload: error });
    }
  };


  export const singleProduct = (id) => async (dispatch) => {
    try {
      dispatch({ type: PRODUCT_DETAILS_REQUEST });
  
      const response = await axios.get(
        `${APP_URL}/api/products/${id}`
      );
      console.log("Troubleshoot products data", response.data)
  
      dispatch({ type: PRODUCT_DETAILS_SUCCESS, payload: response.data });
    } catch (error) {
      dispatch({ type: PRODUCT_DETAILS_FAIL, payload: error });
    }
  };