// import {
//     PRINTING_REQUEST,
//     PRINTING_SUCCESS,
//     PRINTING_FAIL,

//     BRANDING_REQUEST,
//     BRANDING_SUCCESS,
//     BRANDING_FAIL,

//     DESIGNING_REQUEST,
//     DESIGNING_SUCCESS,
//     DESIGNING_FAIL,
//     DESIGNING,

//   } from "../actions/types";
//   import config from '../config'

//   import axios from "axios";
 
//   const  APP_URL = config.apiUrl


//   export const  printingFilter = () => async (dispatch) => {
//     try {
//       dispatch({ type: PRINTING_REQUEST
//      });
  
//       const response = await axios.get(
//         `${APP_URL}/api/printing`
//       );
  
//       dispatch({ type: PRINTING_SUCCESS, payload: response.data});
//       console.log("all  printing", response.data )

      
//     } catch (error) {

//       dispatch({ type:PRINTING_FAIL, payload:  error});
//       console.log("all error", "error occured" )


//     }
//   };

//   export const  brandingFilter = () => async (dispatch) => {
//     try {
//       dispatch({ type: BRANDING_REQUEST
//      });
  
//       const response = await axios.get(
//         `${APP_URL}/api/branding`
//       );
  
//       dispatch({ type: BRANDING_SUCCESS, payload: response.data});
//       console.log("all branding ", response.data )

      
//     } catch (error) {

//       dispatch({ type:BRANDING_FAIL, payload:  error});
//       console.log("all error", "error occured" )


//     }
//   };

//   export const  designingFilter = () => async (dispatch) => {
//     try {
//       dispatch({ type: DESIGNING_REQUEST
//      });
  
//       const response = await axios.get(
//         `${APP_URL}/api/designing`
//       );
  
//       dispatch({ type:DESIGNING_SUCCESS, payload: response.data});
//       console.log("all DESIGNING ", response.data )

      
//     } catch (error) {

//       dispatch({ type:DESIGNING_FAIL, payload:  error});
//       console.log("all ERROR", "error occured" )


//     }
//   };